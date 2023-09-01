import Image from 'next/image'

export default function Sidebar() {
  return (
    <div className='w-1/5 rounded-lg text-white p-8' style={{background: 'linear-gradient(180deg, #4285F4 0%, #286DE0 100%)'}}>
      <h1 className='text-2xl font-semibold'>Board.</h1>
      <div className='flex gap-4'>
        <Image src='/dashboard.png' height={30} width={40} className='w-auto' alt='dashboard' />
        <span>Dashboard</span>
      </div>
    </div>
  )
}