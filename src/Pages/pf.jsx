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
          Authorization: `Bearer ${localStorage.getItem('token')}`,
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