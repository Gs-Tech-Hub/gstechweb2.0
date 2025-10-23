"use client"
import React, { createContext, useContext, useState } from 'react'

let Context = createContext()
export const GlobalContext = ({ children }) => {
    const [id, setid] = useState()
    const [userName, setuserName] = useState('')
    const [blogDataHandler, setblogDataHandler] = useState({
        blogTitle: '',
        blog: '',
        blogId: '',
        blogTagLine: '',
        blogStatus: false
    })
    const [editBlog, seteditBlog] = useState(false)


    return (
        <Context.Provider value={{
            id, setid,
            userName, setuserName,
            editBlog, seteditBlog,
            blogDataHandler, setblogDataHandler
        }}>
            {children}
        </Context.Provider>
    )
}
export const useGeneralContext = () => {
    const GeneralContext = useContext(Context)
    return GeneralContext;
};