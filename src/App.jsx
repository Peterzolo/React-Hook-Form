import React from "react";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div style={{ width: "600px", height: "400px", backgroundColor: "purple" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          // width: "500px",
          // alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <input
          style={{
            width: "500px",
            marginLeft: "30px",
            padding: "20px",
            margin: "10px",
            border: "none",
            borderRadius: "10px",
          }}
          type="text"
          placeholder="Name"
        />
        <input
          style={{
            width: "500px",
            marginLeft: "30px",
            padding: "20px",
            margin: "10px",
            border: "none",
            borderRadius: "10px",
          }}
          type="email"
          placeholder="Email"
        />
        <input
          style={{
            width: "500px",
            marginLeft: "30px",
            padding: "20px",
            margin: "10px",
            border: "none",
            borderRadius: "10px",
          }}
          type="password"
          placeholder="Password"
        />
        <button
          style={{
            width: "500px",
            marginLeft: "30px",
            padding: "20px",
            margin: "10px",
            border: "none",
            borderRadius: "10px",
          }}
          type="button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
