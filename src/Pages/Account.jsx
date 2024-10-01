import React, { useState, useEffect } from 'react';

const Account = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({
    userId: '',
    name: '',
    email: '',
    address: '',
    gender: '',
    age: '',
    phone: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingUserId, setEditingUserId] = useState('');

  // Fetch profiles on component mount
  useEffect(() => {
    fetchProfiles();
  }, []);

  // Fetch all profiles
  const fetchProfiles = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/Profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Use backticks for template literals
        },
      });
      const data = await response.json();
      if (response.ok) {
        setProfiles(data);
      } else {
        console.log('Error fetching profiles:', data.message);
      }
    } catch (error) {
      console.error('Server error:', error);
    }
  };

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  // Create or update profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isEditing ? 'PUT' : 'POST';
      const response = await fetch('http://localhost:4000/api/Profile', {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Use backticks here as well
        },
        body: JSON.stringify(newProfile),
      });
      const data = await response.json();
      if (response.ok) {
        if (isEditing) {
          // Update profiles array
          setProfiles(profiles.map((profile) => (profile.userId === editingUserId ? data : profile)));
        } else {
          setProfiles([...profiles, data]); // Add new profile to list
        }
        // Reset form
        setNewProfile({ userId: '', name: '', email: '', address: '', gender: '', age: '', phone: '' });
        setIsEditing(false);
        setEditingUserId('');
      } else {
        console.log('Error creating/updating profile:', data.message);
      }
    } catch (error) {
      console.error('Server error:', error);
    }
  };

  // Delete profile
  const deleteProfile = async (userId) => {
    try {
      const response = await fetch('http://localhost:4000/api/Profile', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });
      const data = await response.json();
      if (response.ok) {
        setProfiles(profiles.filter((profile) => profile.userId !== userId));
      } else {
        console.log('Error deleting profile:', data.message);
      }
    } catch (error) {
      console.error('Server error:', error);
    }
  };

  // Edit profile
  const editProfile = (profile) => {
    setNewProfile({
      userId: profile.userId,
      name: profile.name,
      email: profile.email,
      address: profile.address,
      gender: profile.gender,
      age: profile.age,
      phone: profile.phone,
    });
    setIsEditing(true);
    setEditingUserId(profile.userId);
  };
  return (
    <div>
      <h1>User Profiles</h1>

      {/* Form for creating/updating profile */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={newProfile.userId}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newProfile.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newProfile.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={newProfile.address}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={newProfile.gender}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newProfile.age}
          onChange={handleInputChange}
        />
        <input
          type="string"
          name="phone"
          placeholder="Phone Number"
          value={newProfile.phone}
          onChange={handleInputChange}
        />
        <button type="submit">{isEditing ? 'Update Profile' : 'Create Profile'}</button>
        {isEditing && (
          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
              setNewProfile({ userId: '', name: '', email: '', address: '', gender: '', age: '', phone: '' });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      {/* List of profiles */}
      <ul>
        {profiles.map((profile) => (
          <li key={profile.userId}>
            <h3>{profile.name}</h3>
            <p>Email: {profile.email}</p>
            <p>Address: {profile.address}</p>
            <p>Gender: {profile.gender}</p>
            <p>Age: {profile.age}</p>
            <p>Phone No: {profile.phone}</p>
            <button onClick={() => editProfile(profile)}>Edit</button>
            <button onClick={() => deleteProfile(profile.userId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Account;






// import React, { useState, useEffect } from 'react';

// const Account = () => {
//   const [profiles, setProfiles] = useState([]);
//   const [newProfile, setNewProfile] = useState({
//     userId: '',
//     name: '',
//     email: '',
//     address: '',
//     gender: '',
//     age: '',
//     phoneNo: '',
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [editingUserId, setEditingUserId] = useState('');

//   // Fetch profiles on component mount
//   useEffect(() => {
//     fetchProfiles();
//   }, []);

//   // Fetch all profiles
//   const fetchProfiles = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/admin', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: Bearer ${localStorage.getItem('token')}, // Include token if needed
//         },
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setProfiles(data);
//       } else {
//         console.log('Error fetching profiles:', data.message);
//       }
//     } catch (error) {
//       console.error('Server error:', error);
//     }
//   };

//   // Handle form inputs
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProfile({ ...newProfile, [name]: value });
//   };

//   // Create or update profile
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const method = isEditing ? 'PUT' : 'POST';
//       const response = await fetch('http://localhost:4000/api/admin', {
//         method: method,
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: Bearer ${localStorage.getItem('token')},
//         },
//         body: JSON.stringify(newProfile),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         if (isEditing) {
//           // Update profiles array
//           setProfiles(profiles.map((profile) => (profile.userId === editingUserId ? data : profile)));
//         } else {
//           setProfiles([...profiles, data]); // Add new profile to list
//         }
//         // Reset form
//         setNewProfile({ userId: '', name: '', email: '', address: '', gender: '', age: '', phoneNo: '' });
//         setIsEditing(false);
//         setEditingUserId('');
//       } else {
//         console.log('Error creating/updating profile:', data.message);
//       }
//     } catch (error) {
//       console.error('Server error:', error);
//     }
//   };

//   // Delete profile
//   const deleteProfile = async (userId) => {
//     try {
//       const response = await fetch('http://localhost:4000/api/admin', {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ userId }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setProfiles(profiles.filter((profile) => profile.userId !== userId));
//       } else {
//         console.log('Error deleting profile:', data.message);
//       }
//     } catch (error) {
//       console.error('Server error:', error);
//     }
//   };

//   // Edit profile
//   const editProfile = (profile) => {
//     setNewProfile({
//       userId: profile.userId,
//       name: profile.name,
//       email: profile.email,
//       address: profile.address,
//       gender: profile.gender,
//       age: profile.age,
//       phoneNo: profile.phoneNo,
//     });
//     setIsEditing(true);
//     setEditingUserId(profile.userId);
//   };

//   return (
//     <div>
//       <h1>User Profiles</h1>

//       {/* Form for creating/updating profile */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="userId"
//           placeholder="User ID"
//           value={newProfile.userId}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={newProfile.name}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={newProfile.email}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={newProfile.address}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="text"
//           name="gender"
//           placeholder="Gender"
//           value={newProfile.gender}
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="age"
//           placeholder="Age"
//           value={newProfile.age}
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="phoneNo"
//           placeholder="Phone Number"
//           value={newProfile.phoneNo}
//           onChange={handleInputChange}
//         />
//         <button type="submit">{isEditing ? 'Update Profile' : 'Create Profile'}</button>
//         {isEditing && (
//           <button
//             type="button"
//             onClick={() => {
//               setIsEditing(false);
//               setNewProfile({ userId: '', name: '', email: '', address: '', gender: '', age: '', phoneNo: '' });
//             }}
//           >
//             Cancel
//           </button>
//         )}
//       </form>

//       {/* List of profiles */}
//       <ul>
//         {profiles.map((profile) => (
//           <li key={profile.userId}>
//             <h3>{profile.name}</h3>
//             <p>Email: {profile.email}</p>
//             <p>Address: {profile.address}</p>
//             <p>Gender: {profile.gender}</p>
//             <p>Age: {profile.age}</p>
//             <p>Phone No: {profile.phoneNo}</p>
//             <button onClick={() => editProfile(profile)}>Edit</button>
//             <button onClick={() => deleteProfile(profile.userId)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Account;






// import React, { useEffect, useState } from "react";

// const MyProfile = () => {
//   const [profile, setProfile] = useState(null); // Store user profile
//   const [editingProfile, setEditingProfile] = useState(false); // Track edit state
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     phone: "",
//     email: "",
//     gender: "",
//     age: "",
//   });

//   // Fetch user profile on component load
//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   // Fetch profile from the backend
//   const fetchProfile = async () => {
//     try {
//       const response = await fetch("http://localhost:4000/api/admin", {
//         method: "GET", // Use GET for fetching existing profile
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setProfile(data); // Set the fetched profile data
//         setFormData({
//           name: data.name || "",
//           address: data.address || "",
//           phone: data.phone || "",
//           email: data.email || "",
//           gender: data.gender || "",
//           age: data.age || "",
//         });
//       } else {
//         console.error("Error fetching profile:", data);
//       }
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//     }
//   };

//   // Handle form submission for profile creation (only run once if no profile exists)
//   const createProfile = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:4000/api/admin", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         alert("Profile created successfully");
//         fetchProfile(); // Refresh profile data
//       } else {
//         const errorData = await response.json();
//         console.error("Error creating profile:", errorData);
//       }
//     } catch (error) {
//       console.error("Error creating profile:", error);
//     }
//   };

//   // Handle profile update (only name, address, phone, and email can be updated)
//   const updateProfile = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         `http://localhost:4000/api/admin/${profile._id}`,
//         {
//           method: "PUT",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );
//       if (response.ok) {
//         alert("Profile updated successfully");
//         setEditingProfile(false); // Exit editing mode
//         fetchProfile(); // Refresh profile data
//       } else {
//         const errorData = await response.json();
//         console.error("Error updating profile:", errorData);
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   // Handle profile deletion
//   const deleteProfile = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:4000/api/admin/${profile._id}`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (response.ok) {
//         alert("Profile deleted successfully");
//         setProfile(null); // Clear profile from state
//       } else {
//         const errorData = await response.json();
//         console.error("Error deleting profile:", errorData);
//       }
//     } catch (error) {
//       console.error("Error deleting profile:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>My Profile</h1>

//       {profile ? (
//         <div>
//           {/* Display profile details */}
//           <p><strong>Name:</strong> {profile.name}</p>
//           <p><strong>Gender:</strong> {profile.gender}</p> {/* Gender cannot be updated */}
//           <p><strong>Address:</strong> {profile.address}</p>
//           <p><strong>Phone:</strong> {profile.phone}</p>
//           <p><strong>Email:</strong> {profile.email}</p>
//           {editingProfile ? (
//             <form onSubmit={updateProfile}>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Address"
//                 value={formData.address}
//                 onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 required
//               />
//               <button type="submit">Update Profile</button>
//               <button onClick={() => setEditingProfile(false)}>Cancel</button>
//             </form>
//           ) : (
//             <div>
//               <button onClick={() => setEditingProfile(true)}>Edit</button>
//               <button onClick={deleteProfile}>Delete Profile</button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <form onSubmit={createProfile}>
//           <h2>Create Your Profile</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Address"
//             value={formData.address}
//             onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Phone"
//             value={formData.phone}
//             onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//           <select
//             value={formData.gender}
//             onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//           <input
//             type="number"
//             placeholder="Age"
//             value={formData.age}
//             onChange={(e) => setFormData({ ...formData, age: e.target.value })}
//             required
//           />
//           <button type="submit">Create Profile</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default MyProfile;





// import React, { useState, useEffect } from 'react';
// // import { useFetch } from "../hooks/useFetch";
// // import { postData, putData, deleteData } from "../utils/apiCall";

// const AdminProfile = () => {
//   const [admins, setAdmins] = useState([]); // List of admins
//   const [formData, setFormData] = useState({
//     name: '',
//     gender: '',
//     age: '',
//     address: '',
//     phone: '',
//     email: '',
//   });
//   const [editMode, setEditMode] = useState(false); // Tracks if we are in edit mode
//   const [currentAdminId, setCurrentAdminId] = useState(null); // Tracks current admin being edited

//   // Fetch all admins on component load
//   useEffect(() => {
//     fetchAdmins();
//   }, []);

//   const fetchAdmins = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/admin');
//       const data = await response.json();
//       setAdmins(data);
//     } catch (error) {
//       console.error('Error fetching admins:', error);
//     }
//   };

//   // Handle input change for form fields
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submit for create and update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const method = editMode ? 'PUT' : 'POST';
//     const url = editMode
//       ? `http://localhost:4000/api/admin/${currentAdminId}`
//       : 'http://localhost:4000/api/admin';

//     try {
//       const response = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert(editMode ? 'Admin updated successfully' : 'Admin created successfully');
//         setEditMode(false); // Exit edit mode
//         setFormData({ name: '', gender: '', age: '', address: '', phone: '', email: '' });
//         fetchAdmins(); // Refresh admin list
//       } else {
//         console.error('Error submitting admin:', await response.json());
//       }
//     } catch (error) {
//       console.error('Error submitting admin:', error);
//     }
//   };

//   // Handle admin edit
//   const handleEdit = (admin) => {
//     setEditMode(true);
//     setCurrentAdminId(admin._id);
//     setFormData({
//       name: admin.name,
//       gender: admin.gender,
//       age: admin.age,
//       address: admin.address,
//       phone: admin.phone,
//       email: admin.email,
//     });
//   };

//   // Handle admin delete
//   const handleDelete = async (adminId) => {
//     try {
//       const response = await fetch(`http://localhost:4000/api/admin/${adminId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         alert('Admin deleted successfully');
//         fetchAdmins(); // Refresh admin list
//       } else {
//         console.error('Error deleting admin:', await response.json());
//       }
//     } catch (error) {
//       console.error('Error deleting admin:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Profile</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="gender"
//           placeholder="Gender"
//           value={formData.gender}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="age"
//           placeholder="Age"
//           value={formData.age}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">{editMode ? 'Update Admin' : 'Create Admin'}</button>
//       </form>

//       <h2>Admins List</h2>
//       <ul>
//         {admins.map((admin) => (
//           <li key={admin._id}>
//             <p>Name: {admin.name}</p>
//             <p>Gender: {admin.gender}</p>
//             <p>Age: {admin.age}</p>
//             <p>Address: {admin.address}</p>
//             <p>Phone: {admin.phone}</p>
//             <p>Email: {admin.email}</p>
//             <button onClick={() => handleEdit(admin)}>Edit</button>
//             <button onClick={() => handleDelete(admin._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminProfile;

