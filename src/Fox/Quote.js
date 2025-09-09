import React, { useState } from 'react';
import axios from 'axios';
import './CSS/Quote.css';

export default function Quote() {
  const [data, setdata] = useState({
    FirstName: "",
    LastName: "",
    Course: "",
    Phone: "",
    Message: ""
  });

  const form = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    axios.post("https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Fox", data);
    setdata({ FirstName: "", LastName: "", Course: "", Phone: "", Message: "" });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background image */}
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

      {/* Form */}
      <div className="container h-100" style={{ position: 'relative', zIndex: 2 }}>
        <form onSubmit={submit} className="py-5">
          <div className="row justify-content-end">
            <div className="col-lg-6 col-md-8 col-12 bg-white p-4 rounded shadow">
              <h1>Request A Quote</h1>
              <p className="pt-2">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts.
              </p>

              <div className="row g-3 mt-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. John"
                    required
                    name="FirstName"
                    value={data.FirstName}
                    onChange={form}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. Smith"
                    required
                    name="LastName"
                    value={data.LastName}
                    onChange={form}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Choose a course</label>
                  <select
                    className="form-select"
                    name="Course"
                    value={data.Course}
                    onChange={form}
                    required
                  >
                    <option value="" disabled>Select</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JS">JS</option>
                    <option value="Python">Python</option>
                  </select>
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Eg. 9876543210"
                    required
                    name="Phone"
                    value={data.Phone}
                    onChange={form}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Message"
                    required
                    name="Message"
                    value={data.Message}
                    onChange={form}
                  />
                </div>

                <div className="col-12 text-center mt-3">
                  <button
                    type="submit"
                    className="btn"
                    style={{ borderRadius: "50px", padding: '10px 20px', backgroundColor: 'orangered', color: 'white' }}
                  >
                    Request For Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
