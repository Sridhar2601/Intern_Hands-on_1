// import './CSS/Nav.css'
// export default function Nav() {
//     return (
//         <div className='main-one'>
//             <div class="nb">
//                 <div> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_JXGwMpPe3v-Qx-jVzxo2MliXPDNVbco5A&s" height="60px"
//                     width="300px" alt="company logo"></img></div>
//                 <div className='d-flex'>
//                     <div style={{ alignContent: 'center' }}><i class="fa-solid fa-paper-plane" style={{ color: 'orangered' }}></i></div>
//                     <div className='mt-3'>
//                         <p className='ps-2'><b>Email</b><br />foxuniversity@org</p>
//                     </div>
//                 </div>
//                 <div className='d-flex'>
//                     <div style={{ alignContent: 'center' }}><i class="fa-solid fa-phone" style={{ color: 'orangered' }}></i></div>
//                     <div className='mt-3'>
//                         <p className='ps-2'><b>Call</b><br />Call Us : +91-9876543210</p>
//                     </div>
//                 </div>
//                 <div><button className='btn btn-success' style={{ backgroundColor: 'orangered',border:'none'}}>Apply Now</button></div>
//             </div>
//             <nav className='d-flex'>
//                 <div class="n container bg-dark p-3">
//                     <li> <a href="/">Home</a></li>
//                     <li> <a href="/About">About us</a></li>
//                     <li> <a href="/Course">Courses</a></li>
//                     <li> <a href="/Staff">Staff</a></li>
//                     <li> <a href="/Blog">Blog</a></li>
//                     <li> <a href="/Contact">Contact us</a></li>

//                     <form class="d-flex" role="search" style={{ paddingLeft: '340px' }}>
//                         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                         <button class="btn btn-dark" type="submit">Search</button>
//                     </form>
//                 </div>
//             </nav>
//         </div>
//     )
// }


import './CSS/Nav.css';

export default function Nav() {
    return (
        <div className="main-one">
            {/* Top Bar */}
            <div className="nb d-flex flex-wrap justify-content-between align-items-center p-2">
                {/* Logo */}
                <div>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_JXGwMpPe3v-Qx-jVzxo2MliXPDNVbco5A&s" 
                        height="60px"
                        width="200px" 
                        alt="company logo" 
                    />
                </div>

                {/* Email */}
                <div className="d-flex align-items-center me-3">
                    <i className="fa-solid fa-paper-plane me-2" style={{ color: 'orangered' }}></i>
                    <p className="mb-0">
                        <b>Email</b><br />foxuniversity@org
                    </p>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-center me-3">
                    <i className="fa-solid fa-phone me-2" style={{ color: 'orangered' }}></i>
                    <p className="mb-0">
                        <b>Call</b><br />+91-9876543210
                    </p>
                </div>

                {/* Button */}
                <div>
                    <button 
                        className="btn btn-success" 
                        style={{ backgroundColor: 'orangered', border: 'none' }}
                    >
                        Apply Now
                    </button>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    {/* Brand for mobile */}
                    <a className="navbar-brand d-lg-none" href="/">Fox University</a>

                    {/* Toggler button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/About">About us</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Course">Courses</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Staff">Staff</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Blog">Blog</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Contact">Contact us</a></li>
                        </ul>

                        {/* Search Form */}
                        <form className="d-flex mt-2 mt-lg-0" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
