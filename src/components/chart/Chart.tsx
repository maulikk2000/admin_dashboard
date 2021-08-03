import React, { FC } from "react";
import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




interface  IChart{
    title: string;
    data: any;
    dataKey: string;
    grid: boolean;
}

const Chart = ({title, data, dataKey, grid} : IChart) => (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
             {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={dataKey} stroke="#5550bd"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        </ResponsiveContainer>
    </div>
)

export default Chart;