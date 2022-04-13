import * as React from "react";
import * as ReactDOM from "react-dom";

import DatabaseDiagram, { IDatabaseTable } from "@cybertec/react-database-diagram";

const schema = [{
    columns: [
      { name: "a", type: "integer" },
      { name: "b", type: "integer" },
      { name: "c", type: "integer" }
    ],
    table_name: "t1",
    foreign_keys: [
      {
        toTable: "t2",
        toSchema: "public",
        toColumns: ["c"],
        fromColumns: ["c"]
      },
    ],
    primary_keys: ["a"],
    table_schema: "cypex_generated"
  },
  {
    columns: [{ name: "c", type: "integer" }],
    table_name: "t2",
    foreign_keys: [],
    table_schema: "cypex_generated"
  },];

export default () => {
  return <DatabaseDiagram schema={schema} />  
} 
