import hero from '../assets/hero.png'

export default function Hero() {
  return (
    <div>
        <img src={hero} alt="hero-image" className='w-full max-h-[600px] object-cover' />
    </div>
  )
}
