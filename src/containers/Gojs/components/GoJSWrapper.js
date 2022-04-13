/*
 *  Copyright (C) 1998-2019 by Northwoods Software Corporation. All Rights Reserved.
 */

import * as go from "gojs";
import { ReactDiagram, ReactOverview, ReactPalette } from "gojs-react";
import * as React from "react";

import "./GoJSWrapper.css";

export class GoJSWrapper extends React.Component {
  /** @internal */
  constructor(props) {
    super(props);
    this.state = {
      observed: null
    };
    this.diagramRef = React.createRef();
  }

  /**
   * Get the diagram reference and add any desired diagram listeners.
   * Typically the same function will be used for each listener, with the function using a switch statement to handle the events.
   */
  componentDidMount() {
    if (!this.diagramRef.current) return;
    const diagram = this.diagramRef.current.getDiagram(); // refs are up-to-date
    if (diagram instanceof go.Diagram) {
      this.setState({ observed: diagram });
      diagram.addDiagramListener(
        "ChangedSelection",
        this.props.onDiagramChange
      );
      diagram.addDiagramListener(
        "ExternalObjectsDropped",
        this.props.onDiagramChange
      );
    }
  }

  /**
   * Get the diagram reference and remove listeners that were added during mounting.
   */
  componentWillUnmount() {
    if (!this.diagramRef.current) return;
    const diagram = this.diagramRef.current.getDiagram();
    if (diagram instanceof go.Diagram) {
      this.setState({ observed: null });
      diagram.removeDiagramListener(
        "ChangedSelection",
        this.props.onDiagramChange
      );
      diagram.removeDiagramListener(
        "ExternalObjectsDropped",
        this.props.onDiagramChange
      );
    }
  }

  /**
   * Diagram initialization method, which is passed to the Diagram component.
   * This method is responsible for making the diagram and initializing the model, any templates,
   * and maybe doing other initialization tasks like customizing tools.
   * The model's data should not be set here, as the Diagram component handles that.
   */
  initDiagram() {
    const $ = go.GraphObject.make;
    const diagram = $(go.Diagram, {
      "undoManager.isEnabled": true, // enable undo & redo
      "clickCreatingTool.archetypeNodeData": {
        text: "new node",
        color: "lightblue"
      },
      model: $(go.GraphLinksModel, {
        linkKeyProperty: "key", // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
        // positive keys for nodes
        makeUniqueKeyFunction: (m, data) => {
          let k = data.key || 1;
          while (m.findNodeDataForKey(k)) k++;
          data.key = k;
          return k;
        },
        // negative keys for links
        makeUniqueLinkKeyFunction: (m, data) => {
          let k = data.key || -1;
          while (m.findLinkDataForKey(k)) k--;
          data.key = k;
          return k;
        }
      })
    });

    // define a simple Node template
    diagram.nodeTemplate = $(
      go.Node,
      "Auto", // the Shape will go around the TextBlock
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(
        go.Shape,
        "RoundedRectangle",
        {
          name: "SHAPE",
          fill: "lightgray",
          strokeWidth: 0,
          // set the port properties:
          portId: "",
          fromLinkable: true,
          toLinkable: true,
          cursor: "pointer"
        },
        // Shape.fill is bound to Node.data.color
        new go.Binding("fill", "color")
      ),
      $(
        go.TextBlock,
        { margin: 8, editable: true, font: "400 .875rem Roboto, sans-serif" }, // some room around the text
        new go.Binding("text").makeTwoWay()
      )
    );

    // relinking depends on modelData
    diagram.linkTemplate = $(
      go.Link,
      new go.Binding("relinkableFrom", "canRelink").ofModel(),
      new go.Binding("relinkableTo", "canRelink").ofModel(),
      new go.Binding("points", "pts").makeTwoWay(),
      $(go.Shape),
      $(go.Shape, { toArrow: "Standard" })
    );

    return diagram;
  }

  initPalette() {
    const $ = go.GraphObject.make;
    const palette = $(go.Palette);
    return palette;
  }

  initOverview() {
    const $ = go.GraphObject.make;
    const overview = $(go.Overview, { contentAlignment: go.Spot.Center });
    return overview;
  }

  render() {
    return (
      <div className="gojs-wrapper-div">
        <ReactPalette
          initPalette={this.initPalette}
          divClassName="palette-component"
          nodeDataArray={[{ key: 0, text: "Alpha" }]}
        />
        <ReactDiagram
          ref={this.diagramRef}
          divClassName="diagram-component"
          initDiagram={this.initDiagram}
          nodeDataArray={this.props.nodeDataArray}
          linkDataArray={this.props.linkDataArray}
          modelData={this.props.modelData}
          onModelChange={this.props.onModelChange}
          skipsDiagramUpdate={this.props.skipsDiagramUpdate}
        />
        <ReactOverview
          initOverview={this.initOverview}
          divClassName="overview-component"
          observedDiagram={this.state.observed}
        />
      </div>
    );
  }
}
