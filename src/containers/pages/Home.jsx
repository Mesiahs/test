import Footer from "components/navigation/footer"
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Header from "components/home/Header"
import Incentivos from "components/home/Incentives"
import UseCases from "components/home/UseCases"

function Home(){
    return (
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Incentivos/>
                <UseCases/>
            </div>    
                <Footer/>                
        </Layout>
    )
}
export default Home 