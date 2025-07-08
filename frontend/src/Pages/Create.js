import React, { useState } from 'react';
import './Create.css';
import PopupCard from './PopupCard'; // Adjust path as needed
import axios from 'axios';
import {Link} from 'react-router-dom';

function Create() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  
  // Popup state management
  const [popup, setPopup] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'info',
    showConfirm: false,
    onConfirm: null
  });

  // Function to show popup
  const showPopup = (title, message, type = 'info', showConfirm = false, onConfirm = null) => {
    setPopup({
      isOpen: true,
      title,
      message,
      type,
      showConfirm,
      onConfirm
    });
  };

  // Function to close popup
  const closePopup = () => {
    setPopup(prev => ({ ...prev, isOpen: false }));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post('http://localhost:5000/api/users/register', form);

    // Show success popup with confirmation button
    showPopup(
      'Account Created Successfully!',
      `Welcome ${res.data.user.name}! Your account has been created. Click OK to continue.`,
      'success',
      true, // showConfirm = true
      () => {
        localStorage.setItem('token', res.data.token); // store JWT for later
        window.location.href = '/'; // redirect only after clicking OK
      }
    );

  } catch (err) {
    console.error('Full Axios error:', err);

    const errorMessage = err.response?.data?.error || err.message || 'Registration failed';
    showPopup(
      'Registration Failed',
      errorMessage,
      'error'
    );
  }
};


  return (
    <div className="create-container">
      {/* PopupCard component */}
      <PopupCard
        isOpen={popup.isOpen}
        onClose={closePopup}
        title={popup.title}
        message={popup.message}
        type={popup.type}
        showConfirm={popup.showConfirm}
        onConfirm={popup.onConfirm}
      />
      
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        <input 
          name="name" 
          type="text" 
          placeholder="Name" 
          value={form.name}
          onChange={handleChange} 
          required 
        />
        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          value={form.email}
          onChange={handleChange} 
          required 
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          value={form.password}
          onChange={handleChange} 
          required 
        />
        <button className="button-1" type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/Sign" className="btn-create">Sign in</Link></p>
    </div>
  );
}

export default Create;