import React,{ useEffect, useState } from 'react';
import AceEditorWrapper from './AceEditorWrapper';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getDatabase, getData } from 'middleware/sqllab'
const SqllabComponent = () => {
   const [ sql, setSql ] = useState(null)
   const dispatch = useDispatch()
   const {database} = useSelector((state) => state.sqllab.database)
   const data = useSelector((state) => state.sqllab.data)

   const tableData = database?.tables || {}
   useEffect(() => {
      dispatch(getDatabase())
   },[])


   const columns = {
      id: null,
      name: null
   }

   const extendedTables = []

   const onChange = (newValue) => {
      setSql(newValue)
   }

   const getId = () => {
      if(sql){
         if(sql.toLowerCase().trim() === 'select * from person')
           return 'Person'
         else if (sql.toLowerCase().trim() === 'select * from product')
           return 'Product'
         else
          return null
      }
      
   }

   const runQuery = () => {
      dispatch(getData(getId()))
   }
      return(
   <div>
      Sqllab Editor
      <AceEditorWrapper
         value={sql}
         tables={tableData}
         extendedTables={extendedTables}
         columns={ columns }
         handleChange={onChange}
         schemas={[]}
      />
      <Button onClick={runQuery}>Run</Button>
      <Button variant="outline-primary">Save Query</Button>
      {!data && <p>No records found</p>}
      <table>{
           data?.map((item) => {
            return <tr><td>{item.id}</td><td>{item.name}</td></tr>
           })
         }
       
      </table>
   </div>
   )
}

export default SqllabComponent