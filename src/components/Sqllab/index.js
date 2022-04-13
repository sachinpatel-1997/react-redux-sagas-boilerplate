import React,{ useState } from 'react';
import AceEditor from "react-ace";
// import {FullSQLEditor as AsyncAceEditor} from './AysncAceEditor';
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"
import { Button } from 'react-bootstrap';
const SqllabComponent = () => {
   const [ sql, setSql ] = useState(null)
   const [ show, showTable ] = useState(null)
   const onChange = (newValue) => {
      setSql(newValue)
   }

   const isValid = () => {
      return sql === 'select * from order'
   }

   const runQuery = () => {
      showTable(isValid())
   }

   return(
   <div>
      Sqllab Editor

      {/* <AsyncAceEditor
        onLoad={() => {}}
        onBlur={() => {}}
        height={200}
        onChange={onChange}
        width="100%"
        editorProps={{ $blockScrolling: true }}
        enableLiveAutocompletion={true}
      //   annotations={this.getAceAnnotations()}
      /> */}
      <AceEditor
         value={sql}
         mode="sql"
         theme="github"
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
      <Button onClick={runQuery}>Run</Button>
      <Button variant="outline-primary">Save Query</Button>
      {show ? <table>
         <tr><th>ID</th><th>Name</th></tr>
         <tr><td>1</td><td>#order123</td></tr>
         <tr><td>2</td><td>#order123</td></tr>

      </table> : <p>No records found</p>}
   </div>
   )
}

export default SqllabComponent