import { useParams } from 'react-router-dom'
import { ImageSlider } from '../AllFiles'
import { FaGlobeAmericas } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt } from 'react-icons/fa';

const PortfolioDetail = () => {


    const data = useParams()
    const { id } = data
    console.log(id)
    let sliderImg = [
        {
            id: 1,
            src: '/images/pexels-pixabay-416405.jpg ',
        },
        {
            id: 2,
            src: '/images/marek-piwnicki-zIiKZtB_v-Y-unsplash.jpg',
        },
        {
            id: 3,
            src: '/images/pexels-aleksandar-pasaric-2041556.jpg',
        },
    ]

    return (
        <div>
            <div className='w-[95%] m-[auto] pt-[2rem]'>
                <div className="h-[fit-content] mt-[1.6rem] mb-[1rem] w-[100%] m-[auto] pb-[1rem]">
                    <ImageSlider sliderImg={sliderImg} />
                </div>
                <div className='flex items-start justify-between mb-[1.3rem] max-[427px]:block'>
                    <h2 className='font-bold text-[1.4rem] max-[427px]:mb-[1rem]'>An AI aided alternative to figma</h2>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Client Info</h3>
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            <FaGlobeAmericas className='mr-[0.24rem]' size={22} />
                            <a href='https://f-mmm1hotel.nl'>https://f-mmm1hotel.nl</a >
                        </div>
                        <div className='w-[1px] mx-[1.5rem] h-[1.1rem] border-[1px] border-[#3a3535]'></div>

                        <div className='flex items-center'>
                            <MdEmail className='mr-[0.24rem]' size={22} />
                            <p>fmmm1hotels@gmail.com</p>
                        </div>
                        <div className='w-[1px] mx-[1.5rem] h-[1.1rem] border-[1px] border-[#3a3535]'></div>
                        <div className='flex items-center'>
                            <FaPhoneSquareAlt className='mr-[0.24rem]' size={21} />
                            <p>+234 810 527 2050</p>
                        </div>

                    </div>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Project detail</h3>
                    <p>long long text lorem45 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex eum tenetur necessitatibus at ut mollitia voluptatum minima excepturi iste obcaecati cum corporis doloremque quia, maiores id quod illo nemo enim assumenda ipsam iure? Aut, ex voluptate fugiat ullam deserunt eum veniam commodi obcaecati.</p>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Project Status</h3>
                    <p>Active</p>
                </div>
                <div className='mb-[1rem]'>
                    <h3 className='mb-[0.5rem] font-bold ' >Location</h3>
                    <p>Agbor, Delta State, Nigeria</p>
                </div>


            </div>
        </div>
    )
}

export default PortfolioDetail