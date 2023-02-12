import codingdatastruc from '../assets/codingninjadatastructures.png'
import introcplusplus from '../assets/introcplusplus.png';
import pythonhacker from '../assets/pythonbasiccertificatepage.jpg';
import reacthacker from '../assets/react_basiccertificate.jpg'
const Page2=()=>{
return(
    <div className="page2">
            <div className='page_2_blocks'>
           <div><img src={"https://coursera-certificate-images.s3.amazonaws.com/YUXSLEZ2MGRL"} /></div>
           <div className='page_2_blocks_content'><h1>Introduction to Front-End Development by Meta</h1>
                <p>Verify my certification through below link</p>
                <a href={"https://coursera.org/share/b79ba831134bbef23c36768ca071b9d4"}>Certification</a>
            </div>
            </div>
            <div className='page_2_blocks'>
                <div><img src={"https://coursera-certificate-images.s3.amazonaws.com/FM6TEMUX2G3D"} /></div>
                <div className='page_2_blocks_content
'><h1>React Basics by Meta</h1>
                <p>Verify my certification through below link</p>
                <a href={"https://coursera.org/share/8d9880085076e774195a5550046b5cd6"}>Certification</a></div>
            </div>
            <div className='page_2_blocks'>
           <div><img src={pythonhacker} /></div>
           <div className='page_2_blocks_content'><h1>Python (Basic) Certificate
</h1>
           <p>Verify my certification through below link</p>
                <a href={"https://www.hackerrank.com/certificates/acc0751cd7ae"}>Certification</a>
            </div>
            </div> <div className='page_2_blocks'>
           <div><img src={reacthacker} /></div>
           <div className='page_2_blocks_content'><h1>React (Basic) Certificate</h1>
           <p>Verify my certification through below link</p>
                <a href={"https://www.hackerrank.com/certificates/f5bc23afc740"}>Certification</a>
            </div>
            </div>
            <div className='page_2_blocks'>
                <div className='page_2_blocks_1'><img src={introcplusplus} /></div>
                <div className='page_2_blocks_content'><h1>Introduction to C++</h1>
                <p>Verify my certification through below link</p>
                <a href={"https://certificate.codingninjas.com/view/7ff59096a98c8b91"}>Certification</a></div>
                
            </div>
            <div className='page_2_blocks'>
               <div> <img src={codingdatastruc} /></div>
                <div className='page_2_blocks_content'><h1>Data Structures in C++</h1>
                <p>Verify my certification through below link</p>
                <a href={"https://certificate.codingninjas.com/view/fba9c53494000d1e"}>Certification</a></div>
               
            </div>
    </div>
);
};
export default Page2;