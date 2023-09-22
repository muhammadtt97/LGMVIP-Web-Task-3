import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: 'male',
    image: '',
    skills: {
      java: false,
      web: false,
      python: false,
    },
  });

  const [submittedData, setSubmittedData] = useState([]);
  
  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        skills: {
          ...formData.skills,
          [name]: checked,
        },
      });
    } else if (type === 'file') {
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'male',
      image: '',
      skills: {
        java: false,
        web: false,
        python: false,
      },
    });
  };

  const handleClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'male',
      image: '',
      skills: {
        java: false,
        web: false,
        python: false,
      },
    });
  };

  return (
    <div className="container">
      <h1>Register Now</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Profile Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <div className="skills">
            <label htmlFor="java">
              <input
                type="checkbox"
                id="java"
                name="java"
                checked={formData.skills.java}
                onChange={handleChange}
              />
              Java
            </label>
            <label htmlFor="web">
              <input
                type="checkbox"
                id="web"
                name="web"
                checked={formData.skills.web}
                onChange={handleChange}
              />
              Web
            </label>
            <label htmlFor="python">
              <input
                type="checkbox"
                id="python"
                name="python"
                checked={formData.skills.python}
                onChange={handleChange}
              />
              Python
            </label>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Enroll Now
        </button>
        <button type="button" className="clear-button" onClick={handleClear}>
          Clear
        </button>
      </form>
      <div id="displayData" className="submitted-data">
        <h2>Enrolled Data</h2>
        {submittedData.map((data, index) => (
          <div key={index} className="enrolled-entry">
            <h3>Entry {index + 1}</h3>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Email: {data.email}</p>
            <p>Password: {data.password}</p>
            <p>Gender: {data.gender}</p>
            <p>Skills:</p>
            <ul>
              {Object.entries(data.skills).map(([skill, isChecked]) =>
                isChecked ? <li key={skill}>{skill}</li> : null
              )}
            </ul>
            {data.image && (
              <img
                src={URL.createObjectURL(data.image)}
                alt="Profile"
                width="100"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegistrationForm;
