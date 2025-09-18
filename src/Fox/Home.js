import './CSS/Home.css'
import Quote from './Quote'
export default function Home() {

    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://t3.ftcdn.net/jpg/06/98/15/28/360_F_698152816_iofj0EaoJp6jjKsHkMSoAEawmbKg3at0.jpg" class="d-block w-100" height={600} alt="..." />
                        <div className="carousel-caption d-none d-md-block text-start" style={{ top: '40%', left: '15%', transform: 'translateY(-20%)' }}>
                            <h1 style={{ fontSize: '45px', color: 'white' }}>University, college <br />School Education</h1>
                            <p style={{ color: 'white', fontWeight: 'bold' }}>A small river named Duden floes by their place and supplies it with <br /> the necessary regelialia</p>
                            <div class="mt-3">
                                <a href="/Contact" class="btn btn-dark" style={{ backgroundColor: 'orangered',border:'none' }}>Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://t3.ftcdn.net/jpg/06/98/15/28/360_F_698152816_iofj0EaoJp6jjKsHkMSoAEawmbKg3at0.jpg" class="d-block w-100" height={600} alt="..." />
                        <div className="carousel-caption d-none d-md-block text-start" style={{ top: '40%', left: '15%', transform: 'translateY(-20%)' }}>
                            <h1 style={{ fontSize: '45px', color: 'White' }}>Education needs<br />Complete Solution</h1>
                            <p style={{ color: 'white', fontWeight: 'bold' }}>A small river named Duden floes by their place and supplies it with <br /> the necessary regelialia</p>
                            <div class="mt-3">
                                <a href="/Contact" class="btn btn-dark" style={{ backgroundColor: 'orangered',border:'none' }}>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>



            <div class="row" style={{ textAlign: 'center' }}>
                <div class="col-md-3 col-lg-3 p-5" style={{ backgroundColor: 'orangered', color: 'white' }}>
                    <div class="pt-3">
                        <center><i class="fa-solid fa-child" style={{ fontSize: '30px' }}></i></center>
                        <div class="card-body d-flex pt-3">
                            <div>
                                <h5 class="card-title ps-3">Certified Teachers</h5>
                                <p class="card-text ps-3 pt-2">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-lg-3 p-5" style={{ backgroundColor: 'darkblue', color: 'white' }}>
                    <div class="pt-3">
                        <center><i class="fa-solid fa-building-columns" style={{ fontSize: '30px' }}></i></center>
                        <div class="card-body d-flex pt-3">
                            <div>
                                <h5 class="card-title ps-3">Special Education</h5>
                                <p class="card-text ps-3 pt-2">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-lg-3 p-5" style={{ backgroundColor: 'orangered', color: 'white' }}>
                    <div class="pt-3">
                        <center><i class="fa-solid fa-book" style={{ fontSize: '30px' }}></i></center>
                        <div class="card-body d-flex pt-3">
                            <div>
                                <h5 class="card-title ps-3">Book & Library</h5>
                                <p class="card-text ps-3 pt-2">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-lg-3 p-5" style={{ backgroundColor: 'darkblue', color: 'white', width: '309px' }}>
                    <div class="pt-3">
                        <center><i class="fa-solid fa-medal" style={{ fontSize: '30px' }}></i></center>
                        <div class="card-body d-flex pt-3">
                            <div>
                                <h5 class="card-title ps-3">Sport Clubs</h5>
                                <p class="card-text ps-3 pt-2">I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div class="container d-flex flex-column flex-md-row justify-content-between">
                    <div className='mt-5'>
                        <h1>What We Offer</h1>
                        <p className='mt-4'>On her way she met a copy. The copy warned the Little Blind Text, that where it <br /> came from it would have been rewritten a thousand times and everything<br /> that was left from its origin would be the word.</p>
                        <div className="row mt-5">
                            <div className="col-lg-6 d-flex">
                                <div className='mt-4'>
                                    <i class="fa-solid fa-shield" id="i"></i>
                                </div>
                                <div style={{ paddingLeft: '10px' }}>
                                    <h4>Safety First</h4>
                                    <p>Far far away, behind <br />the word mountains, far<br /> from the countries<br /> Vokalia.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                                <div className='mt-4'>
                                    <i class="fa-solid fa-building-columns" id='i'></i>
                                </div>
                                <div style={{ paddingLeft: '10px' }}>
                                    <h4>Regular Classes</h4>
                                    <p>Far far away, behind <br />the word mountains, far<br /> from the countries<br /> Vokalia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-6 d-flex">
                                <div className='mt-4'>
                                    <i class="fa-solid fa-certificate" id='i'></i>
                                </div>
                                <div style={{ paddingLeft: '10px' }}>
                                    <h4>Certified Teachers</h4>
                                    <p>Far far away, behind <br />the word mountains, far<br /> from the countries<br /> Vokalia.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                                <div className='mt-4'>
                                    <i class="fa-solid fa-landmark" id='i'></i>
                                </div>
                                <div style={{ paddingLeft: '10px' }}>
                                    <h4 >Sufficient Classrooms</h4>
                                    <p>Far far away, behind <br />the word mountains, far<br /> from the countries<br /> Vokalia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-6 d-flex">
                                <div className='mt-4'>
                                    <i class="fa-solid fa-puzzle-piece" id='i'></i>
                                </div>
                                <div style={{ paddingLeft: '10px' }}>
                                    <h4>Creative Lessons</h4>
                                    <p>Far far away, behind <br />the word mountains, far<br /> from the countries<br /> Vokalia.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                                <div className='mt-4'>
                                    <i class="fa-solid fa-medal" id='i'></i>
                                </div>
                                <div style={{ paddingLeft: '10px' }}>
                                    <h4 >Sports Facilities</h4>
                                    <p>Far far away, behind <br />the word mountains, far<br /> from the countries<br /> Vokalia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="https://media.istockphoto.com/id/1470544060/photo/group-of-university-students-e-learning-on-laptop-at-campus.jpg?s=612x612&w=0&k=20&c=cwuT0WSg2xzQ0MhFzt2EbIL33IcS40-Mb3htuy9B0v0=" class="img-fluid mt-4 mt-md-0 me-2"
                        alt="Illustration" style={{ maxWidth: "500px", height: '900px' }}></img>
                </div>
            </div>


            <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
                <div
                    style={{
                        backgroundImage:
                            'url("https://media.istockphoto.com/id/1470544060/photo/group-of-university-students-e-learning-on-laptop-at-campus.jpg?s=612x612&w=0&k=20&c=cwuT0WSg2xzQ0MhFzt2EbIL33IcS40-Mb3htuy9B0v0=")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        opacity: 0.3,
                        zIndex: 1,
                    }}
                ></div>
                <div className="container h-100" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="row h-50 mt-5 pt-5">
                        <div className="col-lg-6 d-none d-md-flex justify-content-center">
                            <iframe
                                width="560"
                                height="320"
                                src="https://www.youtube.com/embed/hFp88NcLVvM?si=EE9QOazKQQIVnN4s"
                            ></iframe>
                        </div>
                        <div className="col-lg-6 ps-5 mt-5">
                            <h1>Fox University</h1>
                            <p>
                                Separated they live in. A small river named Duden flows by their place and supplies it with the necessary
                                regelialia. It is a paradisematic country.
                            </p>
                            <p>
                                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                                paradisematic country, in which roasted parts of sentences fly into your mouth.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5 pt-5">
                        <div className="col-md-3 text-center">
                            <h1>18</h1>
                            <p>Certified Teachers</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <h1>401</h1>
                            <p>Students</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <h1>30</h1>
                            <p>Courses</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <h1>50</h1>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className='mt-5 pt-5' style={{ textAlign: 'center' }}>
                    <h1>Our Courses</h1>
                    <p className='mt-4'>Separated they live in. A small river named Duden flows by their place and supplies it with the<br /> necessary regelialia. It is a paradisematic country</p>
                </div>
                <div class="row mt-5">
                    <div class="col-md-3 col-lg-3">
                        <div>
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog4.svg" class="card-img-top" alt="..."
                                height="180px"></img>
                            <div class="card-body ps-3" style={{ textAlign: 'left' }}>
                                <div className='d-flex mt-3'>
                                    <p><i class="fa-solid fa-user" style={{ color: 'orangered' }}></i>MR.JOHN</p>
                                    <p className='ps-1'><i class="fa-solid fa-table-cells" style={{ color: 'orangered' }}></i>10 SEATS</p>
                                    <p className='ps-1'><i class="fa-solid fa-calendar-days" style={{ color: 'orangered' }}></i>4 YEARS</p>
                                </div>
                                <h5 class="card-title">Electric Engineering</h5>
                                <p class="card-text mt-3">Separated they live in. A small river named Duden flows by their place<br /> and supplies it with the necessary<br /> regelialia. It is a paradisematic<br /> country</p>
                                <a href="#" class="btn btn-dark" style={{ backgroundColor: 'orangered' }}>Apply Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                        <div>
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog4.svg" class="card-img-top" alt="..."
                                height="180px"></img>
                            <div class="card-body ps-3" style={{ textAlign: 'left' }}>
                                <div className='d-flex mt-3'>
                                    <p><i class="fa-solid fa-user" style={{ color: 'orangered' }}></i>MR.JOHN</p>
                                    <p className='ps-1'><i class="fa-solid fa-table-cells" style={{ color: 'orangered' }}></i>10 SEATS</p>
                                    <p className='ps-1'><i class="fa-solid fa-calendar-days" style={{ color: 'orangered' }}></i>4 YEARS</p>
                                </div>
                                <h5 class="card-title">Electric Engineering</h5>
                                <p class="card-text mt-3">Separated they live in. A small river named Duden flows by their place<br /> and supplies it with the necessary<br /> regelialia. It is a paradisematic<br /> country</p>
                                <a href="#" class="btn btn-dark" style={{ backgroundColor: 'orangered' }}>Apply Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                        <div>
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog4.svg" class="card-img-top" alt="..."
                                height="180px"></img>
                            <div class="card-body ps-3" style={{ textAlign: 'left' }}>
                                <div className='d-flex mt-3'>
                                    <p><i class="fa-solid fa-user" style={{ color: 'orangered' }}></i>MR.JOHN</p>
                                    <p className='ps-1'><i class="fa-solid fa-table-cells" style={{ color: 'orangered' }}></i>10 SEATS</p>
                                    <p className='ps-1'><i class="fa-solid fa-calendar-days" style={{ color: 'orangered' }}></i>4 YEARS</p>
                                </div>
                                <h5 class="card-title">Electric Engineering</h5>
                                <p class="card-text mt-3">Separated they live in. A small river named Duden flows by their place<br /> and supplies it with the necessary<br /> regelialia. It is a paradisematic<br /> country</p>
                                <a href="#" class="btn btn-dark" style={{ backgroundColor: 'orangered' }}>Apply Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-3">
                        <div className='pb-5'>
                            <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog4.svg" class="card-img-top" alt="..."
                                height="180px"></img>
                            <div class="card-body ps-3" style={{ textAlign: 'left' }}>
                                <div className='d-flex mt-3'>
                                    <p><i class="fa-solid fa-user" style={{ color: 'orangered' }}></i>MR.JOHN</p>
                                    <p className='ps-1'><i class="fa-solid fa-table-cells" style={{ color: 'orangered' }}></i>10 SEATS</p>
                                    <p className='ps-1'><i class="fa-solid fa-calendar-days" style={{ color: 'orangered' }}></i>4 YEARS</p>
                                </div>
                                <h5 class="card-title">Electric Engineering</h5>
                                <p class="card-text mt-3">Separated they live in. A small river named Duden flows by their place<br /> and supplies it with the necessary<br /> regelialia. It is a paradisematic<br /> country</p>
                                <a href="#" class="btn btn-dark " style={{ backgroundColor: 'orangered' }}>Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className='mt-5 pt-5' style={{ textAlign: 'center' }}>
                    <h1>Certified Teachers</h1>
                    <p className='mt-4'>Separated they live in. A small river named Duden flows by their place and supplies it with the<br /> necessary regelialia. It is a paradisematic country</p>
                </div>
                <div className='row ps-3 pe-3 mb-5 pb-5'>
                    <div className="col-md-3">
                        <div className='teacher' style={{ width: '18rem', position: 'relative', overflow: 'hidden' }}>
                            <div className="image-container">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUGANJj7-s4nCF4HqSE1UZhFNyAEbU0LKVg&s" className="card-img-top" alt="..." height={390} />
                                <div className="overlay-icons">
                                    <a href="https://www.instagram.com/kreevtech_solutions/?igsh=MXh3MWdmZ3hoMXQ3bQ%3D%3D#">
                                        <i class="fa-brands fa-instagram"></i></a>
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                            </div>
                            <div className="card-body" style={{ textAlign: 'center' }}>
                                <h4 className="h pt-2" >Bianca Wilson</h4>
                                <p style={{ color: 'orangered' }}>TEACHER</p>
                                <p style={{ fontSize: '18px' }}>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='teacher' style={{ width: '18rem', position: 'relative', overflow: 'hidden' }}>
                            <div className="image-container">
                                <img src="https://img.lovepik.com/free-png/20211103/lovepik-commercial-male-image-thumbs-up-pictures-png-image_400248673_wh1200.png" class="card-img-top" alt="..." height={390}></img>
                                <div className="overlay-icons">
                                    <a href="https://www.instagram.com/kreevtech_solutions/?igsh=MXh3MWdmZ3hoMXQ3bQ%3D%3D#">
                                        <i class="fa-brands fa-instagram"></i></a>
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                            </div>
                            <div class="card-body" style={{ textAlign: 'center' }}>
                                <h4 className='h pt-2'>Jack William</h4>
                                <p style={{ color: 'orangered' }}>SCIENCE TEACHER</p>
                                <p style={{ fontSize: '18px' }}>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='teacher' style={{ width: '18rem', position: 'relative', overflow: 'hidden' }}>
                            <div className="image-container">
                                <img src="https://img.lovepik.com/free-png/20211215/lovepik-business-woman-likes-png-image_401639301_wh1200.png" class="card-img-top" alt="..." height={390}></img>
                                <div className="overlay-icons">
                                    <a href="https://www.instagram.com/kreevtech_solutions/?igsh=MXh3MWdmZ3hoMXQ3bQ%3D%3D#">
                                        <i class="fa-brands fa-instagram"></i></a>
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                            </div>
                            <div class="card-body" style={{ textAlign: 'center' }}>
                                <h4 className='h pt-2'>Rina John</h4>
                                <p style={{ color: 'orangered' }}>ENGLISH TEACHER</p>
                                <p style={{ fontSize: '18px' }}>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='teacher' style={{ width: '18rem', position: 'relative', overflow: 'hidden' }}>
                            <div className="image-container">
                                <img src="https://img.freepik.com/free-photo/designer-working-3d-model_23-2149371896.jpg?semt=ais_hybrid&w=740" class="card-img-top" alt="..." height={390}></img>
                                <div className="overlay-icons">
                                    <a href="https://www.instagram.com/kreevtech_solutions/?igsh=MXh3MWdmZ3hoMXQ3bQ%3D%3D#">
                                        <i class="fa-brands fa-instagram"></i></a>
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                            </div>
                            <div class="card-body" style={{ textAlign: 'center' }}>
                                <h4 className='h pt-2'>Mark Smith</h4>
                                <p style={{ color: 'orangered' }}>MATHS TEACHER</p>
                                <p style={{ fontSize: '18px' }}>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Quote />

            <div>
                <div className='mt-5 pt-5' style={{ textAlign: 'center' }}>
                    <h1>Recent Blog</h1>
                    <p className='mt-4'>Separated they live in. A small river named Duden flows by their place and supplies it with the<br /> necessary regelialia. It is a paradisematic country</p>
                </div>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div style={{ position: "relative" }}>
                                <img src="https://img.freepik.com/free-photo/designer-working-3d-model_23-2149371896.jpg?semt=ais_hybrid&w=740" class="card-img-top" alt="..." height={300}></img>
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "0px",
                                        left: "0px",
                                        backgroundColor: "blue",
                                        color: "white",
                                        padding: "4px 8px",
                                        fontSize: "18px",
                                        textAlign: 'center'
                                    }}><b>26</b><br />Jan<br />2026
                                </div>
                            </div>
                            <div class="card-body p-3" style={{ textAlign: 'left' }}>
                                <h4 className='head pt-2'>Skills To Develop Your Child Memory</h4>
                                <p className='pt-2' style={{ fontSize: '18px' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className='d-flex pt-2'>
                                    <div>
                                        <a href="#" class="btn btn-dark" style={{ backgroundColor: 'orangered', borderRadius: '20px' }}>Read More</a>
                                        <a href="#" class="card-link" style={{ color: 'orangered', paddingLeft: '110px' }}>Admin</a>
                                        <a href="#" class="card-link" style={{ color: 'gray', paddingLeft: '20px' }}><i class="fa-solid fa-message"></i>3</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div style={{ position: "relative" }}>
                                <img src="https://oxfordlearning.com/wp-content/uploads/2025/03/AdobeStock_132869690-scaled.jpeg" class="card-img-top" alt="..." height={300}></img>
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "0px",
                                        left: "0px",
                                        backgroundColor: "blue",
                                        color: "white",
                                        padding: "4px 8px",
                                        fontSize: "18px",
                                        textAlign: 'center'
                                    }}><b>26</b><br />Jan<br />2026
                                </div>
                            </div>
                            <div class="card-body p-3" style={{ textAlign: 'left' }}>
                                <h4 className='head pt-2'>Skills To Develop Your Child Memory</h4>
                                <p className='pt-2' style={{ fontSize: '18px' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className='d-flex pt-2'>
                                    <div>
                                        <a href="#" class="btn btn-dark" style={{ backgroundColor: 'orangered', borderRadius: '20px' }}>Read More</a>
                                        <a href="#" class="card-link" style={{ color: 'orangered', paddingLeft: '110px' }}>Admin</a>
                                        <a href="#" class="card-link" style={{ color: 'gray', paddingLeft: '20px' }}><i class="fa-solid fa-message"></i>3</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div style={{ position: "relative" }}>
                                <img src="https://thumbs.dreamstime.com/b/teenage-girl-writing-notes-library-study-table-using-laptop-computer-textbooks-education-learning-concentration-bookshelves-376447223.jpg" class="card-img-top" alt="..." height={300}></img>
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "0px",
                                        left: "0px",
                                        backgroundColor: "blue",
                                        color: "white",
                                        padding: "4px 8px",
                                        fontSize: "18px",
                                        textAlign: 'center'
                                    }}><b>26</b><br />Jan<br />2026
                                </div>
                            </div>
                            <div class="card-body p-3" style={{ textAlign: 'left' }}>
                                <h4 className='head pt-2'>Skills To Develop Your Child Memory</h4>
                                <p className='pt-2' style={{ fontSize: '18px' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className='d-flex pt-2'>
                                    <div>
                                        <a href="#" class="btn btn-dark" style={{ backgroundColor: 'orangered', borderRadius: '20px' }}>Read More</a>
                                        <a href="#" class="card-link" style={{ color: 'orangered', paddingLeft: '110px' }}>Admin</a>
                                        <a href="#" class="card-link" style={{ color: 'gray', paddingLeft: '20px' }}><i class="fa-solid fa-message"></i>3</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className='mt-5 pt-5' style={{ textAlign: 'center' }}>
                    <h1>Student Says About Us</h1>
                    <p className='mt-4'>Separated they live in. A small river named Duden flows by their place and supplies it with the<br /> necessary regelialia. It is a paradisematic country</p>
                </div>
                <div className='container mt-5 pt-5'>
                    <div className='row'>
                        <div className="col-md-4 d-flex gap-3 ">
                            <img src="https://img.lovepik.com/free-png/20211215/lovepik-business-woman-likes-png-image_401639301_wh1200.png" height={100} width={100} style={{ borderRadius: '50px', border: '1px solid orangered' }} className='mt-2'></img>
                            <div>
                                <p>Far far away, behind the word<br /> mountains, far from the <br />countries Vokalia and<br /> Consonantia, there live the<br /> blind texts.</p>
                                <p>Rina John</p>
                                <p style={{ color: 'orangered' }}>Mother</p>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex gap-3 ">
                            <img src="https://img.freepik.com/free-photo/designer-working-3d-model_23-2149371896.jpg?semt=ais_hybrid&w=740" height={100} width={100} style={{ borderRadius: '50px', border: '1px solid orangered' }} className='mt-2'></img>
                            <div>
                                <p>Far far away, behind the word<br /> mountains, far from the <br />countries Vokalia and<br /> Consonantia, there live the<br /> blind texts.</p>
                                <p>Mark Smith</p>
                                <p style={{ color: 'orangered' }}>Father</p>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex gap-3 ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUGANJj7-s4nCF4HqSE1UZhFNyAEbU0LKVg&s" height={100} width={100} style={{ borderRadius: '50px', border: '1px solid orangered' }} className='mt-2'></img>
                            <div>
                                <p>Far far away, behind the word<br /> mountains, far from the <br />countries Vokalia and<br /> Consonantia, there live the<br /> blind texts.</p>
                                <p>Bianca Wilson</p>
                                <p style={{ color: 'orangered' }}>Father</p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className="col-md-4 d-flex gap-3 ">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/050/266/802/small_2x/portrait-of-happy-young-asian-businesswoman-looking-at-camera-arms-crossed-folded-smiling-woman-executive-manager-secretary-offering-professional-business-services-standing-in-office-free-photo.jpg" height={100} width={100} style={{ borderRadius: '50px', border: '1px solid orangered' }} className='mt-2'></img>
                            <div>
                                <p>Far far away, behind the word<br /> mountains, far from the <br />countries Vokalia and<br /> Consonantia, there live the<br /> blind texts.</p>
                                <p>Sara Smith</p>
                                <p style={{ color: 'orangered' }}>Mother</p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex gap-3 ">
                            <img src="https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?cs=srgb&dl=pexels-teddyjmodel-2955376.jpg&fm=jpg" height={100} width={100} style={{ borderRadius: '50px', border: '1px solid orangered' }} className='mt-2'></img>
                            <div>
                                <p>Far far away, behind the word<br /> mountains, far from the <br />countries Vokalia and<br /> Consonantia, there live the<br /> blind texts.</p>
                                <p>Smith John</p>
                                <p style={{ color: 'orangered' }}>Father</p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex gap-3 ">
                            <img src="https://market-resized.envatousercontent.com/photodune.net/EVA/TRX/cd/5b/4b/f0/98/v1_E10/E109CFC6.jpg?auto=format&q=94&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&opacity=0.2&cf_fit=contain&w=590&h=917&s=88ec8e631230e6354d815c98ffc3ce4a152ce8f61c75d93da4c3df6aeaf9801b" height={100} width={100} style={{ borderRadius: '50px', border: '1px solid orangered' }} className='mt-2'></img>
                            <div>
                                <p>Far far away, behind the word<br /> mountains, far from the <br />countries Vokalia and<br /> Consonantia, there live the<br /> blind texts.</p>
                                <p>Zoya William</p>
                                <p style={{ color: 'orangered' }}>Mother</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-5 pt-5'>
                    <div className='col-md-3'>
                        <div className="image-container1">
                            <img src="https://oxfordlearning.com/wp-content/uploads/2025/03/AdobeStock_132869690-scaled.jpeg" alt="..." height={300}></img>
                            <div className="overlay-icons1">
                                <a href="https://www.instagram.com/kreevtech_solutions/?igsh=MXh3MWdmZ3hoMXQ3bQ%3D%3D#">
                                    <i class="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="image-container1">
                            <img src="https://t3.ftcdn.net/jpg/06/98/15/28/360_F_698152816_iofj0EaoJp6jjKsHkMSoAEawmbKg3at0.jpg" height={300} width={325} alt="..." />
                            <div className="overlay-icons1">
                                <a href="https://www.instagram.com/kreevtech_solutions/?igsh=MXh3MWdmZ3hoMXQ3bQ%3D%3D#">
                                    <i class="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="image-container1">
                            <img src="https://media.istockphoto.com/id/1470544060/photo/group-of-university-students-e-learning-on-laptop-at-campus.jpg?s=612x612&w=0&k=20&c=cwuT0WSg2xzQ0MhFzt2EbIL33IcS40-Mb3htuy9B0v0=" height={300} width={325}></img>
                            <div className="overlay-icons1">
                                <a href="https://www.instagram.com/kreevtech_solutions/?igsh=MXh3MWdmZ3hoMXQ3bQ%3D%3D#">
                                    <i class="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="image-container1">
                            <img src="https://thumbs.dreamstime.com/b/teenage-girl-writing-notes-library-study-table-using-laptop-computer-textbooks-education-learning-concentration-bookshelves-376447223.jpg" alt="..." height={300} width={297}></img>
                            <div className="overlay-icons1">
                                <a href="https://www.instagram.com/kreevtech_solutions/?igsh=MXh3MWdmZ3hoMXQ3bQ%3D%3D#">
                                    <i class="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
