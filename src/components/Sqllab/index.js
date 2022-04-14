import React,{ useEffect, useState } from 'react';
import AceEditorWrapper from './AceEditorWrapper';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getDatabase, getData } from 'middleware/sqllab'
const SqllabComponent = () => {
   const [ sql, setSql ] = useState(null)
   const dispatch = useDispatch()
   const {database} = useSelector((state) => state.sqllab.database)
   const [ columns , setColumns ] = useState({
      id: null,
      name: null
   })
   const data = useSelector((state) => state.sqllab.data)

   const tableData = database?.tables || []
   useEffect(() => {
      dispatch(getDatabase())
   },[])


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
   const handleTableChange = (e) => {
      const column = tableData.filter((item) => item.label ===e.target.value)[0] || {}
      setColumns({ ... column.columns })
   }
   const handleColumns = (data) => {
      const column = tableData.filter((item) => item.label ===data.name)[0] || {}
      setColumns({ ... column.columns })
   }
   return(
   <div className='row'>
      <div className='col-3'>
         <label>select database</label>
         <select><option>example</option></select><br/>

         <label>select tables</label>
         <select onChange={ handleTableChange }>
            {
               tableData.map((item) =>  <option value={item.label} >{item.label}</option>)
            }
         </select>

         <ul>{
            Object.keys(columns).map((d) => <li>{d}</li>)
            }</ul>
      </div>
      <div className='col-9'>
      <AceEditorWrapper
         value={sql}
         tables={tableData}
         handleColumns={handleColumns}
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
   </div>
   )
}

export default SqllabComponent