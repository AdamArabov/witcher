import Image from 'next/image'
import data from '../data.json'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function LinkCard ({
  title,
  url
}: {
url:string;
title:string
}){
  return(
    <a href= {url}
    className='flex items-center p-4 rounded-md hover:scale-105 transition-all w-full border border-white-100 mb-3'
    >
    <div className='flex flex-col w-full text-center'>
    <h2 className='font-semibold text-lg '>{title}</h2>
    </div>
    </a>
  )
}

export default function Home() {
  return (
        <div className='flex items-center flex-col mx-auto w-full justify-center mt-16 px-8'>
          <Image
          className='rounded-full'
          alt={data.name}
          src={data.avatar}
          width={96}
          height={96}
          />
          <h1 className='mt-4 mb-8 font-bold text-xl '>{data.name}</h1>
          {data.links.map((link)=> (
            <LinkCard key={link.url} {...link} />
          ))}
        </div>
    )
}


