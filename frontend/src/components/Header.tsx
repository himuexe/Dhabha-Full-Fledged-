import {Link} from 'react-router-dom'
import MobileNav from './MobileNav'
import MainNav from './MainNav'

export default function Header() {
  return (
    <div className="border-b-2 border-orange-500 py-6">
        <div className="container mx-auto justify-between flex items-center">
            <Link to="/" className="text-3xl font-bold tracking-tight text-orange-500">Dhabha.com</Link>
            <div className="md:hidden"><MobileNav></MobileNav></div>
            <div className='hidden md:block'><MainNav></MainNav></div>
        </div>
    </div>
  )
}
