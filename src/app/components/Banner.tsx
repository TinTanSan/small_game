
import React, { SetStateAction } from 'react'

export type BannerDetails= {
    text:string;
    isGood:boolean;
}


export default function Banner({bannerDetails, duration, setShow}: {bannerDetails:BannerDetails, duration?:number, setShow:React.Dispatch<SetStateAction<boolean>>}) {
    duration = duration ? duration : 3000;
    setTimeout(() => {
        setShow(false);
    }, duration);
    return (
        <div className='flex justify-center items-center absolute w-[95%] h-[95%] overflow-screen z-50' onClick={()=>{setShow(false)}}>
        <div className={`flex p-2 rounded-md animate-pulse items-center justify-center w-fit text-xl ${bannerDetails.isGood ? " bg-green-600 text-green-100":" bg-red-600 text-red-100"} `}>{bannerDetails.text}</div>
        </div>
    )
}