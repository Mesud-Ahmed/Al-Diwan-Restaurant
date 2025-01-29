import BiryaniImg1 from "../assets/menu1.png";
import BiryaniImg2 from "../assets/menu2.png";
import BiryaniImg3 from "../assets/menu3.png";
import BiryaniImg4 from "../assets/menu4.png";
import { motion } from "motion/react"

const ServicesData = [
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
    {
        id: 4,
        img: BiryaniImg4,
    },
];
export default function Services() {

    return (
        <>

            <div className="py-10 dark:bg-gray-900">
                <div className="container">
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-3xl font-bold bg-clip-text p-3 text-transparent bg-gradient-to-r from-primary to-secondary">Our Services</p>

                        <p className="text-sm font-light italic text-gray-400 tracking-wide drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            At Al Diwan, we go beyond just serving food—we create memorable experiences.
                            Indulge in our authentic, chef-crafted dishes, enjoy the convenience of fast and fresh takeaway.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center mb-9" >

                        {ServicesData.map((service) => (

                            <div className="">
                                <img
                                    src={service.img}
                                    alt=""
                                    className="w-full rounded-xl hover:scale-110 hover:shadow-xl transition-transform duration-300"
                                />
                            </div>


                        ))}
                    </div>

                </div>
            </div>
        </>


    )
}