import LoadedPage from "./LoadedPage"
import Loading from "./Components/Loading/Loading"

import { useState } from "react"


const TaskPage = (props) => {
    const [loaded, setLoaded] = useState(false);

    const loading = (status) => {
        setLoaded(status)
    }

    return (
        <div>
            <LoadedPage loaded={loading} />
            <Loading style={{ display: false ? 'none' : 'block' }} />
        </div>
    )
}

export default TaskPage