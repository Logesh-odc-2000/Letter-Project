import { useRouter } from 'next/router'
import React from 'react';
import Carousel from 'react-elastic-carousel'
import Object from './Object'


const data = Object.Data

export default function Id() {
    const router = useRouter()
    const { id,id1 } = router.query
    console.log(id);
    return (
        <>
            <div className="bg-gray-100  h-full h-screen">
                <div className="  mx-auto max-w-4xl   sm:py-28 sm:px-10 object-cover h-96 w-full lg:max-w-2xl lg:px-10">
                    <div className="  text-4xl px-16 font-bold tracking-tight text-gray-900">
                        <div className=' inline-block px-4'>
                            <img
                                src={`${id}.png`}
                                className="h-10 w-10 inline-block " />
                        </div>
                        Letters
                    </div>
                    <div className='py-10 rounded-lg'>
                        <Carousel>
                            {data&& data[id].map((lettter ) => (
                                <>
                                    <div className='object-cover'>
                                        {data&&data[id1].map((lettter)=>(
                                        <div className=" bg-gray-200  xl:h-96">
                                            <img key={lettter.id}
                                                src={lettter.imgSrc}
                                                className="h-full w-full object-cover "
                                            />
                                        </div>
                                        ))}
                                        <div key={lettter.id} className=" text-center font-bold  first-letter:text-blue-700 text-red-500  text-2xl">
                                            {lettter.name}
                                        </div>
                                    </div>

                                </>
                            ))}
                        </Carousel>
                    </div>

                </div>
            </div>
        </>

    )
}