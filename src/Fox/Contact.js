import './CSS/Home.css';
import Contactdb from './Contactdb';

export default function Contact() {
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
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '90px' }}>
                    <h1>Contact Us</h1>
                    <a href="/" style={{ color: 'black' }}>
                        Home <i className="fa-solid fa-greater-than" id="g"></i>
                    </a>
                    <a href="/Contact" style={{ paddingLeft: '20px', color: 'black' }}>
                        Contact Us <i className="fa-solid fa-greater-than" id="g"></i>
                    </a>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className="container">
                <div className="row text-center pt-5">
                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                        <h3>Address</h3>
                        <p>
                            198 West 21th Street, Suite <br /> 721 New York NY 10016
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                        <h3>Contact Number</h3>
                        <p>+ 1235 2355 98</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                        <h3>Email Address</h3>
                        <p>info@yoursite.com</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                        <h3>Website</h3>
                        <p>yoursite.com</p>
                    </div>
                </div>

                {/* Map + Contact Form */}
                <div className="row pt-5">
                    <div className="col-sm-12 col-md-6 mb-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3178.8702430084304!2d77.59362853950365!3d11.187713999999577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1754240852356!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Contactdb />
                    </div>
                </div>
            </div>
        </div>
    );
}
