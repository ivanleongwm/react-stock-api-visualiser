import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'


export default function RatiosTable({ratioz}) {
    const data = React.useMemo(
      () => [
        {
          col1: ratioz[0].grossProfitMarginTTM.toFixed(2),
          col2: ratioz[0].operatingProfitMarginTTM.toFixed(2),
          col3: ratioz[0].peRatioTTM.toFixed(2),
          col4: ratioz[0].currentRatioTTM.toFixed(2),
          col5: ratioz[0].returnOnEquityTTM.toFixed(2),
        },
        {
            col1: 'Hello',
            col2: 'World',
            col3: 'hey',
            col4: 'World',
            col5: 'hey',
        },
        {
            col1: 'Hello',
            col2: 'World',
            col3: 'hey',
            col4: 'World',
            col5: 'hey',
        },
        {
            col1: 'Hello',
            col2: 'World',
            col3: 'hey',
            col4: 'World',
            col5: 'hey',
        },
      ],
      []
    )
  
    const columns = React.useMemo(
      () => [
        {
          Header: 'Gross Profit Margin',
          accessor: 'col1', // accessor is the "key" in the data
        },
        {
          Header: 'Operating Profit Margin',
          accessor: 'col2',
        },
        {
            Header: 'PE Ratio',
            accessor: 'col3',
        },
        {
            Header: 'Current Ratio',
            accessor: 'col4',
        },
        {
            Header: 'Return on Equity',
            accessor: 'col5',
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
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
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
                        background: 'papayawhip',
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
    )
  }
