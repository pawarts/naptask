import React from 'react';

import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import s from './PerfomanceStyles/PerfomanceDiagram.module.css';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const PerfomanceDiagram = (props) => {

    const done = 0.43;
    const undone = 1 - done;

    const data = {
        datasets: [{
            data: [done, undone],
            backgroundColor: ['rgb(28, 27, 31)', 'rgb(255,255,255)'],
            borderColor: [],
            borderWidth: 0,
        }],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            }
        }
    };

    return (
        <div className={s.diagram_wrapper}>
            <div className={` ${s.diagram_item}`}>
                <Pie data={data} options={options}></Pie>
            </div>
            <p className='button_text'>6/10</p>
        </div>
    );
};

export default PerfomanceDiagram;
