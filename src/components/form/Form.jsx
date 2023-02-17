import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("ERROR", errors);
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
          {...register("name", { required: "Name field is required" })}
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
          {...register("email", { required: "Email field is required" })}
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
          {...register("password", {
            required: "Password field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
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

export default Form;
