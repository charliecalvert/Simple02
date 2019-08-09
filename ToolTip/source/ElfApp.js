import React, {Component} from 'react';
import Example from './Example';
import { Chart } from '@bit/primefaces.primereact.chart';

const data = {
    labels: ['A', 'B', 'C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
    ]
};

class ElfApp extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to Elf App</h1>
                <Example/>
                <div style={{ width: 400 }}>
                    <Chart type='pie' data={data} />
                </div>
            </div>
        );
    }
}

export default ElfApp;
