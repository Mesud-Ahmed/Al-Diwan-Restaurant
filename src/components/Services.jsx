import BiryaniImg1 from "../assets/biryani3.png";
import BiryaniImg2 from "../assets/biryani5.png";
import BiryaniImg3 from "../assets/biryani2.png";


const ServicesData = [
    {
        id: 1,
        img: BiryaniImg1,
        name: "Biryani",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
        id: 2,
        img: BiryaniImg2,
        name: "Chiken kari",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
        id: 3,
        img: BiryaniImg3,
        name: "Cold Cofee",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
];
export default function Services() {

    return (
        <>

            <div className="py-10 dark:bg-gray-900">
                <div className="container">
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Services</p>
                        <h1 className="text-3xl font-bold dark:text-white">Services</h1>
                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Perspiciatis delectus architecto error nesciunt,
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                        {ServicesData.map((service) => (
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="300"
                                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                            >
                                <div className="h-[100px]">
                                    <img
                                        src={service.img}
                                        alt=""
                                        className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                                    />
                                </div>
                                <div className="p-4 text-center">

                                    <h1 className="text-xl font-bold dark:text-white">{service.name}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </>


    )
}