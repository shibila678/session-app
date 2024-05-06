import React from 'react'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    let userId = sessionStorage.getItem("UserId");
    let userName = sessionStorage.getItem("UserName");
    let navigate = useNavigate();
    const onClickLogout = () => {
        sessionStorage.clear()
        navigate("/")
    }
    const onCheck = () => {
        if (userId === null || userId === 'undefined' || userId === '') {
            navigate('/')
        }
    }
    useEffect(() => {
        onCheck()
    },[]
    )
    return (

        <div>
            Welcome  {userName} ,{userId}
            <button className="btn btn-danger" onClick={onClickLogout}>
                Logout
            </button>


        </div>
    )
}

export default Dashboard