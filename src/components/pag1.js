import data from '../data/my_data.json';
import cseaiml from '../assets/computer.png';
const Page1=()=>{
const content=data[1];
const whatiamdoing=data[2].details;
const skilltable=data[3].myskills;
const clubs=data[4];
const education=data[5].education;
    return(
        <div className='page1_cont'>
        <div className="about_me">
            <h1>About <span className='me_span'>Me</span></h1>
            <div className="about_me_line"></div>
            <p className="about_me_content">{content.content}</p>
        </div>
        <div className='what_iam_doing_container'>
            <h2>What I'm <span className='doing_span'>Doing</span></h2>
        <div className='what_iam_doing'>
            {whatiamdoing.map((item,key)=>{
                return(
                <div key={key} className='what_iam_doing_blocks'>
                    <div className='what_iam_doing_blocks_img'><img src={cseaiml}/>
                    <div className='what_iam_doing_blocks_data'>
                        <h3>{item.work}</h3>
                        <p>{item.description}</p>
                    </div>
                    </div>
                </div>);
            })}
        </div>
        </div>
        <div className="about_me">
            <h1>Tech<span className='me_span'>nologies</span></h1>
            <div className="about_me_line"></div>
            <div className='table_container'><table className='skills'><tr className='technologies_blocks'>
                <th className='serialNum'>S.No</th>
                <th>My Skills</th>
                <th>Level</th>
            </tr>
            {skilltable.map((items,key)=>{
                return(<tr key={key} className='technologies_blocks'>
                    <td>{key+1}</td>
                    <td>{items.name}</td>
                    <td>{items.mylevel}</td>
                </tr>);
            })}
            </table>
            </div>
        </div>
        <div className='education'>
            <h1>Education & <span className='me_span'>Acedemics</span></h1>
            <div className='education_block'>
                {education.map((item,key)=>{
                    return(
                        <div key={key} className='education_block_content'>
                            <h3>{item.name}</h3>
                            <h5>{item.place}</h5>
                            <h6>Grade :{item.grade}</h6>
                            <div className='about_me_line'></div>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
        <div className='community_activities'>
            <h1>Community <span className='me_span'>Activities</span></h1>
            <h3>{clubs.name}</h3>
            <h6>{clubs.role}</h6>
            <div className="about_me_line"></div>
            <p>{clubs.description}</p>
            <a href={clubs.link}>Club Website</a>
        </div>
        </div>
    );
}
export default Page1;