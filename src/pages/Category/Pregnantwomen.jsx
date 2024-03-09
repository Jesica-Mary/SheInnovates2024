import {Link} from "react-router-dom"
import Layout from "../../layout/Layout"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import SearchBar from "../../components/SearchBar/SearchBar"
const Pregnantwomen = () => {
  return (
    <>
        <Header/>
    <Layout>
      <SearchBar/>
        <div >
            <h1 className="text-white text-center mt-10">Pregnantwomen</h1>
            <div className="pregnant p-10">
            <iframe
            src="https://www.youtube.com/embed/Z6qsvKS4Q10?si=sYP7Y8SxTEsJ4_gZ"
            title="YouTube video"
            allowfullscreen
            className="rounded-3xl h-4/5 w-[57vh] "
          /></div>
            <Link to="/chat" className="flex justify-center">
                <button className="bg-indigo-700 text-white  text-xl px-3 py-2 rounded-2xl hover:bg-purple-950">AI-Chat</button>
            </Link>
        </div>
    </Layout>
    <Footer/>
    </>
  )
}

export default Pregnantwomen