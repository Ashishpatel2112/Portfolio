import React from 'react'
// import { Link } from 'react-scroll'
import resume from '../assets/MY RESUME.pdf' 
// import img from '../img/Myimg.jpg'

function Header() {
  return (
    <>
    <div className="container flex">
    
<div className="main  h-[100vh] w-[20%] border border-black border-transparent bg-[rgb(4,11,20)] ">
        <div className="aside h-[40%] w-full border border-red-700 border-transparent ">
            <div className="a1 h-[75%] w-full border border-black border-transparent flex flex-col justify-center items-center">
                <div className="photo bg-[rgb(41,47,55)] h-[60%] w-[50%] border border-transparent border-black rounded-[100%] flex justify-center items-center">
                    <div className="image-icon h-[90%] w-[90%] border border-black  border-transparent rounded-[100%] overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vDOz528xRWxL3stzqVO-9k1gsj8m1wxt1g&s" className='h-full w-full'  alt="" />
                    </div>
                </div>
                <h1 className='text-2xl font-bold text-white'>Ashish Patel</h1>
            </div>
            <div className="a1 h-[25%] w-full border border-black flex justify-evenly items-center">
                <div className="links h-[50%] w-[15%] rounded-xl border border-white flex justify-center items-center">
                    <a href="home"> <i class="fa-brands fa-x-twitter text-white "></i></a>
                </div>
                <div className="links h-[50%] w-[15%] rounded-xl border border-white flex justify-evenly items-center">
                    <a href="home"><i class="fa-brands fa-facebook-f text-white"></i></a>
                </div>
                <div className="links h-[50%] w-[15%] rounded-xl border border-white flex justify-evenly items-center">
                    <a href="home"><i class="fa-brands fa-instagram text-white"></i></a>
                </div>
                <div className="links h-[50%] w-[15%] rounded-xl border border-white flex justify-evenly items-center">
                    <a href="https://github.com/Ashishpatel2112" target="_blank"><i class="fa-brands fa-github text-white"></i></a>
                </div>
                <div className="links h-[50%] w-[15%] rounded-xl border border-white flex justify-evenly items-center">
                    <a href="https://www.linkedin.com/in/ashish-ardeshana-2ab577264/" target="_blank"> <i class="fa-brands fa-linkedin-in text-white"></i></a>
                </div>
            </div>
        </div>
        <div className="aside h-[60%] w-full border border-red-700 border-transparent">
            <div className="division h-[13%] w-full border border-white hover:font-semibold hover:text-[rgb(153,169,180)] border-none  text-white text-md font-bold flex justify-start items-center ps-5 "> <a href="#home"><i class=" p-5 fa-light fa-house"></i>HOME</a></div>
            <div className="division h-[13%] w-full border border-white hover:font-semibold hover:text-[rgb(153,169,180)] border-none  text-white text-md font-bold flex justify-start items-center ps-5 "> <a href='#USER'><i class=" p-5 fa-light fa-user"></i>USER</a></div>
            <div className="division h-[13%] w-full border border-white hover:font-semibold hover:text-[rgb(153,169,180)] border-none  text-white text-md font-bold flex justify-start items-center ps-5 "><a href="#RESUME"><i class=" p-5 fa-light fa-file-lines"></i>RESUME </a></div>
            <div className="division h-[13%] w-full border border-white hover:font-semibold hover:text-[rgb(153,169,180)] border-none  text-white text-md font-bold flex justify-start items-center ps-5 "><a href="#PROJECT"><i class=" p-5 fa-light fa-images-user"></i>PROJECTS </a></div>
            <div className="division h-[13%] w-full border border-white hover:font-semibold hover:text-[rgb(153,169,180)] border-none  text-white text-md font-bold flex justify-start items-center ps-5 "><a href="#CONTACT"><i class=" p-5 fa-regular fa-envelope"></i>CONTACT </a></div>
        </div>
</div>

<div className="sub h-[100vh] w-[80%]  border border-black border-transparent overflow-scroll">
    <div className="sub1 h-[100%] w-[100%] " id='home'>
        <div className="info">

        <h1 className='text-5xl font-semibold text-white pt-[25%] ps-10'>I AM 𝒜𝒮𝐻𝐼𝒮𝐻 𝒫𝒜𝒯𝐸𝐿 </h1>
        </div>
    </div>
    <div className="sub2 h-[100vh] w-[100%] " id='USER'>
        <div className="sub2-2 h-[20vh] w-full border border-black border-transparent">
            <h1 className='text-4xl font-semibold ps-5 pt-5'>About</h1>
            <div className='h-[5px] w-[60px]  bg-[rgb(20,157,221)] rounded-lg ms-5 mt-3'></div>
        </div>
        <div className="sub2-2 h-[70vh] w-full border border-black border-transparent flex">
            <div className="sub2-2-2 h-full w-[40%] border border-black border-transparent flex justify-center items-center ">
                <img id='myimg' className='h-[95%] w-[95%]' src="https://www.iihm.ac.in/wp-content/uploads/2019/01/Mubeena.jpg" alt="" />
            </div>
            <div className="sub2-2-2 h-full w-[60%] border border-black border-transparent ">
                <div className="sub2-2-2-2 h-[25%] w-full border border-black border-transparent">
                    <h1 className='text-2xl font-bold p-3'>Full-Stack Developer/MERN-Stack Developer</h1>
                    <p className='ps-3'>Full-Stack Web Developer with [1.5] years of experience as a trainee to developing, and deploying responsive anddynamic web applications. Proficient in front-end technologies</p>
                </div>
                <div className="sub2-2-2-2 h-[50%] w-full border border-black border-transparent flex ">
                    <div className="infor h-full w-[50%] border border-black border-transparent">
                        <h1 className='p-4'><i class="fa-solid fa-chevron-right text-[rgb(51,159,221)]"></i> <span className=' font-semibold'>Birthday:</span> 21-DEC-2004 </h1>
                        <h1 className='p-4'><i class="fa-solid fa-chevron-right text-[rgb(51,159,221)]"></i> <span className=' font-semibold'>Email:</span> patelaashish504@gmail.com </h1>
                        <h1 className='p-4'><i class="fa-solid fa-chevron-right text-[rgb(51,159,221)]"></i> <span className=' font-semibold'>Phone:</span> (+91) 9054122677 </h1>
                        <h1 className='p-4'><i class="fa-solid fa-chevron-right text-[rgb(51,159,221)]"></i> <span className=' font-semibold'>City:</span> Atkot,Rajkot (360040) </h1>
                    </div>
                    <div className="infor h-full w-[50%] border border-black border-transparent ">
                    <h1 className='p-4'><i class="fa-solid fa-chevron-right text-[rgb(51,159,221)]"></i> <span className=' font-semibold'>Age:</span> 21 </h1>
                    <h1 className='p-4'><i class="fa-solid fa-chevron-right text-[rgb(51,159,221)]"></i> <span className=' font-semibold'>Degree:</span> It-Engineer </h1>
                    <h1 className='p-4'><i class="fa-solid fa-chevron-right text-[rgb(51,159,221)]"></i> <span className=' font-semibold'>Email:</span> patelaashish31154@gmail.com </h1>
                    <h1 className='p-4'><i class="fa-solid fa-chevron-right text-[rgb(51,159,221)]"></i> <span className=' font-semibold'>Freelance:</span> Available </h1>

                    </div>
                </div>
                <div className="sub2-2-2-2 h-[25%] w-full border border-black border-transparent">
                    <p className='p-3'>HTML5, CSS3, JavaScript, and React,alongside back-end expertise in Node.js, Express, and database management with MongoDB. Strongunderstanding of RESTful APIs, web services, and cloud platforms like AWS. Adept at working with Git forversion control and Agile methodologies. Passionate about delivering high-quality, user-centric solutions with afocus on clean code and performance optimization</p>
                </div>
            </div>
        </div>
        
    </div>

    <div className="sub3 h-[70vh] w-full border border-black border-transparent bg-[rgb(244,250,253)] ">
        <div className="sub3-3 w-full h-[15%] border border-black border-transparent">
            <h1 className='font-bold text-4xl ps-5 pt-2'>Skills</h1>
            <div className='h-[5px] w-[70px] bg-[rgb(20,157,221)] rounded-xl ms-5 mt-2'></div>
        </div>
        <div className="sub3-3 w-full h-[80%] border border-black border-transparent ">
            <h1 className='text-xl font-semibold text-center'>Front-End Development</h1>
            <div className="frontend flex justify-evenly mt-5">

            <div className="skills h-[150px] w-[150px] rounded-3xl overflow-hidden border-transparent border border-black">
                <img src="https://static.vecteezy.com/system/resources/previews/001/416/705/non_2x/html5-emblem-orange-shield-and-white-text-vector.jpg" className=' h-full w-full' alt="" />
            </div>
            <div className="skills h-[150px] w-[150px] rounded-3xl overflow-hidden border-transparent border border-black">
                <img src="https://i.pinimg.com/736x/a9/dc/c7/a9dcc740cad3149598307b5de8bc10c3.jpg" className=' h-full w-full' alt="" />
            </div>
            <div className="skills h-[150px] w-[150px] rounded-3xl overflow-hidden border-transparent border border-black">
                <img src="https://banner2.cleanpng.com/20180409/wzq/avgzba71m.webp" className=' h-full w-full' alt="" />
            </div>
            <div className="skills h-[150px] w-[150px] rounded-3xl overflow-hidden border-transparent border border-black">
                <img src="https://www.svgrepo.com/show/374118/tailwind.svg" className=' h-full w-full' alt="" />
            </div>
            <div className="skills h-[150px] w-[150px] rounded-3xl overflow-hidden border-transparent border border-black">
                <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" className=' h-full w-full' alt="" />
            </div>
            <div className="skills h-[150px] w-[150px] rounded-3xl overflow-hidden border-transparent border border-black">
                <img src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png" className=' h-full w-full' alt="" />
            </div>
            <div className="skills h-[150px] w-[150px] rounded-3xl overflow-hidden border-transparent border border-black">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" className=' h-full w-full' alt="" />
            </div>
            </div>
            <h1 className='text-xl font-semibold text-center my-2'>Backend</h1>
            <div className="Backend flex justify-evenly mt-5">

            <div className="skills h-[150px] w-[150px] rounded-3xl overflow-hidden border-transparent border border-black">
                <img src="https://w7.pngwing.com/pngs/115/190/png-transparent-mongodb-original-logo-icon-thumbnail.png" className=' h-full w-full' alt="" />
            </div>
            <div className="skills h-[150px] w-[150px] rounded-3xl overflow-hidden border-transparent border border-black">
                <img src="data:image/png;base64,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" className=' h-full w-full' alt="" />
            </div>
            <div className="skills h-[150px] w-[150px] rounded-3xl overflow-hidden border-transparent border border-black">
                <img src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png" className=' h-full w-full' alt="" />
            </div>
            <div className="skills h-[150px] w-[150px] rounded-3xl overflow-hidden border-transparent border border-black">
                <img src="https://p7.hiclipart.com/preview/306/37/167/node-js-javascript-web-application-express-js-computer-software-others.jpg" className=' h-full w-full' alt="" />
            </div>
            </div>
            
           
        </div>
 
    </div>

    <div className="sub4 h-[120vh] w-full border border-black  border-transparent" id='RESUME'>
        <div className="sub4-4 w-full h-[20%] border border-black border-transparent ">
            <h1 className='text-4xl font-semibold ps-5 pt-5'>Resume</h1>
            <div className='h-[5px] w-[60px]  bg-[rgb(20,157,221)] rounded-lg ms-5 mt-3'></div>
        </div>
        <div className="sub4-4 w-full h-[80%] border border-black border-transparent flex">
            <div className="sub4-4-4 h-full w-[50%] border border-black  border-transparent">
                <div className="sub4-4-4 h-[50%] w-full border border-black border-transparent">
                    <div className="heading w-full h-[15%] border border-black border-transparent">
                        <h1 className='text-2xl font-bold p-2 ps-10'>Summary</h1>
                    </div>
                    <div className="heading w-full h-[85%] border border-black border-transparent flex">
                        <div className="heads h-full w-[10%] border border-black border-transparent flex flex-col items-end pe-2 ">
                            <div className='circle rounded-full  h-[16px] w-[16px]  border-2 border-[rgb(51,159,221)]  mt-2'></div>
                            <div className='border-none bg-[rgb(51,159,221)] h-[70%] w-[2px] me-[7px]' > </div>
                        </div>
                        <div className="heads h-full w-[90%] border border-black border-transparent">
                                <h1 className='text-lg font-semibold text-[rgb(82,83,84)] mt-1 ms-3'></h1>
                                <p className='text-[rgb(82,83,84)] font-medium text-sm  ms-3 mt-9'>Full-Stack Web Developer with [1.5] years of experience as a trainee to developing, and deploying responsive anddynamic web applications. Proficient in front-end technologies such as HTML5, CSS3, JavaScript, and React,alongside back-end expertise in Node.js, Express, and database management with MongoDB. Strongunderstanding of RESTful APIs, web services, and cloud platforms like AWS. Adept at working with Git forversion control and Agile methodologies. Passionate about delivering high-quality, user-centric solutions with afocus on clean code and performance optimization</p>
                               
                        </div>
                    </div>
                </div>
                <div className="sub4-4-4 h-[50%] w-full border border-black border-transparent">
                    <div className="heading w-full h-[15%] border border-black border-transparent">
                        <h1 className='text-2xl font-bold p-2 ps-10'>Professional Experience</h1>
                    </div>
                    <div className="heading w-full h-[85%] border border-black border-transparent flex">
                        <div className="heads h-full w-[10%] border border-black border-transparent flex flex-col items-end pe-2 ">
                            <div className='circle rounded-full  h-[16px] w-[16px]  border-2 border-[rgb(51,159,221)]  mt-2'></div>
                            <div className='border-none bg-[rgb(51,159,221)] h-[70%] w-[2px] me-[7px]' > </div>
                        </div>
                        <div className="heads h-full w-[90%] border border-black border-transparent ">
                                <h1 className='text-lg font-semibold text-[rgb(82,83,84)] mt-1 ms-3'>Web Devlopment (Trainee)</h1>
                                <p className='text-[rgb(82,83,84)] font-medium text-sm  ms-3 mt-3'>Innovative and deadline-driven Web Designer with 1+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
                               
                                <a href={resume} download >
                                    <button className='resume border-4 border-[rgb(20,157,221)]  h-[50px] w-[160px] rounded-3xl  font-bold mt-10'> Downlode Resume </button>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub4-4-4 h-full w-[50%] border border-black border-transparent ">
                    <div className="sub4-4-4 h-full w-full border border-black border-transparent ">
                        <div className="heading w-full h-[7%] border border-black border-transparent ">
                        <h1 className='text-2xl font-bold p-2 ps-10'>Education</h1>
                        </div>
                    <div className="heading w-full h-[85%] border border-black border-transparent flex">
                        <div className="heads h-full w-[10%] border border-black border-transparent flex flex-col items-end pe-2 ">
                            <div className='circle rounded-full  h-[16px] w-[16px]  border-2 border-[rgb(51,159,221)]  mt-2'></div>
                            <div className='border-none bg-[rgb(51,159,221)] h-[50%] w-[2px] me-[7px]' > </div>
                            <div className='circle rounded-full  h-[16px] w-[16px]  border-2 border-[rgb(51,159,221)]  '></div>
                            <div className='border-none bg-[rgb(51,159,221)] h-[50%] w-[2px] me-[7px]' > </div>
                        </div>
                        <div className="heads h-full w-[90%] border border-black border-transparent ">
                                <h1 className='text-lg font-semibold text-[rgb(82,83,84)] mt-1 ms-3'>10th</h1>
                                <p className='text-[rgb(82,83,84)] font-medium text-sm  ms-3 mt-3'>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
                                <li className='text-[rgb(82,83,84)] font-medium text-sm ms-3 py-2'>80.79 pr</li>
                                <h1 className='text-lg font-semibold text-[rgb(82,83,84)] mt-[28%] ms-3 '>It-Engineering</h1>
                                <p className='text-[rgb(82,83,84)] font-medium text-sm  ms-3 mt-3'>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
                                <li className='text-[rgb(82,83,84)] font-medium text-sm ms-3 py-2 mt-5'>7.50 CGPA</li>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>

    <div className="sub5 h-[100vh] w-full border border-black border-transparent bg-[rgb(244,250,253)] " id='PROJECT'>
        <div className="sub5-5 w-full h-[15%] border border-black border-transparent ">
        <h1 className='font-bold text-4xl ps-5 pt-9'>Projects</h1>
            <div className='h-[5px] w-[70px]  bg-[rgb(20,157,221)] rounded-xl ms-5 mt-4'></div>
        </div>
        <div className="sub5-5 w-full h-[80%] border border-black border-transparent flex flex-wrap justify-evenly items-center">
            <div className="sub5-5-5 h-[45%] w-[30%] border border-black border-transparent">
                <a href="https://ashish-rolex-clone.netlify.app/" target="_blank">
                <img src="https://i.pinimg.com/originals/8b/3a/90/8b3a90b81bbc1034d2e52bdd46545d52.jpg" className='h-full w-full' alt="" />
                </a>
            </div>
            <div className="sub5-5-5 h-[45%] w-[30%] border border-black border-transparent">
                <a href="">
                    <img src="https://www.blog.shippypro.com/hs-fs/hubfs/Blog/fashion-ecommerce.jpg?width=1920&height=1080&name=fashion-ecommerce.jpg" className=' h-full w-full' alt="" />
                </a>
            </div>
            <div className="sub5-5-5 h-[45%] w-[30%] border border-black border-transparent">
                <a href="https://ashish-wines.netlify.app/" target="_blank">
                    <img src="https://i.pinimg.com/originals/64/86/15/64861528156ce92f0cf72840c29f02f4.jpg" className=' h-full w-full' alt="" />
                </a>
            </div>
            <div className="sub5-5-5 h-[45%] w-[30%] border border-black border-transparent">
                <a href="https://ashish-petcare.netlify.app/" target="_blank">
                    <img src="https://digittrix.com/assets/open/images/pet-care-mobile-development.webp" className=' h-full w-full' alt="" />
                </a>
            </div>
            <div className="sub5-5-5 h-[45%] w-[30%] border border-black border-transparent">
                <a href="https://ashish-estore.netlify.app/" target="_blank">
                    <img src="https://t4.ftcdn.net/jpg/05/97/58/45/360_F_597584591_pbn0T7YSkqVSRSYMYmXxwgThpMJAOaFc.jpg" className='h-full w-full' alt="" />
                </a>
            </div>
            <div className="sub5-5-5 h-[45%] w-[30%] border border-black border-transparent">
                <a href="https://ashish-spotify.netlify.app/" target="_blank">
                    <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/10/Spotify-Web-Player-Navigation-Guide-Featured.jpg" className=' h-full w-full' alt="" />
                </a>
            </div>
        </div>
    </div>

   

    <div className="sub7 h-[70vh] w-full border border-black border-transparent bg-[rgb(244,250,253)] " id='CONTACT'>
        <div className="sub7-7 w-full h-[20%] border border-black  border-transparent">
            <h1 className='font-bold text-4xl ps-5 '>Contact</h1>  
            <div className='h-[5px] w-[70px]  bg-[rgb(20,157,221)] rounded-xl ms-5 mt-4'></div>
        </div>
        <div className="sub7-7 w-full h-[80%] border border-black border-transparent flex justify-evenly items-center">
            <div className="sub7-7-7 h-[93%] w-[46%] border border-black border-transparent flex flex-col justify-evenly ">
                <div className="ourinfo w-full h-[23%] border border-black border-transparent flex ">
                    <div className="info h-full w-[20%] border border-black border-transparent flex justify-center items-center">
                        <div className="icons h-[60px] w-[60px] rounded-full border border-transparent  bg-[rgb(213,238,250)]  flex justify-center items-center">
                        <i class="fa-regular fa-location-dot text-3xl text-[rgb(20,157,221)]"></i>
                        </div>
                    </div>
                    <div className="info h-full w-[80%] border border-black border-transparent">
                        <h1 className='text-xl font-bold  pt-3 '>Address</h1>
                        <p className='text-md ps-3'> Jasdan,Rajkot (360040)</p>
                    </div>
                </div>
                <div className="ourinfo w-full h-[23%] border border-black border-transparent flex ">
                    <div className="info h-full w-[20%] border border-black border-transparent flex justify-center items-center">
                        <div className="icons h-[60px] w-[60px] rounded-full border border-transparent  bg-[rgb(213,238,250)]  flex justify-center items-center">
                        <i class="fa-regular fa-phone-volume text-3xl text-[rgb(20,157,221)]"></i>
                        </div>
                    </div>
                    <div className="info h-full w-[80%] border border-black border-transparent">
                        <h1 className='text-xl font-bold pt-3 '>Call Us</h1>
                        <p className='text-md ps-3'> (+91) 90541 22677</p>
                    </div>
                </div>
                <div className="ourinfo w-full h-[23%] border border-black border-transparent flex ">
                    <div className="info h-full w-[20%] border border-black border-transparent flex justify-center items-center">
                        <div className="icons h-[60px] w-[60px] rounded-full border border-transparent  bg-[rgb(213,238,250)]  flex justify-center items-center">
                        <i class="fa-light fa-envelope text-3xl text-[rgb(20,157,221)]"></i>
                        </div>
                    </div>
                    <div className="info h-full w-[80%] border border-black border-transparent ">
                        <h1 className='text-xl font-bold pt-3 '>Email Us</h1>
                        <p className='text-md ps-3'>patelaashish31154@gmail.com</p>
                    </div>
                </div>
                
                
            </div>
            <div className="sub7-7-7 h-[93%] w-[48%] border border-black border-transparent flex flex-wrap justify-evenly ">
                <form action="" className='h-[100%] w-[100%] border border-black border-transparent flex flex-wrap justify-evenly ' >                
                
                <div className="feed h-[90px] w-[50%] border border-black border-transparent">
                <label htmlFor="" className='text-xl p-1 ' >Your Name :</label> <br/>
                <input type="text" className='h-[40px] rounded-full mt-2 w-full border border-black font-bold text-center '/>
                </div>

                <div className="feed h-[90px] w-[48%] border border-black border-transparent">
                <label htmlFor="" className='text-xl p-1 ' >Your Email :</label> <br/>
                <input type="email" className='h-[40px] mt-2 rounded-full w-full font-bold text-center border border-black '/>
                </div>

                <div className="feed h-[90px] w-[95%] border border-black border-transparent">
                <label htmlFor="" className='text-xl p-1 ' >Your Subject :</label> <br/>
                <input type="text" className='h-[40px] rounded-full mt-2 font-bold text-center w-full border border-black '/>
                </div>

                <div className="feed h-[150px] w-[95%] border border-black border-transparent">
                <label htmlFor="" className='text-xl p-1 ' >Your Message :</label> <br/>
                <input type="text" className='h-[90px] mt-2 w-full rounded-2xl border border-black font-bold text-center  '/>
                </div>
                

                <a href=""> <button className='message border-2 border-[rgb(20,157,221)] rounded-xl px-4 py-2 font-semibold bg-[rgb(20,157,221)] text-white'>Send Message</button> </a>

                </form>

            </div>
        </div>
    </div>

    <div className="sub8 h-[60px] w-full border border-black border-transparent bg-[rgb(244,250,253)] flex flex-col justify-center items-center">
            <h1>© iPortfolio All Rights Reserved</h1>
            <h1>Designed by Ashish Patel</h1>
    </div>

</div>

</div> 
    </>
  )
}

export default Header
