import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: '00', heartrate: 2400 },
    { name: '', heartrate: 1398 },
    { name: '02', heartrate: 8800 },
    { name: '', heartrate: 3908 },
    { name: '04', heartrate: 4800 },
    { name: '', heartrate: 3800 },
    { name: '06', heartrate: 4300 },
    { name: '', heartrate: 2400 },
    { name: '08', heartrate: 1398 },
    { name: '', heartrate: 6800 },
    { name: '10', heartrate: 3908 },
    { name: '', heartrate: 4800 },
];


export default class Example extends PureComponent {

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 15,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="heartrate" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
