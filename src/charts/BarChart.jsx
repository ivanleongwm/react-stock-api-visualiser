import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    "date": "2022-03-04 16:00:00",
    "open": 163.17000000,
    "low": 163.17000000,
    "high": 164.07000000,
    "close": 163.48000000,
    "volume": 296914
  },
  {
    "date": "2022-03-04 15:59:00",
    "open": 163.37110000,
    "low": 163.14000000,
    "high": 163.53000000,
    "close": 163.22000000,
    "volume": 954418
  },
  {
    "date": "2022-03-04 15:58:00",
    "open": 163.26010000,
    "low": 163.20000000,
    "high": 163.39000000,
    "close": 163.37000000,
    "volume": 364991
  },
  {
    "date": "2022-03-04 15:57:00",
    "open": 163.15000000,
    "low": 163.07500000,
    "high": 163.30000000,
    "close": 163.26000000,
    "volume": 299498
  },
  {
    "date": "2022-03-04 15:56:00",
    "open": 163.14000000,
    "low": 163.04000000,
    "high": 163.19000000,
    "close": 163.16000000,
    "volume": 275582
  },
  {
    "date": "2022-03-04 15:55:00",
    "open": 163.10000000,
    "low": 163.08000000,
    "high": 163.48000000,
    "close": 163.13090000,
    "volume": 581019
  },
  {
    "date": "2022-03-04 15:54:00",
    "open": 162.87000000,
    "low": 162.86000000,
    "high": 163.21000000,
    "close": 163.12000000,
    "volume": 536959
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={this.props.minutePrices}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['dataMin','dataMax']}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="low" fill="#8884d8" />
          <Bar dataKey="high" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
