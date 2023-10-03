import MonthCalendar from "../../components/TaskCalendar/MonthCalendar"
import TaskForm from "../../components/TaskForm/TaskForm"
import { useState } from 'react'

function Task(){
    const [ showAlert, setShowAlert ] = useState(false)

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
            <h1>Task</h1>
            <button onClick={()=> handleOpenAlert()}>create Task</button>
            <MonthCalendar/>
        </div>
    )
}

export default Task