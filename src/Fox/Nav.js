import './CSS/Nav.css';

export default function Nav() {
    return (
        <div className='main-one'>
            {/* Top Info Bar */}
            <div className="nb container-fluid py-2">
                <div className="row align-items-center text-center text-md-start">
                    {/* Logo */}
                    <div className="col-12 col-md-3 mb-2 mb-md-0">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_JXGwMpPe3v-Qx-jVzxo2MliXPDNVbco5A&s"
                            height="60px"
                            width="200px"
                            alt="company logo"
                            className="img-fluid"
                        />
                    </div>

                    {/* Email */}
                    <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
                        <i className="fa-solid fa-paper-plane me-2" style={{ color: 'orangered', fontSize: '20px' }}></i>
                        <p className="mb-0">
                            <b>Email</b><br />foxuniversity@org
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
                        <i className="fa-solid fa-phone me-2" style={{ color: 'orangered', fontSize: '20px' }}></i>
                        <p className="mb-0">
                            <b>Call</b><br />+91-8778204667
                        </p>
                    </div>

                    {/* Apply Button */}
                    <div className="col-12 col-md-3 text-center text-md-end">
                        <button className="btn btn-success apply-btn">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    {/* Brand (optional) */}
                    <a className="navbar-brand" href="/">Fox University</a>

                    {/* Toggler for mobile */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Collapsible Menu */}
                    <div className="collapse navbar-collapse" id="navMenu">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/About">About us</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Course">Courses</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Staff">Staff</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Blog">Blog</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Contact">Contact us</a></li>
                        </ul>

                        {/* Search Box */}
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
