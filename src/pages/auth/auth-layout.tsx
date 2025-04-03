import { Outlet } from 'react-router-dom'
import image from "../../assets/images/multi-store-point.jpg";

export default function Auth() {
    return (
        <div className=' w-full px-6 lg:p-0 customWidth mx-auto'>
            <div className='lg:grid lg:grid-cols-2'>
                <div className='col-span-1'>
                    <div className='px-6 py-8 hidden lg:block'>
                        <div className='relative h-[calc(100vh-64px)]'>
                            <div className="relative z-40 w-full h-full flex flex-col justify-between">
                            </div>
                            <div className='absolute z-10 h-full top-0'>
                                <img className='h-full object-cover  rounded-2xl mt-16' src={image} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-span-1 px-0 sm:px-4 md:px-14 lg:px-20 py-8'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
