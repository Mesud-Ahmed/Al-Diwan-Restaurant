import  logo  from '../assets/logo.png'
export default function Navbar() {
    return (
        <>
            <div className="shadow-md  bg-white dark:bg-gray-900 dark:text-white duration-200">
                <div className=" container">
                    <div className='flex justify-between items-center'>
                        <div>
                            <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
                                <img src={logo} alt="logo" className='w-10'/>
                                Al-Diwan
                            </a>
                        </div>
                        <div>
                            <ul className='flex gap-4'>
                                <li >
                                    <a href="#" className='inline-block py-4 px-4 hover:text-primary'>Home</a>
                                </li>
                                <li>
                                    <a href="#" className='inline-block py-4 px-4 hover:text-primary'>About</a>
                                </li>
                                <li>
                                    <a href="#" className='inline-block py-4 px-4 hover:text-primary'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}