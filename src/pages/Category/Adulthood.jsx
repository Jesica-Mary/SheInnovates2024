import {Link} from "react-router-dom"
import Layout from "../../layout/Layout"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import SearchBar from "../../components/SearchBar/SearchBar"
const Adulthood = () => {
  return (
    <>
        <Header/>
    <Layout>
       <SearchBar/> 
        <div>
            <h1 className="text-white m-10" >Adulthood</h1>
            <Link to="/chat " className="flex justify-center">
                <button className="bg-indigo-700 text-white  text-xl px-3 py-2 rounded-2xl hover:bg-purple-950">AI-Chat</button>
            </Link>
        </div>
    </Layout>
    <Footer/>
    </>
  )
}

export default Adulthood