
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,

} from "react-icons/fa";
import footerLogo from '../assets/logo.png'

export default function Footer() {
    return (
        <div className="bg-gray-100 dark:bg-gray-950 dark:text-white">

            <div className=" py-8 px-4 flex flex-col items-center justify-center ">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                    <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
                    Al Diwan 
                </h1>
                <h2>📞 We're Here for You! 📞</h2>
                <p className="line-clamp-2">

                    Have a question or special request? {" "}
                </p>
                <p>We'd love to hear from you!
                Reach out to us anytime — we're just a call or message away!</p>
                <br />
                <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Addis Ababa, Ethiopia</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt />
                    <p>+91 123456789</p>
                </div>
                {/* Social Handle */}
                <div className="flex items-center gap-3 mt-6">
                    <a href="#">
                        <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#">
                        <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#">
                        <FaLinkedin className="text-3xl" />
                    </a>
                </div>
            </div>


            <div>
                <div className="text-center py-10 border-t-2 border-gray-300/50">
                    @copyright 2024 All rights reserved || Made by Mesud
                </div>
            </div>

        </div>
    );
};

