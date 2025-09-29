"use client"
import React, { createContext, useContext, useState } from 'react'

let Context = createContext()
export const GlobalContext = ({ children }) => {
    const [id, setid] = useState(1)
    const [userName, setuserName] = useState('')
    const [blogTitleC, setblogTitleC] = useState('')
    const [blogC, setblogC] = useState('')
    const [blogTagLineC, setblogTagLineC] = useState()
    const [editBlogC, seteditBlogC] = useState(false)


    return (
        <Context.Provider value={{ id, setid, userName, setuserName, blogTitleC, setblogTitleC, blogC, setblogC, blogTagLineC, setblogTagLineC, editBlogC, seteditBlogC }}>
            {children}
        </Context.Provider>
    )
}
export const useGeneralContext = () => {
    const GeneralContext = useContext(Context)
    return GeneralContext;
};