import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import Chat from "../pages/Chat";
import Categories from "../pages/Category/Categories";
import FAQ from "../components/FAQ";
import Pregnantwomen from "../pages/Category/Pregnantwomen";
import Childhood from "../pages/Category/Childhood";
import Adulthood from "../pages/Category/Adulthood";
import Middleage from "../pages/Category/Middleage";
import Senioryears from "../pages/Category/Senioryears";

const AppRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/FAQ" element={<FAQ/>}></Route>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/childhood" element={<Childhood/>}/>
            <Route path="/adulthood" element={<Adulthood/>}/>
            <Route path="/pregnantwomen" element={<Pregnantwomen/>}/>
            <Route path="/middleage" element={<Middleage/>}/>
            <Route path="/senioryears" element={<Senioryears/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoute