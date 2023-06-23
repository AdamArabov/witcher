import Image from 'next/image'
import data from '../data.json'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <div className='flex items-center flex-col mx-auto w-full justify-center mt-16'>
          <Image
          className='rounded-full'
          alt={data.name}
          src={data.avatar}
          width={96}
          height={96}
          />
          <h1 className='mt-4 font-bold text-xl'>{data.name}</h1>
        </div>
    )
}
