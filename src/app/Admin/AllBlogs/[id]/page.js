"use client"
import { useState } from 'react'
import { use } from 'react';
import { useRouter } from "next/navigation"
import { BiSolidEditAlt } from 'react-icons/bi';
import { ModalComponent, PopUpMessage } from '@/AllFiles';
import { displayPopUpMessage, cancelPopUP } from '@/helper function/pop up';
import { useGeneralContext } from '@/context/GlobalContext'



const page = ({ params }) => {
    const router = useRouter()
    const { id } = use(params);
    console.log(id)
    const userData = useGeneralContext()
    const { setblogTitleC, setblogC, setblogTagLineC, seteditBlogC } = userData
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('campaign successfully deleted')
    const [popUpType, setpopUpType] = useState('error')

    const [blogTitle, setblogTitle] = useState('An AI aided alternative to figma')
    const [blog, setblog] = useState('long long text lorem45 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, repudiandae. Natus perspiciatis odit repellat beatae qui accusantium. Voluptatum quidem, saepe ducimus quasi error, esse magni magnam, suscipit deleniti omnis architecto. Atque repellendus suscipit delectus provident ipsum nobis similique soluta assumenda corrupti placeat, cum reprehenderit adipisci consequatur rerum at possimus explicabo dignissimos molestiae illum dicta eum consectetur. Ad, aliquam impedit. Repellendus unde alias et eveniet iure, in quisquam ex id quam consequuntur, rem provident porro quaerat ipsa ullam eum nisi laboriosam? Quae ducimus omnis iste eveniet sapiente. Laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat recusandae laboriosam ratione repudiandae odio. Repellendus, nostrum tempore? Iure nam sunt officiis nesciunt sequi ad? Aliquid omnis suscipit quas dicta rerum, placeat assumenda ducimus in fugit eius commodi cumque iste, id quos. Modi neque vero minima a quisquam illum quod tempore quas sapiente dolore, natus omnis exercitationem aliquid architecto tempora quasi. Architecto libero aperiam neque quos doloribus commodi officiis deleniti porro possimus? Inventore temporibus ut nostrum doloremque? Voluptate doloremque, veniam laudantium totam, minus nemo necessitatibus tenetur provident neque modi ab fugit illum debitis nulla vel distinctio corrupti itaque quasi architecto, maxime fugiat eius amet voluptatum? Consequuntur illo repellat, neque ea hic ratione rem delectus deserunt magni harum ullam vitae doloribus voluptatibus ex quia! Quas dolore, tenetur doloremque libero incidunt rerum magni suscipit soluta maxime obcaecati qui doloribus quos voluptate labore? Totam nesciunt repellat, consequatur nam hic eligendi dolorum. Illo eveniet harum repellat cumque reprehenderit facilis non quas consequuntur nihil veritatis adipisci quo illum esse consequatur provident similique, in quaerat cum architecto deserunt pariatur ea fugit sequi? Impedit dolor maiores odit pariatur repudiandae officiis minima tenetur voluptatem corrupti accusamus. Vitae sit voluptatem tempora, labore explicabo officiis voluptas est sapiente vero ipsum deleniti sed mollitia aperiam architecto porro eligendi repellendus obcaecati saepe nam fugit? Eaque dicta reprehenderit distinctio quis corporis assumenda veniam. Illo officia ut eius odit, libero animi. Obcaecati ea assumenda, ab id magnam quis neque, sunt eaque reprehenderit eveniet eum? Velit possimus molestias blanditiis magni quidem culpa consequatur, atque asperiores saepe, ipsam perspiciatis. Dolore porro at accusantium dolores ex alias quod impedit, obcaecati commodi molestiae dicta repudiandae reiciendis eum fugit quas incidunt quo odio accusamus voluptatem possimus rerum odit veniam, est quasi! Qui aspernatur quasi voluptates illum voluptatum cumque dolorum culpa odio, placeat consequatur, enim natus inventore minima unde dicta. Ex eum tenetur necessitatibus at ut mollitia voluptatum minima excepturi iste obcaecati cum corporis doloremque quia, maiores id quod illo nemo enim assumenda ipsam iure? Aut, ex voluptate fugiat ullam deserunt eum veniam commodi obcaecati.')
    const [blogTagLine, setblogTagLine] = useState('#tech #lifestyle #customer relations #AI')

    const deleteBlog = () => {
        displayPopUpMessage('blog successfully deleted', setpopUpMsg, setpopUpType, setdisplayPopUp, true)
        cancelPopUP(setdisplayPopUp, 1000)
    }

    const editBlog = () => {
        setblogC(blog)
        setblogTagLineC(blogTagLine)
        setblogTitleC(blogTitle)
        seteditBlogC(true)
        router.push('/Admin/CreateBlog')


    }

    return (
        <div className='w-[95%] m-[auto] pt-[0.7rem] pb-[3rem]'>
            <div className="mt-[1.6rem] mb-[1rem] w-[100%] m-[auto] pb-[1rem]  max-[740px]:h-[30rem] max-[543px]:h-[26rem] max-[466px]:h-[23rem] max-[426px]:h-[21rem] max-[377px]:h-[19rem]  max-[327px]:h-[16.5rem]">
                <img src="/images/marek-piwnicki-zIiKZtB_v-Y-unsplash.jpg" alt="blog image" />
            </div>
            <div className='flex items-start justify-between mb-[1.3rem] max-[427px]:block'>
                <h2 className='font-bold text-[1.4rem] max-[427px]:mb-[1rem]'>{blogTitle}</h2>
                <div className='flex items-center'>
                    <ModalComponent admin={true} deleteBlog={deleteBlog} />
                    <BiSolidEditAlt onClick={editBlog} className='ml-[2rem] cursor-pointer' size={28} />
                </div>
            </div>
            <div className='mb-[1.77rem]'>
                <p className='text-[1.2rem] leading-[2.2rem]'>{blog}</p>
            </div>
            <div>
                <i className='text-[1.2rem] font-mono'>{blogTagLine}</i>
            </div>
            <PopUpMessage popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />
        </div>
    )
}

export default page