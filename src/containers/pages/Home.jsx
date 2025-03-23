import Footer from "components/navigation/footer"
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Header from "components/home/Header"
import Incentivos from "components/home/Incentives"
import UseCases from "components/home/UseCases"
import Features from "components/home/Features"
import CTA from "components/home/CTA"
import LogoCloud from "components/home/LogoCloud"
import BlogList from "components/home/BlogList"

function Home(){
    return (
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Incentivos/>
                <UseCases/>
                <Features/>
                <CTA/>
                <LogoCloud/>
                <BlogList/>
            </div>    
                <Footer/>                
        </Layout>
    )
}
export default Home 