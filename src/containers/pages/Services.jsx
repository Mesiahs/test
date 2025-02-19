import Footer from "components/navigation/footer"
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"

function Services(){
    return (
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Services
            </div>    
                <Footer/>                
        </Layout>
    )
}
export default Services 