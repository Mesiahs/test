import { connect } from "react-redux"
import { Link } from "react-router-dom"
import logo_lukxtec from 'assets/img/lukxtec.jpg'
import loading_dots from 'assets/img/loading-dots.gif'

function Navbar(){
    return (
        <nav className='w-full py-6 top-0 fixed'>
            <div className="bg-white px-4 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                <div className="ml-4 mt-2">
                <img 
                src={logo_lukxtec}
                width={80}
                height={70}
                className=""/>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                <Link to='/Casos' className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Casos</Link>
                <Link to='/Servicios' className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Servicios</Link>
                <Link to='/Nosotros' className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Nosotros</Link>
                <Link to='/About' className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">About</Link> 
                <Link to='/Blog' className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Blog</Link>   
                <button
                    type="button"
                    className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-2 text-lg font-bold text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                    Iniciar test
                    <img src= {loading_dots} className='w-12 h-4 mt-1 ml-2'/>
                </button>
                </div>
            </div>
            </div>
        </nav>
    )
}

const mapStateToProps=state=>({

})

export default connect(mapStateToProps, {

}) (Navbar)