import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidQuoteRight } from 'react-icons/bi';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';

function Testimonial() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <FaArrowRightLong className='primaryColorText text-[2rem] max-[512px]:text-[1.6rem]' />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <FaArrowLeftLong className='primaryColorText text-[2rem] max-[512px]:text-[1.6rem]' />
            </div>

        );
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className=" py-[1rem] pb-[3rem] px-[1rem] ">
            <h1 className='font-bold text-[1.8rem] text-center mb-[3rem] max-[1173px]:mb-[1.5rem]'>Testimonials </h1>
            <div className="w-[80%] mx-[auto] max-[1273px]:w-[93%] max-[1273px]:mx-[auto]">
                <Slider {...settings}>
                    <div className="px-[1rem] text-center">
                        <BiSolidQuoteRight size={44} className="mx-[auto] mb-[2rem] primaryColorText" />
                        <i className="font-medium text-[1.7rem] max-[860px]:text-[1.5rem] max-[600px]:text-[1.26rem] max-[490px]:text-[1.13rem]">This team truly understands the needs of businesses like ours. Their marketing strategies brought more visibility to our hotel, and the management software they provided simplified everything from reservations to customer feedback. Their expertise and attention to detail have made a significant impact on our revenue and overall guest satisfaction. It’s been a pleasure working with them!</i>
                        <div className="mt-[1rem] ">
                            <h3 className="font-bold text-[1.3rem] ">Mr. Festus Agidi</h3>
                            <p className="text-[#666464]">CEO at F-MMM1 HOTEL & SUITES</p>
                        </div>
                    </div>
                    <div className="px-[1rem] text-center">
                        <BiSolidQuoteRight size={44} className="mx-[auto] mb-[2rem] primaryColorText" />
                        <i className="font-medium text-[1.7rem] max-[860px]:text-[1.5rem] max-[600px]:text-[1.26rem] max-[490px]:text-[1.13rem]">From day one, this company has delivered exceptional service. Their marketing campaigns were tailored to our brand and brought in a wave of new customers. The management software is intuitive and has helped us save countless hours on administrative tasks. Their support team is always available, ensuring we get the most out of their solutions. I’m incredibly impressed and grateful for the growth we’ve achieved with their help.</i>
                        <div className="mt-[1rem]">
                            <h3 className="font-bold text-[1.3rem] ">Dr. John Edokpolo</h3>
                            <p className="text-[#666464]">CEO at Canada World Hotel & Event Center</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Testimonial;
