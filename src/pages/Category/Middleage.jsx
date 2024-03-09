import {Link} from "react-router-dom"
import Layout from "../../layout/Layout"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import SearchBar from "../../components/SearchBar/SearchBar"
const Middleage = () => {
  return (
    <>
       <Header/>
    <Layout>
       <SearchBar/>
     
            <h1 className="text-white mt-10">Middle Age</h1>
        <div className="mt-20 flex gap-4">
            
            <Link to="/chat">
                <button className="bg-indigo-700 text-white  text-xl px-3 py-2 rounded-2xl hover:bg-purple-950">AI-Chat</button>
            </Link>
            <button className="bg-indigo-700 text-white  text-xl px-3 py-2 rounded-2xl hover:bg-purple-950">Naming</button>
            <button className="bg-indigo-700 text-white  text-xl px-3 py-2 rounded-2xl hover:bg-purple-950">Astrology</button>
        
        </div>
    </Layout>
    <Footer/>
    </>
  )
}

export default Middleage