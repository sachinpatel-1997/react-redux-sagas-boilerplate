import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/ext-language_tools"
import { Button } from 'react-bootstrap';

const SqllabComponent = () => {
   const onChange = (newValue) => {
      console.log("change", newValue);
   }

   return(
   <div>
      Sqllab Editor
      <AceEditor
         mode="mysql"
         theme="tomorrow"
         fontSize={16}
         onChange={onChange}
         name="UNIQUE_ID_OF_DIV"
         editorProps={{ $blockScrolling: true }}
         setOptions={{
         enableBasicAutocompletion: true,
         enableLiveAutocompletion: true,
         enableSnippets: true
         }}
      />
      <Button>Run</Button>
      <Button variant="outline-primary">Save Query</Button>
   </div>
   )
}

export default SqllabComponent