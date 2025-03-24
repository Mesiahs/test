import Footer from "components/navigation/footer"
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Header from "components/cases/Header"

function Cases(){
    return (
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
            </div>    
                <Footer/>                
        </Layout>
    )
}
export default Cases