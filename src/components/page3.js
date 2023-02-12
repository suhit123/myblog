import data from '../data/my_data.json'
import github from '../assets/githubpage3.png'
const Page3=()=>{
    const works=data[7].work;
    return(
        <div className="page3">
             {works.map((item,key)=>{
                return(
                    <div key={key} className='page3_blocks'>
                        <a href={item.github}><img className='github_page3' src={github}/></a>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>Demo : <a href={item.demo}>{item.demo}</a></p>
                        <img className='img_page3' src={item.image}/>
                    </div>
                );
             })}
        </div>
    );
    };
    export default Page3;