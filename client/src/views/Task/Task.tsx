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
        <div className="flex flex-col mx-1 md:mx-10 sm:5">
            {showAlert && (
                <div className="pop-ups">
                    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
                        <div className="bg-white max-w-md p-10 rounded-md">
                            <button onClick={()=> handleCloseAlert()} className="bg-red-500 w-6 h-6 rounded-md hover:bg-red-600 shadow-md">X</button>
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
                            <button onClick={()=> handleCloseDetail()} className="bg-red-500 w-6 h-6 rounded-md hover:bg-red-600 shadow-md">X</button>
                            )}
                            <TaskDetail id={showDetails} showUpdate={showUpdate} setShowUpdate={setShowUpdate} handleCloseDetail={handleCloseDetail}/>
                        </div>
                    </div>
                </div>
            )}
            <h1 className="text-2xl m-auto mt-8">Calendar</h1>
            <button onClick={()=> handleOpenAlert()} className='bg-blue-500 hover:bg-blue-600 w-24 h-7 rounded-md shadow-md mt-3 mb-6'>create Task</button>
            <TaskCalendar setShowDetails={setShowDetails} />
        </div>
    )
}

export default Task