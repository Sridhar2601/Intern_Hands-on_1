import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Contactget() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Contact")
            .then(res => setUserData(res.data));
    }, []);

    const Delete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
        axios.delete(`https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Contact/${id}`)
            .then(() => {
                setUserData(prevData => prevData.filter(user => user.id !== id));
            })
    }
};


    return (
        <div style={{ padding: '20px' }}>
            <center>
                <h2 className='pb-4'>Contact Details</h2>
                {userData.length > 0 ? (
                    <table border="1" cellPadding="10" style={{ width: '80%', backgroundColor: 'white', boxShadow: '0 0 10px black' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'green', color: 'white' }}>
                                <th style={{ border: '2px solid black' }}>S.No</th>
                                <th style={{ border: '2px solid black' }}>Name</th>
                                <th style={{ border: '2px solid black' }}>Email</th>
                                <th style={{ border: '2px solid black' }}>Subject</th>
                                <th style={{ border: '2px solid black' }}>Message</th>
                                <th style={{ border: '2px solid black' }}>Update</th>
                                <th style={{ border: '2px solid black' }}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user, index) => (
                                <tr key={user.id} style={{ textAlign: 'left' }}>
                                    <td style={{ border: '2px solid black' }}>{index + 1}</td>
                                    <td style={{ border: '2px solid black' }}>{user.Name}</td>
                                    <td style={{ border: '2px solid black' }}>{user.Email}</td>
                                    <td style={{ border: '2px solid black' }}>{user.Subject}</td>
                                    <td style={{ border: '2px solid black' }}>{user.Message}</td>
                                    <td style={{ border: '2px solid black' }}><input type='button' className='btn btn-warning' value='Update'></input></td>
                                    <td style={{ border: '2px solid black' }}><input type='button' className='btn btn-danger' value='Delete' onClick={() => Delete(user.id)}></input></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Loading data...</p>
                )}
            </center>
        </div>
    );
}


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Contactget() {
//     const [userData, setUserData] = useState([]);
//     const [editingId, setEditingId] = useState(null);
//     const [editFormData, setEditFormData] = useState({
//         Name: '',
//         Email: '',
//         Subject: '',
//         Message: ''
//     });

//     useEffect(() => {
//         axios.get("https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Contact")
//             .then(res => setUserData(res.data));
//     }, []);

//     const Delete = (id) => {
//         if (window.confirm("Are you sure you want to delete this contact?")) {
//             axios.delete(`https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Contact/${id}`)
//                 .then(() => {
//                     setUserData(prevData => prevData.filter(user => user.id !== id));
//                 });
//         }
//     };

//     const handleEditChange = (e) => {
//         setEditFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//     };

//     const handleUpdateSave = (id) => {
//         axios.put(`https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Contact/${id}`, editFormData)
//             .then(res => {
//                 setUserData(prevData => prevData.map(user => user.id === id ? res.data : user));
//                 setEditingId(null);
//             });
//     };

//     return (
//         <div style={{ padding: '20px' }}>
//             <center>
//                 <h2 className='pb-4'>Contact Details</h2>
//                 {userData.length > 0 ? (
//                     <table border="1" cellPadding="10" style={{ width: '80%', backgroundColor: 'white', boxShadow: '0 0 10px black' }}>
//                         <thead>
//                             <tr style={{ backgroundColor: 'green', color: 'white' }}>
//                                 <th style={{ border: '2px solid black' }}>S.No</th>
//                                 <th style={{ border: '2px solid black' }}>Name</th>
//                                 <th style={{ border: '2px solid black' }}>Email</th>
//                                 <th style={{ border: '2px solid black' }}>Subject</th>
//                                 <th style={{ border: '2px solid black' }}>Message</th>
//                                 <th style={{ border: '2px solid black' }}>Update</th>
//                                 <th style={{ border: '2px solid black' }}>Delete</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {userData.map((user, index) => (
//                                 <tr key={user.id} style={{ textAlign: 'left' }}>
//                                     <td style={{ border: '2px solid black' }}>{index + 1}</td>
//                                     {editingId === user.id ? (
//                                         <>
//                                             <td style={{ border: '2px solid black' }}>
//                                                 <input name="Name" value={editFormData.Name} onChange={handleEditChange} />
//                                             </td>
//                                             <td style={{ border: '2px solid black' }}>
//                                                 <input name="Email" value={editFormData.Email} onChange={handleEditChange} />
//                                             </td>
//                                             <td style={{ border: '2px solid black' }}>
//                                                 <input name="Subject" value={editFormData.Subject} onChange={handleEditChange} />
//                                             </td>
//                                             <td style={{ border: '2px solid black' }}>
//                                                 <input name="Message" value={editFormData.Message} onChange={handleEditChange} />
//                                             </td>
//                                             <td colSpan="2" style={{ border: '2px solid black' }}>
//                                                 <input
//                                                     type='button'
//                                                     className='btn btn-success'
//                                                     value='Save'
//                                                     onClick={() => handleUpdateSave(user.id)}
//                                                 />
//                                                 <input
//                                                     type='button'
//                                                     className='btn btn-secondary ms-2'
//                                                     value='Cancel'
//                                                     onClick={() => setEditingId(null)}
//                                                 />
//                                             </td>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <td style={{ border: '2px solid black' }}>{user.Name}</td>
//                                             <td style={{ border: '2px solid black' }}>{user.Email}</td>
//                                             <td style={{ border: '2px solid black' }}>{user.Subject}</td>
//                                             <td style={{ border: '2px solid black' }}>{user.Message}</td>
//                                             <td style={{ border: '2px solid black' }}>
//                                                 <input
//                                                     type='button'
//                                                     className='btn btn-warning'
//                                                     value='Update'
//                                                     onClick={() => {
//                                                         setEditingId(user.id);
//                                                         setEditFormData({
//                                                             Name: user.Name,
//                                                             Email: user.Email,
//                                                             Subject: user.Subject,
//                                                             Message: user.Message
//                                                         });
//                                                     }}
//                                                 />
//                                             </td>
//                                             <td style={{ border: '2px solid black' }}>
//                                                 <input
//                                                     type='button'
//                                                     className='btn btn-danger'
//                                                     value='Delete'
//                                                     onClick={() => Delete(user.id)}
//                                                 />
//                                             </td>
//                                         </>
//                                     )}
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 ) : (
//                     <p>Loading data...</p>
//                 )}
//             </center>
//         </div>
//     );
// }
