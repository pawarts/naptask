import TimeTable from "./TimeTable"
import Task from './Task'

import s from '../ComponentStyle/Table.module.css'


const Table = (props) => {
    return (
        <div className={s.wrapper}>
            <TimeTable />
            <Task />
        </div>
    )
}

export default Table