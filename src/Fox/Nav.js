import './CSS/Nav.css'
export default function Nav() {
    return (
        <div className='main-one'>
            <div class="nb">
                <div> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_JXGwMpPe3v-Qx-jVzxo2MliXPDNVbco5A&s" height="60px"
                    width="300px" alt="company logo"></img></div>
                <div className='d-flex'>
                    <div style={{ alignContent: 'center' }}><i class="fa-solid fa-paper-plane" style={{ color: 'orangered' }}></i></div>
                    <div className='mt-3'>
                        <p className='ps-2'><b>Email</b><br />foxuniversity@org</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <div style={{ alignContent: 'center' }}><i class="fa-solid fa-phone" style={{ color: 'orangered' }}></i></div>
                    <div className='mt-3'>
                        <p className='ps-2'><b>Call</b><br />Call Us : +91-9876543210</p>
                    </div>
                </div>
                <div><button className='btn btn-success' style={{ backgroundColor: 'orangered',border:'none'}}>Apply Now</button></div>
            </div>
            <nav className='d-flex'>
                <div class="n container bg-dark p-3">
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/About">About us</a></li>
                    <li> <a href="/Course">Courses</a></li>
                    <li> <a href="/Staff">Staff</a></li>
                    <li> <a href="/Blog">Blog</a></li>
                    <li> <a href="/Contact">Contact us</a></li>

                    <form class="d-flex" role="search" style={{ paddingLeft: '340px' }}>
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-dark" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}