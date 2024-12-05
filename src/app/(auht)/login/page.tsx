// src/app/login/page.tsx
import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full height of the viewport
        backgroundColor: '#1a1a1a', // Dark background
        color: 'white', // Text color
        padding: '20px',
        flexDirection: 'column', // Stack items vertically
      }}
    >
      <div
        style={{
          maxWidth: '400px', // Limit the width of the form
          backgroundColor: '#2e2e2e', // Slightly lighter background for the container
          padding: '20px',
          borderRadius: '8px', // Rounded corners
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', // Subtle shadow
          width: '100%', // Full width of the container
        }}
      >
        <h1 style={{ marginBottom: '10px', textAlign: 'center' }}>Welcome to Zenmev</h1>
        <h2 style={{ marginBottom: '20px', textAlign: 'center', fontWeight: 400 }}>Login to your account</h2>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ margin: '10px 0 5px' }}>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            required
            style={{
              padding: '10px',
              marginBottom: '15px', // Space between inputs
              border: 'none',
              borderRadius: '4px', // Rounded input fields
            }}
          />
          <label style={{ margin: '10px 0 5px' }}>Password</label>
          <input
            type="password"
            placeholder="Input Your Password"
            required
            style={{
              padding: '10px',
              marginBottom: '15px', // Space between inputs
              border: 'none',
              borderRadius: '4px', // Rounded input fields
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#6a0dad', // Purple button color
              color: 'white', // Button text color
              padding: '10px',
              border: 'none',
              borderRadius: '4px', // Rounded corners for the button
              cursor: 'pointer',
            }}
          >
            Sign In
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'underline' }}>Forgot Password?</a>
        </p>
        <p style={{ textAlign: 'center' }}>
          Don’t have an account? <a href="#" style={{ color: 'white', textDecoration: 'underline' }}>Register</a>
        </p>
        <footer style={{ marginTop: '20px', textAlign: 'center' }}>©2024 Zenmev All Right Reserved.</footer>
      </div>
    </div>
  );
};

export default LoginPage;
