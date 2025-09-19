import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth?.status ?? false)

    useEffect(() => {
        //let authValue = authStatus === true ? true : false

        if(authentication && !authStatus){
            navigate('/login')
        } else if(!authentication && authStatus) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate,authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}

