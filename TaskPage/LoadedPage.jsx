import Navigation from "../BaseComponents/Navigation/Navigation"
import Table from "./Components/Task/Table"
import TaskHeader from "./Components/TaskHeader/TaskHeader"
import Perfomance from "./Components/PerfomanceMonitor/Perfomance"
import WorkInProgress from "./WarningWorkInProgress/WorkInProgress"

import { Link } from "react-router-dom"
import { useState } from "react"

import s from './Task.module.css'
import add_task_button from './TaskIcons/AddTaskButton.svg'

const LoadedPage = (props) => {

    const [date, setDate] = useState(new Date());
    const [howManyTask, setHowManyTask] = useState({
        howManyTask: 0,
        howManyTaskDone: 0
    })

    const changeHowManyTask = (newObject) => {
        setHowManyTask(newObject)
    }

    const change_date = (newDate) => {
        return setDate(newDate)
    }

    const loaded = props.loaded

    return (
        <div className={s.wrapper}>
            <WorkInProgress />
            <Perfomance howManyTask={howManyTask} />
            <div className={s.schedule_wrapper}>
                <TaskHeader change_date={change_date} />
                <Table date={date} changeHowManyTask={changeHowManyTask} loaded={loaded} />
            </div>
            <Navigation />

            <Link to='/create_task' className={s.add_task_button}>
                <img src={add_task_button} alt="" />
            </Link>
        </div>
    )
}

export default LoadedPage