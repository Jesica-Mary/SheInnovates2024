import {Link} from "react-router-dom"
import Layout from "../../layout/Layout"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import SearchBar from "../../components/SearchBar/SearchBar"
const Senioryears = () => {
  return (
    <>
        <Header/>
    <Layout>
      <SearchBar/>
        <div>
            <h1 className="text-white mt-10 mb-10">Senior Years</h1>
            <Link to="/chat">
                <button className="bg-indigo-700 text-white  text-xl px-3 py-2 rounded-2xl hover:bg-purple-950">AI-Chat</button>
            </Link>
        </div>
    </Layout>
    <Footer/>
    </>
  )
}

export default Senioryears