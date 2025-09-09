import './CSS/Home.css'

export default function About() {
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
            zIndex: 1
          }}
        ></div>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '90px' }}>
          <h1>About Us</h1>
          <a href="/" style={{ color: 'black' }}>
            Home <i className="fa-solid fa-greater-than" id="g"></i>
          </a>
          <a href="/About" style={{ paddingLeft: '20px', color: 'black' }}>
            About Us <i className="fa-solid fa-greater-than" id="g"></i>
          </a>
        </div>
      </div>

      {/* About Text + Image */}
      <div className="container row mt-5 align-items-center">
        <div className="col-12 col-md-6 pe-md-5">
          <h2>Fox University Established Since 1960</h2>
          <p className="pt-3">
            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would
            have been rewritten a thousand times and everything that was left from its origin would be the word.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is
            a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would
            have been rewritten a thousand times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its own, safe country...
          </p>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img
            src="https://t3.ftcdn.net/jpg/06/98/15/28/360_F_698152816_iofj0EaoJp6jjKsHkMSoAEawmbKg3at0.jpg"
            alt="Illustration"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Video + Text Section */}
      <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', marginTop: '60px' }}>
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
          }}
        ></div>

        <div className="container h-100" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row mt-5 align-items-center">
            <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/hFp88NcLVvM?si=EE9QOazKQQIVnN4s"
                className="rounded"
                title="Fox University"
              ></iframe>
            </div>
            <div className="col-12 col-lg-6 ps-lg-5">
              <h1>Fox University</h1>
              <p>
                Separated they live in. A small river named Duden flows by their place and supplies it with the
                necessary regelialia. It is a paradisematic country.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="row text-center mt-5">
            <div className="col-6 col-md-3">
              <h1>18</h1>
              <p>Certified Teachers</p>
            </div>
            <div className="col-6 col-md-3">
              <h1>401</h1>
              <p>Students</p>
            </div>
            <div className="col-6 col-md-3">
              <h1>30</h1>
              <p>Courses</p>
            </div>
            <div className="col-6 col-md-3">
              <h1>50</h1>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mt-5">
        <div className="text-center">
          <h1>Student Says About Us</h1>
          <p className="mt-3">
            Separated they live in. A small river named Duden flows by their place and supplies it with the
            necessary regelialia. It is a paradisematic country
          </p>
        </div>

        <div className="row mt-5 g-4">
          {[
            {
              img: "https://img.lovepik.com/free-png/20211215/lovepik-business-woman-likes-png-image_401639301_wh1200.png",
              name: "Rina John",
              role: "Mother"
            },
            {
              img: "https://img.freepik.com/free-photo/designer-working-3d-model_23-2149371896.jpg?semt=ais_hybrid&w=740",
              name: "Mark Smith",
              role: "Father"
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUGANJj7-s4nCF4HqSE1UZhFNyAEbU0LKVg&s",
              name: "Bianca Wilson",
              role: "Father"
            },
            {
              img: "https://static.vecteezy.com/system/resources/thumbnails/050/266/802/small_2x/portrait-of-happy-young-asian-businesswoman.jpg",
              name: "Sara Smith",
              role: "Mother"
            },
            {
              img: "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg",
              name: "Smith John",
              role: "Father"
            },
            {
              img: "https://market-resized.envatousercontent.com/photodune.net/EVA/TRX/cd/5b/4b/f0/98/v1_E10/E109CFC6.jpg",
              name: "Zoya William",
              role: "Mother"
            }
          ].map((student, i) => (
            <div className="col-12 col-md-4 d-flex gap-3" key={i}>
              <img
                src={student.img}
                alt={student.name}
                className="rounded-circle border border-danger"
                style={{ height: "100px", width: "100px", objectFit: "cover" }}
              />
              <div>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                  live the blind texts.
                </p>
                <p>{student.name}</p>
                <p style={{ color: "orangered" }}>{student.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="container mt-5 row g-4">
        {[
          "https://oxfordlearning.com/wp-content/uploads/2025/03/AdobeStock_132869690-scaled.jpeg",
          "https://t3.ftcdn.net/jpg/06/98/15/28/360_F_698152816_iofj0EaoJp6jjKsHkMSoAEawmbKg3at0.jpg",
          "https://media.istockphoto.com/id/1470544060/photo/group-of-university-students-e-learning-on-laptop-at-campus.jpg",
          "https://thumbs.dreamstime.com/b/teenage-girl-writing-notes-library-study-table-using-laptop.jpg"
        ].map((img, i) => (
          <div className="col-6 col-md-3" key={i}>
            <div className="image-container1">
              <img src={img} alt="Gallery" className="img-fluid rounded" />
              <div className="overlay-icons1">
                <a href="https://www.instagram.com/kreevtech_solutions/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
