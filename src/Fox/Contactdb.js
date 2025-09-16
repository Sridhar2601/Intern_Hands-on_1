// import React, { useEffect,useState } from 'react';
// import axios, { formToJSON } from 'axios'
// export default function Contactdb() {

//     const [data, setdata] = useState({
//         Name: "",
//         Email: "",
//         Subject: "",
//         Message: ""
//     });

//     const form = (e) => {
//         setdata({
//             ...data,
//             [e.target.name]: e.target.value
//         });
//     };

//     const submit = (e) => {
//         e.preventDefault();
//         axios.post("https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Contact", data)

//         setdata({
//             Name: "",
//             Email: "",
//             Subject: "",
//             Message: ""
//         })
//     }

//     return (
//         <div>
//             <form onSubmit={submit}>
//                 <input type='text' placeholder='Your Name' name="Name" value={data.Name} onChange={form} style={{ width: '500px', height: '50px' }}></input><br /><br />
//                 <input type='email' placeholder='Your Email' name="Email" value={data.Email} onChange={form} style={{ width: '500px', height: '50px' }}></input><br /><br />
//                 <input type='text' placeholder='Subject' name="Subject" value={data.Subject} onChange={form} style={{ width: '500px', height: '50px' }}></input><br /><br />
//                 <textarea type='text' placeholder='Message' name="Message" value={data.Message} onChange={form} style={{ width: '500px', height: '175px' }}></textarea><br /><br />
//                 <button type="submit" value="submit" style={{ borderRadius: "50px",height:'50px',width:'200px',backgroundColor:'orangered',color:'white',border:'none'}}>Send Message</button>
//             </form>
//             </div>
//     )
// }


import React from 'react';
export default function Contactdb() {
    return (
        <div>
            <form action="insert.php" method="post">
                <input type='text' placeholder='Your Name' name="Name"  style={{ width: '500px', height: '50px' }}></input><br /><br />
                <input type='email' placeholder='Your Email' name="Email"  style={{ width: '500px', height: '50px' }}></input><br /><br />
                <input type='text' placeholder='Subject' name="Subject" style={{ width: '500px', height: '50px' }}></input><br /><br />
                <textarea type='text' placeholder='Message' name="Message" style={{ width: '500px', height: '175px' }}></textarea><br /><br />
                <button type="submit" value="submit" style={{ borderRadius: "50px",height:'50px',width:'200px',backgroundColor:'orangered',color:'white',border:'none'}}>Send Message</button>
            </form>
        </div>
    )
}