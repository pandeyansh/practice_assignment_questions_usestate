// import React, { useState } from 'react';
// const UserRegistration = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const validateForm = () => {
//     let isValid = true;
//     const updatedErrors = {
//       name: '',
//       email: '',
//       password: '',
//     };
//     if (formData.name.trim() === '') {
//       updatedErrors.name = 'Name is required.';
//       isValid = false;
//     }
//     if (formData.email.trim() === '') {
//       updatedErrors.email = 'Email is required.';
//       isValid = false;
//     } else if (!isValidEmail(formData.email)) {
//       updatedErrors.email = 'Please enter a valid email address.';
//       isValid = false;
//     }
//     if (formData.password.trim() === '') {
//       updatedErrors.password = 'Password is required.';
//       isValid = false;
//     }
//     setErrors(updatedErrors);
//     return isValid;
//   };
//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log('Form submitted successfully!');
//     } else {
//       console.log('Form has errors. Please correct them.');
//     }
//   };
//   return (
//     <div>
//       <h2>User Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
//           </label>
//         </div>
//         <div>
//           <label>
//             Email:
//             <input
//               type="text"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//           </label>
//         </div>
//         <div>
//           <label>
//             Password:
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
//           </label>
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };
// export default UserRegistration;
import { useState } from "react";
function UserRegistration () {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[errors, seterrors] = useState('');
    const validateForm = () => {
        const errors = {};
        if(name.trim()===''){
            errors.name= 'Name is Required';
        }
        if(email.trim()==='') {
            errors.email = 'Email is required';
        }else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
        }
        if (password.trim()===''){
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }
        seterrors(errors);
        return Object.keys(errors).length === 0;
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            if (validateForm()) {
                console.log('Form submitted successfully!');
            }
        };
        return(
            <div>
                <h2>User Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className="error">{errors.email}</p>}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
export default UserRegistration;