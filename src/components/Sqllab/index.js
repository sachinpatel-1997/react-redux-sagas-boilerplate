import React,{ useEffect, useState } from 'react';
import AceEditorWrapper from './AceEditorWrapper';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getDatabase, getData } from 'middleware/sqllab'
const SqllabComponent = () => {
   const [ sql, setSql ] = useState(null)
   const [ value, setValue ] = useState(null)
   const dispatch = useDispatch();
   const {database} = useSelector((state) => state.sqllab.database)
   const [selectedTable, setSelectedTable] = useState('');
   const data = useSelector((state) => state.sqllab.data)

   const tableData = database && database.tables || []
   const col = tableData[0] && tableData[0].columns || {}
   const [ columns , setColumns ] = useState(col)

   useEffect(() => {
      dispatch(getDatabase())
   },[])

   useEffect(() => {
      setColumns(col)
   },[col])


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
         else if (sql.toLowerCase().includes('select * from person'))
           return 'Person'
         else if (sql.toLowerCase().includes('select * from product'))
           return 'Product'
         else if (sql.toLowerCase().includes('select * from transactions'))
           return 'Transactions'
         else if (sql.toLowerCase().trim() === 'select * from block')
           return 'Block'
         else if (sql.toLowerCase().trim() === 'select * from wallet')
           return 'Wallet'
         else if (sql.toLowerCase().includes('select * from block'))
           return 'Block'
         else if (sql.toLowerCase().includes('select * from wallet'))
           return 'Wallet'
         else
          return null
      }

   }

   const getVariable = () => {
      if(sql){
         const match = sql.match(/[^{}]*(?=\})/g)
        return match && match[0]
      }
   }

   const handleChange = (event) => {
      event && setValue(event.target.value)
   }


   const runQuery = () => {
      dispatch(getData(getId(),getVariable(), value))
   }
   const handleTableChange = (e) => {
      const column = tableData.filter((item) => item.label ===e.target.value)[0] || {}
      setColumns({ ... column.columns })
      setSelectedTable(e.target.value)
   }

   const handleColumns = (data) => {
      const column = tableData.filter((item) => item.label ===data.name)[0] || {}
      setColumns({ ... column.columns })
      setSelectedTable(data.name)
   }

   return(
   <div className='row'>
      <div className='col-3'>
         <label>select database</label>
         <select><option>example</option></select><br/>

         <label>select tables</label>
         <select onChange={ handleTableChange }>
            {
               tableData && tableData.map((item) =>
               <option value={item.label} selected={selectedTable === item.label} >{item.label}</option>)
            }
         </select>

         <ul>{
            Object.keys(columns).map((d) => <li>{d}</li>)
            }</ul>
      </div>
      <div className='col-9'>
      <h5>Sqllab Editor</h5>
      <label>Variable : {getVariable()}</label>
      <input type="text" id="fname" name="fname" onChange={(e) => handleChange(e)}/>
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
           data && data.map((item, key) => {
            return <tbody>
             {Object.keys(item).map(function(value, idx) {
               return <tr key={idx}>
                 <td>{value}</td>
                 <td>{item[value]}</td>
               </tr>
             })}
           </tbody>
           })
         }

      </table>
      </div>
   </div>
   )
}

export default SqllabComponent