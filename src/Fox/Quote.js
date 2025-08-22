import React, { useState } from 'react';
import axios from 'axios'
import './CSS/Quote.css'
export default function Quote(){

    const [data, setdata] = useState({
        FirstName: "",
        LastName: "",
        Course: "",
        Phone: "",
        Message:""

    });

    const form = (e) => {
        setdata(
            {
                ...data,
                [e.target.name]: e.target.value
            }
        );
    };


    const submit = (e) => {
        e.preventDefault();

        axios.post("https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Fox", data)

        setdata({ FirstName: "", LastName: "", Course: "", Phone: "",Message:""});
    };

    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
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


            <div className="container h-100" style={{ position: 'relative', zIndex: 2 }}>
                <form onSubmit={submit}>
                    <div className="row h-50 mt-5 pt-5">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                            <h1>Request A Quote</h1>
                            <p className='pt-3'>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.
                            </p>
                            <div className="row" data-aos="flip-left">
                                <div className="d-flex gap-5" style={{ textAlign: 'left' }}>
                                    <div className="col-md-4">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            placeholder="eg. John"
                                            required
                                            style={{ width: '250px' }}
                                            name="FirstName"
                                            value={data.FirstName}
                                            onChange={form}
                                            id="f"
                                        />
                                    </div>
                                    <div className="col-md-4 ps-5">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="eg. Smith"
                                            required
                                            style={{ width: '250px' }}
                                            name="LastName"
                                            value={data.LastName}
                                            onChange={form}
                                            id="f"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className="d-flex gap-5" style={{ textAlign: 'left' }}>
                                <div className='col-md-4'>
                                    <label>Choose a course</label><br />
                                    <select name="Course" value={data.Course} onChange={form} id="f" style={{ width: '250px' }}>
                                        <option value="" disabled>select</option>
                                        <option value="HTML">HTML</option>
                                        <option value="CSS">CSS</option>
                                        <option value="JS">JS</option>
                                        <option value="Python">Python</option>
                                    </select>
                                </div>
                                <div className='col-md-4 ps-5'>
                                    <label>Phone</label>
                                    <input type="number" name="Phone" value={data.Phone} onChange={form} placeholder="Eg. 9876543210" required id="f" style={{ width: '250px' }}></input>
                                </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="d-flex gap-5" style={{ textAlign: 'left' }}>
                                    <div className="col-md-4">
                                        <label>Message</label>
                                        <input
                                            type="text"
                                            placeholder="Message"
                                            required
                                            style={{ width: '250px' }}
                                            name="Message"
                                            value={data.Message}
                                            onChange={form}
                                            id="f"
                                        />
                                    </div>
                                    <div className="col-md-4 ps-5 pt-2 ms-4">
                                        <button type="submit" value="submit" style={{ borderRadius: "50px",padding:'10px',width:'200px',backgroundColor:'orangered',color:'white'}}>Request For Quote</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
