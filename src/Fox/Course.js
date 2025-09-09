import './CSS/Home.css';

export default function Course() {
    return (
        <div>
            {/* Hero Section */}
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
                        zIndex: 1,
                    }}
                ></div>
                <div
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        textAlign: 'center',
                        paddingTop: '90px',
                    }}
                >
                    <h1>Courses</h1>
                    <a href="/" style={{ color: 'black' }}>
                        Home <i className="fa-solid fa-greater-than" id="g"></i>
                    </a>
                    <a
                        href="/Course"
                        style={{ paddingLeft: '20px', color: 'black' }}
                    >
                        Courses <i className="fa-solid fa-greater-than" id="g"></i>
                    </a>
                </div>
            </div>

            {/* Course Section */}
            <div className="pt-5 text-center">
                <h1>Our Courses</h1>
                <p className="mt-4">
                    Separated they live in. A small river named Duden flows by their place and supplies it with the <br /> necessary regelialia. It is a paradisematic country
                </p>
            </div>

            {/* Course Cards */}
            <div className="container mt-5">
                <div className="row">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/blog4.svg"
                                    className="card-img-top"
                                    alt="Course"
                                    height="180px"
                                />
                                <div className="card-body ps-3 text-start">
                                    <div className="d-flex flex-wrap gap-2 mt-3 small text-muted">
                                        <p className="mb-0">
                                            <i className="fa-solid fa-user" style={{ color: 'orangered' }}></i> MR.JOHN
                                        </p>
                                        <p className="mb-0">
                                            <i className="fa-solid fa-table-cells" style={{ color: 'orangered' }}></i> 10 SEATS
                                        </p>
                                        <p className="mb-0">
                                            <i className="fa-solid fa-calendar-days" style={{ color: 'orangered' }}></i> 4 YEARS
                                        </p>
                                    </div>
                                    <h5 className="card-title mt-2">Electric Engineering</h5>
                                    <p className="card-text mt-3">
                                        Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
                                    </p>
                                    <a
                                        href="#"
                                        className="btn btn-dark"
                                        style={{ backgroundColor: 'orangered', border: 'none' }}
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
