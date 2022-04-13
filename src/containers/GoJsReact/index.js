import * as go from 'gojs';
import * as React from 'react';

import { DiagramWrapper } from './components/DiagramWrapper';

class GoJsReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // ...
      nodeDataArray: [
        {
          key: "Products",
          items: [{ name: "ProductID", iskey: true, figure: "Decision", color: 'red' },
          { name: "ProductName", iskey: false, figure: "Hexagon", color: 'blue' },
          { name: "SupplierID", iskey: false, figure: "Decision", color: "purple" },
          { name: "CategoryID", iskey: false, figure: "Decision", color: "purple" }]
        },
        {
          key: "Suppliers",
          items: [{ name: "SupplierID", iskey: true, figure: "Decision", color: 'red' },
          { name: "CompanyName", iskey: false, figure: "Hexagon", color: 'blue' },
          { name: "ContactName", iskey: false, figure: "Hexagon", color: 'blue' },
          { name: "Address", iskey: false, figure: "Hexagon", color: 'blue' }]
        },
        {
          key: "Categories",
          items: [{ name: "CategoryID", iskey: true, figure: "Decision", color: 'red' },
          { name: "CategoryName", iskey: false, figure: "Hexagon", color: 'blue' },
          { name: "Description", iskey: false, figure: "Hexagon", color: 'blue' },
          { name: "Picture", iskey: false, figure: "TriangleUp", color: 'pink' }]
        },
        {
          key: "Order Details",
          items: [{ name: "OrderID", iskey: true, figure: "Decision", color: 'red' },
          { name: "ProductID", iskey: true, figure: "Decision", color: 'red' },
          { name: "UnitPrice", iskey: false, figure: "Circle", color: 'green' },
          { name: "Quantity", iskey: false, figure: "Circle", color: 'green' },
          { name: "Discount", iskey: false, figure: "Circle", color: 'green' }]
        },
      ],
      linkDataArray: [
        { from: "Products", to: "Suppliers", text: "0..N", toText: "1" },
        { from: "Products", to: "Categories", text: "0..N", toText: "1" },
        { from: "Order Details", to: "Products", text: "0..N", toText: "1" }
      ],
      modelData: {
        canRelink: true
      },
      selectedKey: null,
      skipsDiagramUpdate: false
    };
    // bind handler methods
    this.handleDiagramEvent = this.handleDiagramEvent.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleRelinkChange = this.handleRelinkChange.bind(this);
    this.handleDiagramChange = this.handleDiagramChange.bind(this);
  }

  /**
   * Handle any app-specific DiagramEvents, in this case just selection changes.
   * On ChangedSelection, find the corresponding data and set the selectedKey state.
   *
   * This is not required, and is only needed when handling DiagramEvents from the GoJS diagram.
   * @param e a GoJS DiagramEvent
   */
  handleDiagramEvent(e) {
    const name = e.name;
    switch (name) {
      case 'ChangedSelection': {
        const sel = e.subject.first();
        if (sel) {
          this.setState({ selectedKey: sel.key });
        } else {
          this.setState({ selectedKey: null });
        }
        break;
      }
      default: break;
    }
  }

  /**
   * Handle GoJS model changes, which output an object of data changes via Model.toIncrementalData.
   * This method should iterates over those changes and update state to keep in sync with the GoJS model.
   * This can be done via setState in React or another preferred state management method.
   * @param obj a JSON-formatted string
   */
  handleModelChange(obj) {
    const insertedNodeKeys = obj.insertedNodeKeys;
    const modifiedNodeData = obj.modifiedNodeData;
    const removedNodeKeys = obj.removedNodeKeys;
    const insertedLinkKeys = obj.insertedLinkKeys;
    const modifiedLinkData = obj.modifiedLinkData;
    const removedLinkKeys = obj.removedLinkKeys;
    const modifiedModelData = obj.modelData;

    console.log(obj);

    // see gojs-react-basic for an example model change handler
    // when setting state, be sure to set skipsDiagramUpdate: true since GoJS already has this update
    // maintain maps of modified data so insertions don't need slow lookups
    const modifiedNodeMap = new Map();
    this.setState(
      produce(draft => {
        let narr = draft.nodeDataArray;
        if (modifiedNodeData) {
          modifiedNodeData.forEach(nd => {
            modifiedNodeMap.set(nd.key, nd);
            const idx = this.mapNodeKeyIdx.get(nd.key);
            if (idx !== undefined && idx >= 0) {
              narr[idx] = nd;
              if (draft.selectedData && draft.selectedData.key === nd.key) {
                draft.selectedData = nd;
              }
            }
          });
        }
        if (insertedNodeKeys) {
          insertedNodeKeys.forEach(key => {
            const nd = modifiedNodeMap.get(key);
            const idx = this.mapNodeKeyIdx.get(key);
            if (nd && idx === undefined) {
              this.mapNodeKeyIdx.set(nd.key, narr.length);
              narr.push(nd);
            }
          });
        }
        if (removedNodeKeys) {
          narr = narr.filter(nd => {
            if (removedNodeKeys.includes(nd.key)) {
              return false;
            }
            return true;
          });
          draft.nodeDataArray = narr;
          this.refreshNodeIndex(narr);
        }

        let larr = draft.linkDataArray;
        if (modifiedLinkData) {
          modifiedLinkData.forEach(ld => {
            modifiedLinkMap.set(ld.key, ld);
            const idx = this.mapLinkKeyIdx.get(ld.key);
            if (idx !== undefined && idx >= 0) {
              larr[idx] = ld;
              if (draft.selectedData && draft.selectedData.key === ld.key) {
                draft.selectedData = ld;
              }
            }
          });
        }
        if (insertedLinkKeys) {
          insertedLinkKeys.forEach(key => {
            const ld = modifiedLinkMap.get(key);
            const idx = this.mapLinkKeyIdx.get(key);
            if (ld && idx === undefined) {
              this.mapLinkKeyIdx.set(ld.key, larr.length);
              larr.push(ld);
            }
          });
        }
        if (removedLinkKeys) {
          larr = larr.filter(ld => {
            if (removedLinkKeys.includes(ld.key)) {
              return false;
            }
            return true;
          });
          draft.linkDataArray = larr;
          this.refreshLinkIndex(larr);
        }
        // handle model data changes, for now just replacing with the supplied object
        if (modifiedModelData) {
          draft.modelData = modifiedModelData;
        }
        draft.skipsDiagramUpdate = true; // the GoJS model already knows about these updates
      })
    );
  }

  /**
   * Handle changes to the checkbox on whether to allow relinking.
   * @param e a change event from the checkbox
   */
  handleRelinkChange(e) {
    const target = e.target;
    const value = target.checked;
    this.setState({ modelData: { canRelink: value }, skipsDiagramUpdate: false });
  }

  /**
 * Handle any relevant DiagramEvents, in this case just selection changes.
 * On ChangedSelection, find the corresponding data and set the selectedData state.
 * @param e a GoJS DiagramEvent
 */
  handleDiagramChange(e) {
    const name = e.name;
    switch (name) {
      case "ChangedSelection": {
        const sel = e.subject.first();
        this.setState(
          produce(draft => {
            if (sel) {
              if (sel instanceof go.Node) {
                const idx = this.mapNodeKeyIdx.get(sel.key);
                if (idx !== undefined && idx >= 0) {
                  const nd = draft.nodeDataArray[idx];
                  draft.selectedData = nd;
                }
              } else if (sel instanceof go.Link) {
                const idx = this.mapLinkKeyIdx.get(sel.key);
                if (idx !== undefined && idx >= 0) {
                  const ld = draft.linkDataArray[idx];
                  draft.selectedData = ld;
                }
              }
            } else {
              draft.selectedData = null;
            }
          })
        );
        break;
      }
      case "ExternalObjectsDropped": {
        const drop = e.subject.first();
        alert(`Dropped key: ${drop.data.key}, text: ${drop.data.text}`);
        break;
      }
      default:
        break;
    }
  }

  render() {
    let selKey;
    if (this.state.selectedKey !== null) {
      selKey = <p>Selected key: {this.state.selectedKey}</p>;
    }

    return (
      <div>
        <DiagramWrapper
          nodeDataArray={this.state.nodeDataArray}
          linkDataArray={this.state.linkDataArray}
          modelData={this.state.modelData}
          skipsDiagramUpdate={this.state.skipsDiagramUpdate}
          onDiagramEvent={this.handleDiagramEvent}
          onModelChange={this.handleModelChange}
          onDiagramChange={this.handleDiagramChange}
        />
        <label>
          Allow Relinking?
          <input
            type='checkbox'
            id='relink'
            checked={this.state.modelData.canRelink}
            onChange={this.handleRelinkChange} />
        </label>
        {selKey}
      </div>
    );
  }
}

export default GoJsReact