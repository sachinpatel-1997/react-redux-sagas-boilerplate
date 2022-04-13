import React, { useEffect, useState, useCallback } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"
import { acequire } from 'ace-builds/src-noconflict/ace';
import { TABLE_AUTOCOMPLETE_SCORE, 
    COLUMN_AUTOCOMPLETE_SCORE, 
    SQL_FUNCTIONS_AUTOCOMPLETE_SCORE,
    SCHEMA_AUTOCOMPLETE_SCORE
} from 'constants/index'
import sqlKeywords from 'utils/sqlKeywords'
const AceEditorWrapper = (props) => {

   const { tables, columns, schemas, handleChange, extendedTables, sql } = props
   const [ words, setWords ] = useState([])
 
   const setAutoCompleter = useCallback((tables) => {
    const tableWords = tables.map(t => {
        const tableName = t.value;
        const extendedTable = extendedTables.find(et => et.name === tableName);
        const cols = (extendedTable && extendedTable.columns) || [];
        cols.forEach(col => {
            columns[col.name] = null; // using an object as a unique set
        });

        return {
            name: t.label,
            value: tableName,
            score: TABLE_AUTOCOMPLETE_SCORE,
            meta: 'table',
        };
        });

        const columnWords = Object.keys(columns).map(col => ({
        name: col,
        value: col,
        score: COLUMN_AUTOCOMPLETE_SCORE,
        meta: 'column',
        }));

        const functionWords = [].map(func => ({
        name: func,
        value: func,
        score: SQL_FUNCTIONS_AUTOCOMPLETE_SCORE,
        meta: 'function',
        }));

        const completer = {
        insertMatch: (editor, data) => {
            // executing https://github.com/thlorenz/brace/blob/3a00c5d59777f9d826841178e1eb36694177f5e6/ext/language_tools.js#L1448
            editor.completer.insertMatch(
            `${data.caption || data.name}${
                ['function', 'schema'].includes(data.meta) ? '' : ' '
            }`,
            );
        },
        };

        const schemaWords = schemas.map(s => ({
        name: s.label,
        value: s.value,
        score: SCHEMA_AUTOCOMPLETE_SCORE,
        meta: 'schema',
        }));

        const keywords = schemaWords
        .concat(tableWords)
        .concat(columnWords)
        .concat(functionWords)
        .concat(sqlKeywords)
        .map(word => ({
            ...word,
            completer,
        }));
        setWords(keywords)
    },[columns, extendedTables, schemas])

    useEffect(() => {
        tables.length > 0 && setAutoCompleter(tables)
      },[setAutoCompleter, tables])
   
   const myCompleter = {
      getCompletions: ((editor, session, pos, prefix, callback) => {
            if (!Number.isNaN(parseInt(prefix, 10))) {
                return;
            }
            if ((session.getMode()).$id === 'ace/mode/sql') {
                callback(null, words);
            }
        })
   }
   const langTools = acequire('ace/ext/language_tools');
   langTools.addCompleter(myCompleter)
   return(
   <div>
       <AceEditor
         value={sql}
         mode="sql"
         theme="github"
         fontSize={16}
         onChange={handleChange}
         name="UNIQUE_ID_OF_DIV"
         editorProps={{ $blockScrolling: true }}
         setOptions={{
         enableBasicAutocompletion: true,
         enableLiveAutocompletion: true,
         enableSnippets: true
         }}
      />
   </div>
   )
}

export default AceEditorWrapper