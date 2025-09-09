import './CSS/Home.css'
import Quote from './Quote'

export default function Home() {
  return (
    <div>
      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://t3.ftcdn.net/jpg/06/98/15/28/360_F_698152816_iofj0EaoJp6jjKsHkMSoAEawmbKg3at0.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block text-start" style={{ top: '40%', left: '10%' }}>
              <h1 className="fs-2 fw-bold">University, college <br />School Education</h1>
              <p className="fw-semibold">A small river named Duden flows by their place and supplies it with <br /> the necessary regelialia</p>
              <div className="mt-3">
                <a href="/Contact" className="btn btn-dark" style={{ backgroundColor: 'orangered', border: 'none' }}>Contact Us</a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://t3.ftcdn.net/jpg/06/98/15/28/360_F_698152816_iofj0EaoJp6jjKsHkMSoAEawmbKg3at0.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block text-start" style={{ top: '40%', left: '10%' }}>
              <h1 className="fs-2 fw-bold">Education needs <br />Complete Solution</h1>
              <p className="fw-semibold">A small river named Duden flows by their place and supplies it with <br /> the necessary regelialia</p>
              <div className="mt-3">
                <a href="/Contact" className="btn btn-dark" style={{ backgroundColor: 'orangered', border: 'none' }}>Contact Us</a>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Four Boxes */}
      <div className="row text-center">
        <div className="col-12 col-md-6 col-lg-3 p-4 text-white" style={{ backgroundColor: 'orangered' }}>
          <i className="fa-solid fa-child fs-3"></i>
          <h5 className="mt-3">Certified Teachers</h5>
          <p>Even the all-powerful Pointing has no control about the blind texts...</p>
        </div>

        <div className="col-12 col-md-6 col-lg-3 p-4 text-white" style={{ backgroundColor: 'darkblue' }}>
          <i className="fa-solid fa-building-columns fs-3"></i>
          <h5 className="mt-3">Special Education</h5>
          <p>Even the all-powerful Pointing has no control about the blind texts...</p>
        </div>

        <div className="col-12 col-md-6 col-lg-3 p-4 text-white" style={{ backgroundColor: 'orangered' }}>
          <i className="fa-solid fa-book fs-3"></i>
          <h5 className="mt-3">Book & Library</h5>
          <p>Even the all-powerful Pointing has no control about the blind texts...</p>
        </div>

        <div className="col-12 col-md-6 col-lg-3 p-4 text-white" style={{ backgroundColor: 'darkblue' }}>
          <i className="fa-solid fa-medal fs-3"></i>
          <h5 className="mt-3">Sport Clubs</h5>
          <p>I'm well-versed in frontend technologies like React, HTML5, CSS3...</p>
        </div>
      </div>

      {/* What We Offer */}
      <div className="container mt-5 d-flex flex-column flex-md-row align-items-center">
        <div className="text-md-start text-center">
          <h1>What We Offer</h1>
          <p className="mt-3">On her way she met a copy. The copy warned the Little Blind Text...</p>

          <div className="row mt-4">
            <div className="col-6 d-flex">
              <i className="fa-solid fa-shield fs-2 text-danger"></i>
              <div className="ps-2">
                <h5>Safety First</h5>
                <p>Far far away, behind the word mountains...</p>
              </div>
            </div>

            <div className="col-6 d-flex">
              <i className="fa-solid fa-building-columns fs-2 text-danger"></i>
              <div className="ps-2">
                <h5>Regular Classes</h5>
                <p>Far far away, behind the word mountains...</p>
              </div>
            </div>
          </div>
        </div>

        <img
          src="https://media.istockphoto.com/id/1470544060/photo/group-of-university-students-e-learning-on-laptop-at-campus.jpg"
          className="img-fluid mt-4 mt-md-0 rounded"
          alt="Illustration"
        />
      </div>

      {/* ... Continue similar refactoring for Courses, Teachers, Blogs, Testimonials ... */}
      <Quote />
    </div>
  )
}
