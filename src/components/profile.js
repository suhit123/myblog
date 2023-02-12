import data from '../data/my_data.json';
import instalogo from '../assets/instagram.png';
import githublogo from '../assets/github.png';
import linkdin from '../assets/linkedin.png';
import date from '../assets/date.png';
import place from '../assets/location.png';
import mobile from '../assets/smartphone.png';
import email from '../assets/email.png';
import profile_pic from '../assets/profile.jpeg';
import download_btn from '../assets/downloads.png'
const Profile =()=>{
    const profile=data[0];
    return(
        <div className="profile_container">
            <div className="profile_container_top_container">
                <img className='my_img' src={profile_pic} alt=""/>
                <h1 className="name">{profile.name}</h1>
                <h1 className="current_profesion">{profile.profession}</h1>
                <div className="social_media_links">
                    <a href={profile.instaprofile}><img className="ss_media_logos" src={instalogo} alt="" /></a>
                    <a href={profile.linkdinprofile}><img className="ss_media_logos" src={githublogo} alt="" /></a>
                    <a href={profile.githubprofile}><img className="ss_media_logos" src={linkdin} alt="" /></a>
                </div>
            </div>
            <div className="profile_container_bottom_container">
                <h3><img src={date} alt=""/><span>{profile.birthdate}</span></h3>
                <h3><img src={place} alt=""/><span>{profile.place}</span></h3>
                <h3><a  className='tele' href='mailto:suhiteswar123@gmail.com'><img src={email} alt=""/><span>{profile.mail}</span></a></h3>
                <h3><a className='tele' href='tel:8688867490'><img src={mobile} alt=""/><span>{profile.mobile}</span></a></h3>
            <div className='cv'><a className='download_cv' download=""><img src={download_btn} alt=""/> Download CV</a></div>
            </div>
        </div>
    );
};
export default Profile;