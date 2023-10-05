import TaskCalendar from "../../components/TaskCalendar/TaskCalendar"
import TaskDetail from "../../components/TaskDetail/TaskDetail"
import TaskForm from "../../components/TaskForm/TaskForm"
import { useState } from 'react'

function Task(){
    const [ showAlert, setShowAlert ] = useState(false)
    const [ showDetails, setShowDetails ] = useState(null)
    const [ showUpdate, setShowUpdate ] = useState(false)

    const handleCloseDetail = () => {
        setShowDetails(null)
    }

    const handleCloseAlert = () => {
        setShowAlert(false)
    }

    const handleOpenAlert = () => {
        setShowAlert(true)
    }

    return(
        <div>
            {showAlert && (
                <div className="pop-ups">
                    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
                        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
                            <TaskForm/>
                            <button onClick={()=> handleCloseAlert()}>X</button>
                        </div>
                    </div>
                </div>
            )}
            {showDetails && (
                <div className="pop-ups">
                    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
                        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
                            {!showUpdate && (
                            <button onClick={()=> handleCloseDetail()} className="bg-red-600 w-6 h-6 rounded-md hover:bg-red-700">X</button>
                            )}
                            <TaskDetail id={showDetails} showUpdate={showUpdate} setShowUpdate={setShowUpdate} handleCloseDetail={handleCloseDetail}/>
                        </div>
                    </div>
                </div>
            )}
            <h1>Task</h1>
            <button onClick={()=> handleOpenAlert()}>create Task</button>
            <TaskCalendar setShowDetails={setShowDetails} />
        </div>
    )
}

export default Task