import Footer from "components/navigation/footer"
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"

function Cases(){
    return (
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Cases
            </div>    
                <Footer/>                
        </Layout>
    )
}
export default Cases