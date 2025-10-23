import Slider from "react-slick";
import { pastWorkImg } from "../data/pastWorkData";
function MultipleItems() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className="w-[90%] mx-[auto] pt-[1rem] pb-[3rem] max-[908px]:w-[95%] ">
            <h1 className='font-bold text-[1.8rem] text-center mb-[4rem]'>Organizations we've worked with</h1>
            <div className=" max-[808px]:w-[89.5%] mx-[auto]">
                <Slider {...settings}>
                    {
                        pastWorkImg.map(item => {
                            return <div key={item.id} className="h-[13rem] max-[908px]:h-[fit-content] max-[850px]:px-[0.5rem]">
                                <img className='rounded-[1rem] h-[100%] w-[16rem] max-[681px]:w-[100%]' src={item.src} alt="img" />
                            </div>
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default MultipleItems;
