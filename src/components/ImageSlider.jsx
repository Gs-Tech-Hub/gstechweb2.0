import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImageSlider = ({ sliderImg }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div >
            <Slider {...settings}>
                {
                    sliderImg.map(item => {
                        return <div className="h-[35rem] max-[740px]:h-[30rem] max-[543px]:h-[26rem] max-[466px]:h-[23rem] max-[426px]:h-[21rem] max-[377px]:h-[19rem]  max-[327px]:h-[16.5rem]" key={item.id}>
                            <img className='rounded-[1rem] h-[100%] w-[100%]' src={item.src} alt="img" />
                        </div>
                    })
                }
            </Slider>
        </div>
    );
}

export default ImageSlider