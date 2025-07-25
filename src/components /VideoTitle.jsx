import React from 'react'
import { RxInfoCircled, RxPlay } from 'react-icons/rx'

const VideoTitle = ({title,overview}) => {

  return (
    <div className='absolute top-2/3 left-1/12 transform  -translate-y-1/2 text-white text-justify-start space-y-4'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='w-1/3 text-xl'>{overview}</p>
      <div className='flex gap-4'>
        <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 hover:scale-110">
            <RxPlay className="inline-block mr-2 text-2xl  " />
            <span className="text-lg">Watch Now</span>
        </button>
        <button className="flex items-center bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 hover:scale-110">
            <RxInfoCircled className="inline-block mr-2 text-2xl  " />
            <span className="text-lg">more info</span>
        </button>
      </div>    
    </div>
  )
}

export default VideoTitle