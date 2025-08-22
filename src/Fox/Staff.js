import './CSS/Home.css'
export default function Staff() {
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
                        <h1>Certified Teachers</h1>
                        <a href="/" style={{color:'black'}}>Home<i class="fa-solid fa-greater-than" id='g'></i></a>
                        <a href='/Staff' style={{paddingLeft:'20px',color:'black'}}>Staffs<i class="fa-solid fa-greater-than" id='g'></i></a>
                    </div>
            </div>
            <div className='pt-5' style={{ textAlign: 'center' }}>
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
    )
}