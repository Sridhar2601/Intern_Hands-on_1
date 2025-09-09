import './CSS/Home.css';

export default function Blog() {
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
                    <h1>Blogs</h1>
                    <a href="/" style={{ color: 'black' }}>
                        Home <i className="fa-solid fa-greater-than" id="g"></i>
                    </a>
                    <a href="/Blog" style={{ paddingLeft: '20px', color: 'black' }}>
                        Blogs <i className="fa-solid fa-greater-than" id="g"></i>
                    </a>
                </div>
            </div>

            {/* Section Heading */}
            <div className="pt-5 text-center">
                <h1>Recent Blog</h1>
                <p className="mt-4">
                    Separated they live in. A small river named Duden flows by their place and supplies it with the <br />
                    necessary regelialia. It is a paradisematic country
                </p>
            </div>

            {/* Blog Grid */}
            <div className="container pt-5">
                <div className="row">
                    {[
                        "https://img.freepik.com/free-photo/designer-working-3d-model_23-2149371896.jpg?semt=ais_hybrid&w=740",
                        "https://oxfordlearning.com/wp-content/uploads/2025/03/AdobeStock_132869690-scaled.jpeg",
                        "https://thumbs.dreamstime.com/b/teenage-girl-writing-notes-library-study-table-using-laptop-computer-textbooks-education-learning-concentration-bookshelves-376447223.jpg",
                        "https://img.freepik.com/free-photo/designer-working-3d-model_23-2149371896.jpg?semt=ais_hybrid&w=740",
                        "https://oxfordlearning.com/wp-content/uploads/2025/03/AdobeStock_132869690-scaled.jpeg",
                        "https://thumbs.dreamstime.com/b/teenage-girl-writing-notes-library-study-table-using-laptop-computer-textbooks-education-learning-concentration-bookshelves-376447223.jpg",
                    ].map((img, i) => (
                        <div key={i} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div style={{ position: 'relative' }}>
                                <img src={img} className="img-fluid w-100" alt="blog" style={{ height: 'auto' }} />
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '0px',
                                        left: '0px',
                                        backgroundColor: 'blue',
                                        color: 'white',
                                        padding: '6px 10px',
                                        fontSize: '16px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <b>26</b>
                                    <br />Jan<br />2026
                                </div>
                            </div>
                            <div className="card-body p-3 text-start">
                                <h4 className="pt-2">Skills To Develop Your Child Memory</h4>
                                <p className="pt-2" style={{ fontSize: '16px' }}>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts.
                                </p>
                                <div className="d-flex justify-content-between align-items-center pt-2 flex-wrap">
                                    <a href="#" className="btn btn-dark mb-2" style={{ backgroundColor: 'orangered', borderRadius: '20px' }}>
                                        Read More
                                    </a>
                                    <div>
                                        <a href="#" className="card-link" style={{ color: 'orangered' }}>
                                            Admin
                                        </a>
                                        <a href="#" className="card-link" style={{ color: 'gray', marginLeft: '10px' }}>
                                            <i className="fa-solid fa-message"></i> 3
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
