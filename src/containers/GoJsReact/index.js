import * as React from 'react';
import * as go from 'gojs';
import { produce } from "immer";

import { DiagramWrapper } from './components/DiagramWrapper';
import { NODE_DATA_ARRAY, LINK_DATA_ARRAY } from './Constant'

import './GoJsReact.css'

class GoJsReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // ...
      nodeDataArray: NODE_DATA_ARRAY,
      linkDataArray: LINK_DATA_ARRAY,
      modelData: {
        canRelink: true
      },
      selectedKey: null,
      skipsDiagramUpdate: false,
      openTabs: []
    };
    // Maps to store key -> arr index for quick lookups
    this.mapNodeKeyIdx = new Map();
    this.mapLinkKeyIdx = new Map();
    this.refreshNodeIndex(this.state.nodeDataArray);
    this.refreshLinkIndex(this.state.linkDataArray);
    // bind handler methods
    this.handleDiagramEvent = this.handleDiagramEvent.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleRelinkChange = this.handleRelinkChange.bind(this);
    this.handleDiagramChange = this.handleDiagramChange.bind(this);

    // collect all of the predefined arrowhead names
    var arrowheads = go.Shape.getArrowheadGeometries().toKeySet().toArray();
    if (arrowheads.length % 2 === 1) arrowheads.push("");  // make sure there's an even number

    // create all of the link data, two arrowheads per link
    var linkdata = [];
    var i = 0;
    for (var j = 0; j < arrowheads.length; j = j + 2) {
      linkdata.push({ from: "Center", to: i++, toArrow: arrowheads[j], fromArrow: arrowheads[j + 1] });
    }
    console.log('111111111 linkdata', linkdata, 'arrowheads', arrowheads)

  }
  /**
 * Update map of node keys to their index in the array.
 */
  refreshNodeIndex(nodeArr) {
    this.mapNodeKeyIdx.clear();
    nodeArr.forEach((n, idx) => {
      this.mapNodeKeyIdx.set(n.key, idx);
    });
  }

  /**
   * Update map of link keys to their index in the array.
   */
  refreshLinkIndex(linkArr) {
    this.mapLinkKeyIdx.clear();
    linkArr.forEach((l, idx) => {
      this.mapLinkKeyIdx.set(l.key, idx);
    });
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

  onListClick(index) {
    let tempData = [...this.state.openTabs]

    if (this.state.openTabs.includes(index)) {
      tempData = tempData.filter(data => data !== index)
      this.setState({ openTabs: [...tempData] })
    } else {
      this.setState({ openTabs: [...this.state.openTabs, index] })
    }
  }

  render() {
    let selKey;
    if (this.state.selectedKey !== null) {
      selKey = <p>Selected key: {this.state.selectedKey}</p>;
    }

    return (
      <div className='flexBox'>
        <div className='leftBar'>
          <label>
            Allow Relinking?
            <input
              type='checkbox'
              id='relink'
              checked={this.state.modelData.canRelink}
              onChange={this.handleRelinkChange} />
          </label>
          {selKey}
          <div>
            <ul>
              {NODE_DATA_ARRAY.map((table, index) =>
                <li onClick={() => this.onListClick(index)} key={table.key} > {table.key}
                  {this.state.openTabs.includes(index) && table.items.map((item) => <ol key={table.name}>
                    {item.name}</ol>)} </li>)}
            </ul>
          </div>
        </div>
        <div className='erd'>
          <DiagramWrapper
            nodeDataArray={this.state.nodeDataArray}
            linkDataArray={this.state.linkDataArray}
            modelData={this.state.modelData}
            skipsDiagramUpdate={this.state.skipsDiagramUpdate}
            onModelChange={this.handleModelChange}
            onDiagramChange={this.handleDiagramChange}
          />

        </div>
      </div>
    );
  }
}

export default GoJsReact