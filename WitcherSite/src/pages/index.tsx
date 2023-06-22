import Image from 'next/image'
import data from '../data.json'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <div className='flex items-center'>
          <Image
          className='rounded-full'
          alt={data.name}
          src={data.avatar}
          width={120}
          height={120}
          />
        </div>
    )
}
