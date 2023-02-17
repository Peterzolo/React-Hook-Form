import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();
  return (
    <Container
      style={{
        width: "600px",
        height: "400px",
        backgroundColor: "purple",
        padding: "10px",
        marginTop: "150px",
        borderRadius: "5px",
      }}
    >
      <form
        onSubmit={handleSubmit((data) => {
          console.log("DATA", data);
        })}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          marginTop: "20px",
        }}
      >
        <input
          style={{
            width: "500px",
            marginLeft: "37px",
            padding: "20px",
            margin: "10px",
            border: "none",
            borderRadius: "10px",
          }}
          {...register("name")}
          type="text"
          placeholder="Name"
        />
        <input
          style={{
            width: "500px",
            marginLeft: "37px",
            padding: "20px",
            margin: "10px",
            border: "none",
            borderRadius: "10px",
          }}
          {...register("email")}
          type="email"
          placeholder="Email"
        />
        <input
          style={{
            width: "500px",
            marginLeft: "37px",
            padding: "20px",
            margin: "10px",
            border: "none",
            borderRadius: "10px",
          }}
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <button
          style={{
            width: "500px",
            marginLeft: "37px",
            padding: "20px",
            margin: "10px",
            border: "none",
            borderRadius: "10px",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </Container>
  );
};

export default App;
