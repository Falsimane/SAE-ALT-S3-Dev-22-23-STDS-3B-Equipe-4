import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={10} height={10} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
          <Bar dataKey="pv" fill="cyan"  />
          <Legend/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}