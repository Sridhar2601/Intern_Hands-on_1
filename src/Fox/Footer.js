import './CSS/Home.css'
export default function Footer() {
    return (
        <div>
            <div style={{ backgroundColor: 'black', color: 'white' }}>
                <div className='container pt-5'>
                    <div className='row pt-5'>

                        {/* Contact Info */}
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                            <h3>Have a Questions?</h3>
                            <div className='d-flex gap-3 pt-4'>
                                <i className="fa-solid fa-location-dot mt-1"></i>
                                <p>203 Fake St. Mountain View, <br />San Francisco, California, USA</p>
                            </div>
                            <div className='d-flex gap-3'>
                                <i className="fa-solid fa-phone mt-1"></i>
                                <p>+91-9876543210</p>
                            </div>
                            <div className='d-flex gap-3'>
                                <i className="fa-solid fa-envelope mt-1"></i>
                                <p>info@gmail.com</p>
                            </div>
                        </div>

                        {/* Recent Blog */}
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                            <h3>Recent Blog</h3>
                            <div className='d-flex gap-3 pt-4'>
                                <img src="https://media.istockphoto.com/id/1470544060/photo/group-of-university-students-e-learning-on-laptop-at-campus.jpg?s=612x612&w=0&k=20&c=cwuT0WSg2xzQ0MhFzt2EbIL33IcS40-Mb3htuy9B0v0=" height={80} width={100} className="img-fluid rounded" alt="blog1" />
                                <div>
                                    <a href='#' className='head1'>Even the all-powerful Pointing has no control about</a>
                                    <div className='pt-2'>
                                        <a href='#' style={{ color: 'gray' }}>
                                            <i className="fa-solid fa-calendar-days pe-2"></i>Jan-26-2026
                                        </a>
                                    </div>
                                    <div className='pt-2'>
                                        <a href='#' style={{ color: 'gray' }}>
                                            <i className="fa-solid fa-user pe-2"></i>Admin
                                        </a>
                                        <a href='#' style={{ color: 'gray', paddingLeft: '10px' }}>
                                            <i className="fa-solid fa-message"></i>8
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-3 pt-4'>
                                <img src="https://t3.ftcdn.net/jpg/06/98/15/28/360_F_698152816_iofj0EaoJp6jjKsHkMSoAEawmbKg3at0.jpg" height={80} width={71} className="img-fluid rounded" alt="blog2" />
                                <div>
                                    <a href='#' className='head1'>Even the all-powerful Pointing has no control about</a>
                                    <div className='pt-2'>
                                        <a href='#' style={{ color: 'gray' }}>
                                            <i className="fa-solid fa-calendar-days pe-2"></i>Jan-26-2026
                                        </a>
                                    </div>
                                    <div className='pt-2'>
                                        <a href='#' style={{ color: 'gray' }}>
                                            <i className="fa-solid fa-user pe-2"></i>Admin
                                        </a>
                                        <a href='#' style={{ color: 'gray', paddingLeft: '10px' }}>
                                            <i className="fa-solid fa-message"></i>8
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Links */}
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                            <h3>Links</h3>
                            <div className='pt-4'>
                                <a href="/"><i className="fa-solid fa-arrow-right pe-2"></i>Home</a><br />
                                <a href="/About"><i className="fa-solid fa-arrow-right pe-2"></i>About us</a><br />
                                <a href="/Course"><i className="fa-solid fa-arrow-right pe-2"></i>Course</a><br />
                                <a href="/Staff"><i className="fa-solid fa-arrow-right pe-2"></i>Staffs</a><br />
                                <a href="/Contact"><i className="fa-solid fa-arrow-right pe-2"></i>Contact</a>
                            </div>
                        </div>

                        {/* Subscribe & Social */}
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                            <h3>Subscribe Us!</h3>
                            <div className='pt-4'>
                                <input type='email' placeholder='Enter Email Address'
                                    className='place form-control text-center'
                                    style={{ backgroundColor: 'gray', color: 'white', height: '50px' }} />
                                <div className='pt-3'>
                                    <input type='button' value='Subscribe'
                                        className='sub1 btn btn-warning w-100' />
                                </div>
                            </div>
                            <div className='pt-4'>
                                <h3>Connect With Us</h3>
                                <div className='d-flex pt-3 gap-3'>
                                    <i className="fa-brands fa-instagram" id='icon'></i>
                                    <i className="fab fa-facebook-f" id='icon'></i>
                                    <i className="fab fa-twitter" id='icon'></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='pt-4 pb-3'>
                    <p className="text-center mb-0">
                        Copyright ©2025 All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}
