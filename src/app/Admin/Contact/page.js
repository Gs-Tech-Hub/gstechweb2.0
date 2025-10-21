"use client"
import ProjectOnboardingCard from "../../../components/ProjectOnboardingCard";
import ContactCard from "../../../components/ContactCard";
import Loader from '../../../components/Loader';
import { useGeneralContext } from '../../../context/GlobalContext'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { ContactApi } from '../../../lib/utils/api'

const Contact = () => {
    const router = useRouter()
    const userData = useGeneralContext()
    const { userName } = userData
    const [contacts, setcontacts] = useState([])
    const [ContactLoader, setContactLoader] = useState(true)
    const [error, seterror] = useState({
        status: false,
        message: ""
    })
    const [isAuthenticated, setisAuthenticated] = useState(false)
    useEffect(() => {
        // if (userName === '') {
        //     router.push('/Admin')
        // } else {
        //     setisAuthenticated(true)
        // }
        setisAuthenticated(true)
        fetchContacts()

    }, [router, userName])

    const fetchContacts = async () => {
        try {
            const data = await ContactApi.getAll()
            console.log(data)
            if (data.status) {
                setcontacts(data.message)
            }
            else {
                seterror({ status: true, message: data.message })
            }
        } catch (error) {
            seterror({ status: true, message: error.message || 'unable to get contacts, an error occured' })
        } finally {
            setContactLoader(false)
        }
    }

    if (ContactLoader) return <Loader />
    if (error.status) return <h2 className='font-bold text-[1.8rem] mt-[5rem] text-center mb-[11rem]'>{error.message}</h2>


    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <h1 className='font-bold text-[1.8rem] mt-[1rem] text-center mb-[1rem]'> All Contacts</h1>
                    <ContactCard allContacts={contacts} />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    )
}

export default Contact