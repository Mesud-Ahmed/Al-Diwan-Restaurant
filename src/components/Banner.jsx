
import BiryaniImg from "../assets/biryani6.png";
import { motion } from "framer-motion";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

export default function Banner() {

    return (
        <>
            <div className="min-h-[550px] dark:bg-gray-900 ">

                <motion.div
                    initial={{ opacity: 0, y: 100 }} // Starts invisible and moved down
                    whileInView={{ opacity: 1, y: 0 }} // Becomes visible and slides up
                    transition={{ duration: 0.5, ease: "easeOut" }} // Quick smooth animation
                    viewport={{ once: true, amount: 0.2 }}
                    className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Image section */}
                        <div>
                            <img
                                src={BiryaniImg}
                                alt="biryani img"
                                className="max-w-[430px] max-h-[400px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                            />
                        </div>
                        {/* text content section */}
                        <div className="flex flex-col justify-center gap-6 sm:pt-0">
                            <h1 className="text-3xl sm:text-4xl font-bold dark:text-white font-serif">
                                🥘 Craving Something Delicious? Order Now! 🥘
                            </h1>

                            <p className="text-md text-yellow-700 tracking-wide leading-5 font-sans">
                                Skip the wait and enjoy your favorite dishes from Al Diwan at your convenience!<br/> <br/>We've got you covered with fast, fresh, and flavorful meals!!
                            </p>

                            <div className="flex gap-6 dark:text-white">
                                <div>
                                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400 " />
                                </div>
                                <div>
                                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                                </div>
                                <div>
                                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                                </div>
                            </div>
                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </>
    );
};
