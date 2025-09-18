import './CSS/Home.css'
export default function Footer(){
    return(
        <div>
            <div style={{ backgroundColor: 'black', color: 'white' }}>
                <div className='container pt-5'>
                    <div className='row pt-5'>
                        <div className='col-md-3'>
                            <h3>Have a Questions?</h3>
                            <div className='d-flex gap-3 pt-5'>
                                <div className='mt-1'>
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <p>	203 Fake St. Mountain View, <br />San Francisco, California, USA</p>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='mt-1'>
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <p className='pt-1'>+91-9876543210</p>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='mt-1'>
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <p className='pt-1'>info@gmail.com</p>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <h3>Recent Blog</h3>
                            <div className='d-flex gap-3 pt-5'>
                                <img src="https://media.istockphoto.com/id/1470544060/photo/group-of-university-students-e-learning-on-laptop-at-campus.jpg?s=612x612&w=0&k=20&c=cwuT0WSg2xzQ0MhFzt2EbIL33IcS40-Mb3htuy9B0v0=" height={80} width={150}></img>
                                <div>
                                    <a href='#' class='head1'>Even the all-powerful Pointing has no control about</a><br />
                                    <div className='pt-3'>
                                        <a href='#' style={{ color: 'gray' }}><i class="fa-solid fa-calendar-days" style={{ paddingRight: '5px' }}></i>Jan-26-2026</a><br />
                                    </div>
                                    <div className='pt-3'>
                                        <a href='#' style={{ color: 'gray' }}><i class="fa-solid fa-user" style={{ paddingRight: '5px' }}></i>Admin</a>
                                        <a href='#' style={{ color: 'gray', paddingLeft: '10px' }}><i class="fa-solid fa-message"></i>8</a>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-3 pt-5'>
                                <img src="https://t3.ftcdn.net/jpg/06/98/15/28/360_F_698152816_iofj0EaoJp6jjKsHkMSoAEawmbKg3at0.jpg" height={80} width={71}></img>
                                <div>
                                    <a href='#' class='head1'>Even the all-powerful Pointing has no control about</a><br />
                                    <div className='pt-3'>
                                        <a href='#' style={{ color: 'gray' }}><i class="fa-solid fa-calendar-days" style={{ paddingRight: '5px' }}></i>Jan-26-2026</a><br />
                                    </div>
                                    <div className='pt-3'>
                                        <a href='#' style={{ color: 'gray' }}><i class="fa-solid fa-user" style={{ paddingRight: '5px' }}></i>Admin</a>
                                        <a href='#' style={{ color: 'gray', paddingLeft: '10px' }}><i class="fa-solid fa-message"></i>8</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3' style={{ paddingLeft: '50px' }}>
                            <h3>Links</h3>
                            <div className='pt-5'>
                                <a href="/"><i class="fa-solid fa-arrow-right" style={{ paddingRight: '5px' }}></i>Home</a><br />
                                <a href="/About"><i class="fa-solid fa-arrow-right" style={{ paddingRight: '5px' }}></i>About us</a><br />
                                <a href="/Course"><i class="fa-solid fa-arrow-right" style={{ paddingRight: '5px' }}></i>Course</a><br />
                                <a href="/Staff"><i class="fa-solid fa-arrow-right" style={{ paddingRight: '5px' }}></i>Staffs</a><br />
                                <a href="/Contact"><i class="fa-solid fa-arrow-right" style={{ paddingRight: '5px' }}></i>Contact</a>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div>
                                <h3>Subscribe Us!</h3>
                                <div className='pt-5'>
                                    <input type='email' placeholder='Enter Email Address' className='place' style={{ backgroundColor: 'gray', color: 'white', height: '50px', width: '250px', textAlign: 'center' }}></input>
                                    <div className='sub pt-3'>
                                        <input type='button' placeholder='Subscribe' value='Subscribe' className='sub1' style={{ height: '50px', width: '250px' }} />
                                    </div>
                                </div>
                            </div>

                            <div className='pt-5 mt-4'>
                                <h3>Connect With Us</h3>
                                <div className='d-flex pt-3 gap-3'>
                                    <i class="fa-brands fa-instagram" id='icon'></i>
                                    <i class="fab fa-facebook-f" id='icon'></i>
                                    <i class="fab fa-twitter" id='icon'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-5 pb-3'>
                    <p style={{textAlign:'center'}}>
                        Copyright ©2025 All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}