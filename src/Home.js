import Homedetails from "./components/homepage";
import Profile from "./components/profile";
import bgimg from './assets/background_img.png'
const Home=()=>{
return(
    <div className="Home">
        {/* <div className="Bg_div"><img className="bg_img" src={bgimg} alt=""/></div> */}
        <Profile/>
        <Homedetails/>
    </div>
);
};
export default Home;