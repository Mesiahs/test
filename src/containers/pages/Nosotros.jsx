import Footer from "components/navigation/footer"
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"

function Nosotros(){
    return (
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Nosotros
            </div>    
                <Footer/>                
        </Layout>
    )
}
export default Nosotros