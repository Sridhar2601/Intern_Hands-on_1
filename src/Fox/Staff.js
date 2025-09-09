import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/Home.css";

export default function Staff() {
  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    axios
      .get("https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Staff")
      .then((res) => setStaffData(res.data))
      .catch((err) => console.error("Error fetching staff data:", err));
  }, []);

  const Delete = (id) => {
    if (window.confirm("Are you sure you want to delete this staff member?")) {
      axios
        .delete(`https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Staff/${id}`)
        .then(() => {
          setStaffData((prev) => prev.filter((staff) => staff.id !== id));
        })
        .catch((err) => console.error("Error deleting staff:", err));
    }
  };

  return (
    <div>
      {/* Hero section */}
      <div style={{ position: "relative", height: "50vh", overflow: "hidden" }}>
        <div
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1470544060/photo/group-of-university-students-e-learning-on-laptop-at-campus.jpg?s=612x612&w=0&k=20&c=cwuT0WSg2xzQ0MhFzt2EbIL33IcS40-Mb3htuy9B0v0=")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: 0.3,
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            paddingTop: "90px",
          }}
        >
          <h1>Certified Teachers</h1>
          <a href="/" style={{ color: "black" }}>
            Home <i className="fa-solid fa-greater-than" id="g"></i>
          </a>
          <a href="/Staff" style={{ paddingLeft: "20px", color: "black" }}>
            Staffs <i className="fa-solid fa-greater-than" id="g"></i>
          </a>
        </div>
      </div>

      {/* Title section */}
      <div className="pt-5" style={{ textAlign: "center" }}>
        <h1>Certified Teachers</h1>
        <p className="mt-4">
          Separated they live in. A small river named Duden flows by their place
          and supplies it with the <br />
          necessary regelialia. It is a paradisematic country
        </p>
      </div>

      {/* Dynamic Staff Cards */}
      <div className="row ps-3 pe-3 mb-5 pb-5">
        {staffData.length > 0 ? (
          staffData.map((staff) => (
            <div className="col-md-3 mb-4" key={staff.id}>
              <div
                className="teacher"
                style={{ width: "18rem", position: "relative", overflow: "hidden" }}
              >
                <div className="image-container">
                  <img
                    src={staff.image}
                    className="card-img-top"
                    alt={staff.name}
                    height={390}
                  />
                  <div className="overlay-icons">
                    <a href={staff.instagram || "#"}>
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                </div>
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h4 className="h pt-2">{staff.name}</h4>
                  <p style={{ color: "orangered" }}>{staff.role}</p>
                  <p style={{ fontSize: "18px" }}>{staff.description}</p>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => Delete(staff.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>Loading staff data...</p>
        )}
      </div>
    </div>
  );
}
