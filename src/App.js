import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: {
      tech: false,
      sports: false,
      music: false,
    },
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        interests: { ...formData.interests, [name]: checked },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <main>
      <h1>Hi, I'm Patrick</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Newsletter Signup</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <fieldset>
          <legend>Select your interests:</legend>
          <label>
            <input
              type="checkbox"
              name="tech"
              checked={formData.interests.tech}
              onChange={handleChange}
            />
            Technology
          </label>
          <label>
            <input
              type="checkbox"
              name="sports"
              checked={formData.interests.sports}
              onChange={handleChange}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="music"
              checked={formData.interests.music}
              onChange={handleChange}
            />
            Music
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p>
          Thank you for signing up, {formData.name}! We will send updates to{" "}
          {formData.email}. Your interests include:{" "}
          {Object.entries(formData.interests)
            .filter(([_, checked]) => checked)
            .map(([interest]) => interest)
            .join(", ")}.
        </p>
      )}
    </main>
  );
}

export default App;
