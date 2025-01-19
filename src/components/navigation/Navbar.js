import { connect } from "react-redux"
import { Link } from "react-router-dom"
import logo_lukxtec from 'assets/img/lukxtec.jpg'

function Navbar(){
    return (
        <nav className='w-full py-10 shadow-md fixed'>
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
                <Link to='/casos' className="text-lg inline-flex  font-medium leading-6 text-gray-900 mx-4">Casos</Link>
                <Link to='/Servicios' className="text-lg inline-flex  font-medium leading-6 text-gray-900 mx-4">Servicios</Link>
                <Link to='/Nosotros' className="text-lg inline-flex  font-medium leading-6 text-gray-900 mx-4">Nosotros</Link>    
Link         <button
                    type="button"
                    className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Create new job
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