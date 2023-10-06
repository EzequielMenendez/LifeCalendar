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
        <div className="mx-1 md:mx-10 sm:5 min-h-[84vh] mb-2">
            {showAlert && (
                <div className="pop-ups">
                    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
                        <div className="bg-white max-w-md p-10 rounded-md">
                            <button onClick={()=> handleCloseAlert()} className="bg-red-500 w-8 h-8 rounded-full hover:bg-red-600 shadow-md mb-2">X</button>
                            <TaskForm handleCloseAlert={handleCloseAlert}/>
                        </div>
                    </div>
                </div>
            )}
            {showDetails && (
                <div className="pop-ups">
                    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
                        <div className="bg-white max-w-md p-10 rounded-md">
                            {!showUpdate && (
                            <button onClick={()=> handleCloseDetail()} className="bg-red-500 w-8 h-8 rounded-full hover:bg-red-600 shadow-md mb-2">X</button>
                            )}
                            <TaskDetail id={showDetails} showUpdate={showUpdate} setShowUpdate={setShowUpdate} handleCloseDetail={handleCloseDetail}/>
                        </div>
                    </div>
                </div>
            )}
            <h1 className="text-2xl m-auto mt-8 text-center sm:text-left">Calendar</h1>
            <div className="flex justify-center sm:justify-start">
                <button
                    onClick={() => handleOpenAlert()}
                    className="bg-blue-500 hover:bg-blue-600 w-32 h-10 rounded-md shadow-md mt-4 mb-4 mx-auto sm:mx-0"
                >
                Create Event
                </button>
            </div>
            <TaskCalendar setShowDetails={setShowDetails} />
        </div>
    )
}

export default Task