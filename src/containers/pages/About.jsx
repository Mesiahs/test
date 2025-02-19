import Footer from "components/navigation/footer"
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"

function About(){
    return (
        <Layout>
            <Navbar/>
            <div className="pt-28">
                About
            </div>    
                <Footer/>                
        </Layout>
    )
}
export default About