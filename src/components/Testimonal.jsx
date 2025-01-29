import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react"

const testimonialData = [
    {
        id: 1,
        name: "Samuel",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 1,
        name: "Smith",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
];

export default function Testimonial() {
    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };
    return (
        <>
            <div data-aos="fade-up" data-aos-duration="300" className="py-5 dark:bg-gray-600 bg-[url('https://lh3.googleusercontent.com/p/AF1QipMi_qOGhsgKshF4853zjVGgU9jZ3i_8qDz508b-=s680-w680-h510')] bg-cover bg-center bg-no-repeat">
                <div className="container">
                    <div className="text-center mb-20 max-w-[400px] mx-auto lg:mx-0 lg:text-left">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        🌟 What Our Happy Customers Say! 🌟
                        </p>
                        <h1 className="text-3xl font-bold dark:text-white">Testimonial</h1>
                        <p className="text-xs text-gray-400 dark:text-yellow-50">
                        
                        Nothing makes us prouder than the smiles on our customers' faces.
                         see what our customers have to say about their delicious experiences!
                        </p>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
                    >
                        <Slider {...settings}>
                            {testimonialData.map((data) => {
                                return (
                                    <div
                                    >
                                            
                                        <div
                                            key={data.id}
                                            className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 dark:bg-opacity-70 bg-primary/10 relative "
                                        >
                                            <img
                                                className="rounded-full block mx-auto"
                                                src={data.img}
                                                alt=""
                                            />
                                            <p className="text-yellow-50">{data.text}</p>
                                            <h1 className="text-xl font-bold text-white">{data.name}</h1>
                                            <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                                ,,
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

