import Vector from '../assets/vectors.png'
import { motion } from "framer-motion";
import BiryaniImg1 from "../assets/biryani3.png";
import BiryaniImg2 from "../assets/biryani5.png";
import BiryaniImg3 from "../assets/biryani2.png";
import { useState } from 'react';

const ImageList = [
    {
        id: 1,
        img: BiryaniImg1,
    },
    {
        id: 2,
        img: BiryaniImg2,
    },
    {
        id: 3,
        img: BiryaniImg3,
    },
];

export default function Hero() {
    const [imageId, setImageId] = useState(BiryaniImg1);

    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    };

    return (
        <>
            <div
                className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
                style={bgImage}>
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* text content section */}
                        <div

                            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                Welcome to {" "}
                                <span class="whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                                    Al Diwan
                                </span>{" "}
                                restaurant
                            </h1>
                            <p className="text-md font-serif italic tracking-wide text-gray-700 dark:text-gray-300 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                Where we bring you handcrafted dishes made with the finest ingredients and an unforgettable dining experience!!
                            </p>
                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* Image section */}
                        <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
                            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                                <motion.img

                                    src={imageId}
                                    alt="biryani img"
                                    className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto "
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 40,
                                        repeat: Infinity,
                                        ease: 'linear'
                                    }}
                                />
                            </div>
                            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                                {ImageList.map((item) => (
                                    <img
                                        key={item.id}


                                        src={item.img}
                                        onClick={() => {
                                            setImageId(
                                                item.id === 1
                                                    ? BiryaniImg1
                                                    : item.id === 2
                                                        ? BiryaniImg2
                                                        : BiryaniImg3
                                            );
                                        }}
                                        alt="biryani img"
                                        className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
