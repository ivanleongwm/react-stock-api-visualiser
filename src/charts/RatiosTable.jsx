import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import useEffect from 'react';
import './RatiosTable.css'


export default function RatiosTable({ratioz,ratios}) {

    let ratiosData = ratios
    let data = []

    Object.keys(ratiosData).map(function(key,index) {
      data.push({
        col1: key,
        col2: ratiosData[key].grossProfitMarginTTM,
        col3: ratiosData[key].operatingProfitMarginTTM,
        col4: ratiosData[key].peRatioTTM,
        col5: ratiosData[key].currentRatioTTM,
        col6: ratiosData[key].returnOnEquityTTM,
      })
      
    });
  
    const columns = React.useMemo(
      () => [
        {
          Header: 'Ticker Symbol',
          accessor: 'col1', // accessor is the "key" in the data
        },
        {
          Header: 'Gross Profit Margin',
          accessor: 'col2', // accessor is the "key" in the data
        },
        {
          Header: 'Operating Profit Margin',
          accessor: 'col3',
        },
        {
            Header: 'PE Ratio',
            accessor: 'col4',
        },
        {
            Header: 'Current Ratio',
            accessor: 'col5',
        },
        {
            Header: 'Return on Equity',
            accessor: 'col6',
        },
      ],
      []
    )
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data })
  
    return (
      <div className="tableContainer">
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: 'solid 3px red',
                      background: 'white',
                      color: 'black',
                      fontWeight: 'bold',
                      padding: '10px',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                          background: 'white',
                          font: 'Roboto',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
