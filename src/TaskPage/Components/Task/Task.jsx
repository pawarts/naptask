import s from '../ComponentStyle/Task.module.css'

import time_icon from './TaskIcon/TimeIcon.svg'
import more_icon from './TaskIcon/MoreIcon.svg'


//1 hour height qual to 52px

const Task = (props) => {
    return (
        <div className={s.task_wrapper} style={{ top: `${26}px` }}>
            <div className={s.task_info}>
                <h3 className={`${s.task_title} task_font`}>Create new tasks for my workers</h3>
                <div className={s.time_wrapper}>
                    <img src={time_icon} alt="" className={s.time_icon} />
                    <p className={`${s.time_text} task_font grey`} >10:20am - 12:30am</p>
                </div>
            </div>
            <div className={s.task_more}>
                <img src={more_icon} alt="" className={s.task_more_icon} />
            </div>
        </div >
    )
}

export default Task