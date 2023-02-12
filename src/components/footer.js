import data from '../data/my_data.json';
const Footer=()=>{
    
    const profile=data[0];
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });}
    return(
        <div className="footer_div">
            <div className="footer_1">
                <p>©2023. Designed and developed by Suhit.</p>
            </div>
            <div className="footer_2">
                <div className="footer_21">
                    <a href={profile.linkdinprofile}>Linkedin</a>
                    <a href={profile.instaprofile}>Instagram</a>
                    <a href={profile.githubprofile}>Github</a>
                </div>
                <div className="footer_22">
                    <button onClick={goToTop}>Back to top</button>
                </div>
            </div>
        </div>
    );
};
export default Footer;