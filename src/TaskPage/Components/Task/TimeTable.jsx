import s from '../ComponentStyle/TimeTable.module.css'


const TimeTable = (props) => {

    function getCoordiantion(event) {
        //console.log(event.target.getBoundingClientRect())
    }



    const time = new Date();
    let hourNow = time.getHours();

    const timeArray = [];

    for (let index = 0; index < 8; index++) {

        if (hourNow + index > 23) {
            hourNow = -index;
        }

        timeArray.push(
            <span key={index} className={s.time_text} onClick={event => [getCoordiantion(event)]}>
                {hourNow + index > 12 ? hourNow - 12 + index : hourNow + index}&nbsp;<p key={index - 1}>
                    {hourNow + index >= 12 ? 'pm' : 'am'}
                </p>
            </span>
        )
    }


    return (
        <div className={s.time_wrapper}>
            {timeArray}
        </div>
    )


}

export default TimeTable