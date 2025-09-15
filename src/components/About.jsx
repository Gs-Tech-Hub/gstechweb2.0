import Image from 'next/image'
import AboutImage from '../../public/images/pexels-pixabay-416405.jpg'

const About = () => {
    return (
        <div className='secondaryBgColor pt-[8.6rem] py-[1.5rem] pb-[7rem] px-[1rem] max-[431px]:pt-[6rem]'>
            <div >
                <h1 className='font-bold text-[1.8rem] text-center mb-[3rem] max-[431px]:mb-[1rem]'>About us</h1>
                <div className='flex items-center justify-center max-[1092px]:block max-[1092px]:text-center'>
                    <div className='w-[40%] mx-[auto] h-[fit-content] max-[1260px]:w-[48%] max-[1092px]:hidden'><Image src={AboutImage} alt="about-image" /></div>
                    <div className='w-[50%] max-[1260px]:ml-[2%] max-[1092px]:w-[100%] max-[1092px]:ml-[0%] max-[1092px]:mx-[auto]'>
                        <p className='w-[65%] mb-[1rem] leading-[2.2rem] text-[1.2rem] max-[1414px]:w-[80%] max-[1202px]:w-[95%] max-[1092px]:w-[100%] max-[431px]:text-[1.07rem] max-[431px]:leading-[1.9rem]'>GS Tech Hub is a digital agency that specializes in helping businesses like yours scale faster, streamline operations through automation, and attract more customers with cutting-edge technology solutions. Our team is dedicated to understanding your unique challenges and providing tailored strategies that drive growth, enhance customer engagement and much more. GS Tech Hub is your trusted partner for success in the ever-evolving digital landscape. </p>
                        <i className='text-[1.2rem] font-medium'>We Build Smarter Systems for Nigerian Businesses</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About