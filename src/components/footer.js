const Footer=()=>{
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
                    <a href="">Linkedin</a>
                    <a href="">Instagram</a>
                    <a href="">Github</a>
                </div>
                <div className="footer_22">
                    <button onClick={goToTop}>Back to top</button>
                </div>
            </div>
        </div>
    );
};
export default Footer;