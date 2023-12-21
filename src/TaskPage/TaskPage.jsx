import Navigation from "../BaseComponents/Navigation/Navigation"
import Table from "./Components/Task/Table"
import TaskHeader from "./Components/TaskHeader/TaskHeader"
import Perfomance from "./Components/PerfomanceMonitor/Perfomance"

import s from "./Task.module.css"


const TaskPage = (props) => {
    return (
        <div className={s.wrapper}>
            <Perfomance />
            <div>
                <TaskHeader />
                <Table />
            </div>
            <Navigation />
        </div>
    )
}

export default TaskPage