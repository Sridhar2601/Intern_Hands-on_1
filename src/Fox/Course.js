import './CSS/Home.css'
export default function Course() {
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
                        <h1>Courses</h1>
                        <a href="/" style={{color:'black'}}>Home<i class="fa-solid fa-greater-than" id='g'></i></a>
                        <a href='/Course' style={{paddingLeft:'20px',color:'black'}}>Courses<i class="fa-solid fa-greater-than" id='g'></i></a>
                    </div>
            </div>
            <div className='pt-5' style={{ textAlign: 'center' }}>
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
    )
}