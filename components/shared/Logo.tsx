import Image from 'next/image'


const Logo = () => {
  return (
    <div className='flex items-center gap-2 ' >
        <Image src={'/images/logo-bookmark.svg'} alt ="logo"  width = {150} height={100} className='object-contain ' />
    </div>
  )
}

export default Logo