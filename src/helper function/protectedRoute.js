import { useRouter } from "next/navigation"
import { useGeneralContext } from '@/context/GlobalContext'



export const verifyAccess = (router) => {
    // const router = useRouter()
    const userData = useGeneralContext()
    const { userName } = userData
    if (userName === '') router.push('/Admin')
    console.log(userName)
}