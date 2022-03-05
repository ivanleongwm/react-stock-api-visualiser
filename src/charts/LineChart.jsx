import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    "date": "2022-03-04",
    "close": 163.17
  },
  {
    "date": "2022-03-03",
    "close": 166.23
  },
  {
    "date": "2022-03-02",
    "close": 166.56
  },
  {
    "date": "2022-03-01",
    "close": 163.199997
  },
  {
    "date": "2022-02-28",
    "close": 165.119995
  },
  {
    "date": "2022-02-25",
    "close": 164.850006
  },
  {
    "date": "2022-02-24",
    "close": 162.740005
  },
];

data.reverse()

export default class Example extends PureComponent {

  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={this.props.dailyPrices}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis type='number' domain={['dataMin','dataMax']}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="close" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
