"use client"
import React, { createContext, useContext, useState } from 'react'

let Context = createContext()
export const GlobalContext = ({ children }) => {
    const [id, setid] = useState(1)
    const [userName, setuserName] = useState('')
    const [blogTitleC, setblogTitleC] = useState('')
    const [blogC, setblogC] = useState('')
    const [blogIdC, setblogIdC] = useState('')
    const [blogTagLineC, setblogTagLineC] = useState()
    const [editBlogC, seteditBlogC] = useState(false)
    const [popUpMessage, setPopUpMessage] = useState('')
    const [popUpType, setPopUpType] = useState('success')
    const [displayPopUp, setDisplayPopUp] = useState(false)

    const showPopUp = (message, type = 'success') => {
        setPopUpMessage(message)
        setPopUpType(type)
        setDisplayPopUp(true)
        setTimeout(() => setDisplayPopUp(false), 3000)
    }


    return (
        <Context.Provider value={{
            id, setid,
            userName, setuserName,
            blogTitleC, setblogTitleC,
            blogC, setblogC,
            blogIdC, setblogIdC,
            blogTagLineC, setblogTagLineC,
            editBlogC, seteditBlogC,
            showPopUp,
            popUpMessage,
            popUpType,
            displayPopUp
        }}>
            {children}
        </Context.Provider>
    )
}
export const useGeneralContext = () => {
    const GeneralContext = useContext(Context)
    return GeneralContext;
};