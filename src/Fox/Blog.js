import './CSS/Home.css'
export default function Blog() {
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
                        <h1>Blogs</h1>
                        <a href="/" style={{color:'black'}}>Home<i class="fa-solid fa-greater-than" id='g'></i></a>
                        <a href='/Blog' style={{paddingLeft:'20px',color:'black'}}>Blogs<i class="fa-solid fa-greater-than" id='g'></i></a>
                    </div>
            </div>
            <div className='pt-5' style={{ textAlign: 'center' }}>
                <h1>Recent Blog</h1>
                <p className='mt-4'>Separated they live in. A small river named Duden flows by their place and supplies it with the<br /> necessary regelialia. It is a paradisematic country</p>
            </div>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div style={{ position: "relative" }}>
                            <img src="https://img.freepik.com/free-photo/designer-working-3d-model_23-2149371896.jpg?semt=ais_hybrid&w=740" class="card-img-top" alt="..." height={300}></img>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "0px",
                                    left: "0px",
                                    backgroundColor: "blue",
                                    color: "white",
                                    padding: "4px 8px",
                                    fontSize: "18px",
                                    textAlign: 'center'
                                }}><b>26</b><br />Jan<br />2026
                            </div>
                        </div>
                        <div class="card-body p-3" style={{ textAlign: 'left' }}>
                            <h4 className='head pt-2'>Skills To Develop Your Child Memory</h4>
                            <p className='pt-2' style={{ fontSize: '18px' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className='d-flex pt-2'>
                                <div>
                                    <a href="#" class="btn btn-dark" style={{ backgroundColor: 'orangered', borderRadius: '20px' }}>Read More</a>
                                    <a href="#" class="card-link" style={{ color: 'orangered', paddingLeft: '110px' }}>Admin</a>
                                    <a href="#" class="card-link" style={{ color: 'gray', paddingLeft: '20px' }}><i class="fa-solid fa-message"></i>3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div style={{ position: "relative" }}>
                            <img src="https://oxfordlearning.com/wp-content/uploads/2025/03/AdobeStock_132869690-scaled.jpeg" class="card-img-top" alt="..." height={300}></img>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "0px",
                                    left: "0px",
                                    backgroundColor: "blue",
                                    color: "white",
                                    padding: "4px 8px",
                                    fontSize: "18px",
                                    textAlign: 'center'
                                }}><b>26</b><br />Jan<br />2026
                            </div>
                        </div>
                        <div class="card-body p-3" style={{ textAlign: 'left' }}>
                            <h4 className='head pt-2'>Skills To Develop Your Child Memory</h4>
                            <p className='pt-2' style={{ fontSize: '18px' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className='d-flex pt-2'>
                                <div>
                                    <a href="#" class="btn btn-dark" style={{ backgroundColor: 'orangered', borderRadius: '20px' }}>Read More</a>
                                    <a href="#" class="card-link" style={{ color: 'orangered', paddingLeft: '110px' }}>Admin</a>
                                    <a href="#" class="card-link" style={{ color: 'gray', paddingLeft: '20px' }}><i class="fa-solid fa-message"></i>3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div style={{ position: "relative" }}>
                            <img src="https://thumbs.dreamstime.com/b/teenage-girl-writing-notes-library-study-table-using-laptop-computer-textbooks-education-learning-concentration-bookshelves-376447223.jpg" class="card-img-top" alt="..." height={300}></img>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "0px",
                                    left: "0px",
                                    backgroundColor: "blue",
                                    color: "white",
                                    padding: "4px 8px",
                                    fontSize: "18px",
                                    textAlign: 'center'
                                }}><b>26</b><br />Jan<br />2026
                            </div>
                        </div>
                        <div class="card-body p-3" style={{ textAlign: 'left' }}>
                            <h4 className='head pt-2'>Skills To Develop Your Child Memory</h4>
                            <p className='pt-2' style={{ fontSize: '18px' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className='d-flex pt-2'>
                                <div>
                                    <a href="#" class="btn btn-dark" style={{ backgroundColor: 'orangered', borderRadius: '20px' }}>Read More</a>
                                    <a href="#" class="card-link" style={{ color: 'orangered', paddingLeft: '110px' }}>Admin</a>
                                    <a href="#" class="card-link" style={{ color: 'gray', paddingLeft: '20px' }}><i class="fa-solid fa-message"></i>3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row pt-5 pb-5'>
                    <div className='col-md-4'>
                        <div style={{ position: "relative" }}>
                            <img src="https://img.freepik.com/free-photo/designer-working-3d-model_23-2149371896.jpg?semt=ais_hybrid&w=740" class="card-img-top" alt="..." height={300}></img>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "0px",
                                    left: "0px",
                                    backgroundColor: "blue",
                                    color: "white",
                                    padding: "4px 8px",
                                    fontSize: "18px",
                                    textAlign: 'center'
                                }}><b>26</b><br />Jan<br />2026
                            </div>
                        </div>
                        <div class="card-body p-3" style={{ textAlign: 'left' }}>
                            <h4 className='head pt-2'>Skills To Develop Your Child Memory</h4>
                            <p className='pt-2' style={{ fontSize: '18px' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className='d-flex pt-2'>
                                <div>
                                    <a href="#" class="btn btn-dark" style={{ backgroundColor: 'orangered', borderRadius: '20px' }}>Read More</a>
                                    <a href="#" class="card-link" style={{ color: 'orangered', paddingLeft: '110px' }}>Admin</a>
                                    <a href="#" class="card-link" style={{ color: 'gray', paddingLeft: '20px' }}><i class="fa-solid fa-message"></i>3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div style={{ position: "relative" }}>
                            <img src="https://oxfordlearning.com/wp-content/uploads/2025/03/AdobeStock_132869690-scaled.jpeg" class="card-img-top" alt="..." height={300}></img>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "0px",
                                    left: "0px",
                                    backgroundColor: "blue",
                                    color: "white",
                                    padding: "4px 8px",
                                    fontSize: "18px",
                                    textAlign: 'center'
                                }}><b>26</b><br />Jan<br />2026
                            </div>
                        </div>
                        <div class="card-body p-3" style={{ textAlign: 'left' }}>
                            <h4 className='head pt-2'>Skills To Develop Your Child Memory</h4>
                            <p className='pt-2' style={{ fontSize: '18px' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className='d-flex pt-2'>
                                <div>
                                    <a href="#" class="btn btn-dark" style={{ backgroundColor: 'orangered', borderRadius: '20px' }}>Read More</a>
                                    <a href="#" class="card-link" style={{ color: 'orangered', paddingLeft: '110px' }}>Admin</a>
                                    <a href="#" class="card-link" style={{ color: 'gray', paddingLeft: '20px' }}><i class="fa-solid fa-message"></i>3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div style={{ position: "relative" }}>
                            <img src="https://thumbs.dreamstime.com/b/teenage-girl-writing-notes-library-study-table-using-laptop-computer-textbooks-education-learning-concentration-bookshelves-376447223.jpg" class="card-img-top" alt="..." height={300}></img>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "0px",
                                    left: "0px",
                                    backgroundColor: "blue",
                                    color: "white",
                                    padding: "4px 8px",
                                    fontSize: "18px",
                                    textAlign: 'center'
                                }}><b>26</b><br />Jan<br />2026
                            </div>
                        </div>
                        <div class="card-body p-3" style={{ textAlign: 'left' }}>
                            <h4 className='head pt-2'>Skills To Develop Your Child Memory</h4>
                            <p className='pt-2' style={{ fontSize: '18px' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className='d-flex pt-2'>
                                <div>
                                    <a href="#" class="btn btn-dark" style={{ backgroundColor: 'orangered', borderRadius: '20px' }}>Read More</a>
                                    <a href="#" class="card-link" style={{ color: 'orangered', paddingLeft: '110px' }}>Admin</a>
                                    <a href="#" class="card-link" style={{ color: 'gray', paddingLeft: '20px' }}><i class="fa-solid fa-message"></i>3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}