import './App.css'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");




  

    const toggleButton = () => {
      setDarkMode(!darkMode);
    };

    const resetForm= ()=>{
      setName("");
      setEmail("");
      setMessage("");
      };

    
  return (
    <>
      <div className={`container ${darkMode ? "dark" : "light"}`}>
      <h1>Theme Toggle & Form</h1>

      <button onClick={toggleButton} className="btn">
        {darkMode ? "Dark Mode On" : "Light Mode On"}
      </button>

      <div className="form-section">
        <h2>General Form</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={resetForm} className="btn">
          Clear Form
        </button>
      </div>

  
      <div className="preview-section">
        <h2>Live Preview</h2>
        <p><strong>Name:</strong> {name || "<Empty>"}</p>
        <p><strong>Email:</strong> {email || "<Empty>"}</p>
        <p><strong>Message:</strong> {message || "<Empty>"}</p>
      </div>
    </div>
    </>
  )
}

export default App
