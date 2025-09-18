import './CSS/Home.css'
export default function About() {
    return (
        <div>
            <div style={{ position: 'relative', height: '50vh', overflow: 'hidden' }}>
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
                        zIndex: 1
                    }}></div>
                    <div style={{ position: 'relative', zIndex: 1,textAlign:'center',paddingTop:'90px'}}>
                        <h1>About Us</h1>
                        <a href="/" style={{color:'black'}}>Home<i class="fa-solid fa-greater-than" id='g'></i></a>
                        <a href='/About' style={{paddingLeft:'20px',color:'black'}}>About Us<i class="fa-solid fa-greater-than" id='g'></i></a>
                    </div>
            </div>
            <div class="container d-flex">
                <div className='mt-5 pe-5'>
                    <h2>Fox University Stablished Since 1960</h2>
                    <p className="pt-3">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their</p>
                </div>
                <img src="https://t3.ftcdn.net/jpg/06/98/15/28/360_F_698152816_iofj0EaoJp6jjKsHkMSoAEawmbKg3at0.jpg"
                    alt="Illustration" style={{ height: '600px', width: '500px' }}></img>
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