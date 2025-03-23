import { connect } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import logo_Edufux from 'assets/img/Edufux.jpg'
import loading_dots from 'assets/img/loading-dots.gif'
import { useState } from 'react'
import { DotLoader } from 'react-spinners/DotLoader'

function Navbar(){

    const [loading,setloading]=useState(true)

    window.onscroll = function() {scrollFuntion()}

    function scrollFuntion(){
        if(document.getElementById('navbar')){
            if (document.body.scrollTop > 50 || document.documentElement.scroll > 50){
                Document.getElementById('navbar').classList.add('shadow-navbar');
                Document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }


    return (
        <nav id='navbar' className='w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed'>
            <div className=" px-4 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                <Link to='/'className="ml-4 mt-2">
                <img 
                src={logo_Edufux}
                width={200}
                height={100}
                className=""/>
                </Link>
                <div className="ml-4 mt-2 flex-shrink-0">
                <NavLink to='/Casos' className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Casos</NavLink>
                <NavLink to='/Servicios' className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Servicios</NavLink>
                <NavLink to='/Nosotros' className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Nosotros</NavLink>
                <NavLink to='/About' className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">About</NavLink> 
                <NavLink to='/Blog' className="text-lg inline-flex  font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Blog</NavLink>   
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