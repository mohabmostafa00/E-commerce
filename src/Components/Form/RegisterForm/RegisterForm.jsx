import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import api from "../../../Api/axios.js";
import { Spinner, InputGroup } from "react-bootstrap";
import "./styles.css";

function RegisterUser() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [checking, setChecking] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [repetition, setRepetition] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setShow(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const onSubmit = async (data) => {
    if (repetition) return;
    try {
      setRepetition(true);
      const res = await api.post("/users", data);
      console.log("User Created:", res.data);
      reset();
      setEmailValid(false);
    } catch (err) {
      console.log(err);
    } finally {
      setRepetition(false);
    }
  };
  return (
    <>
      <Row className="Register-form">
        <Col md={{ span: 6, offset: 3 }}>
          <div className={`register-box ${show ? "show" : ""}`}>
            <h3 className="text-center mb-4">Create Account</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className={`mb-3 fade-item ${show ? "show" : ""}`}>
                <Form.Label className="from-name">First Name</Form.Label>
                <Form.Control
                  {...register("firstName", {
                    required: "First Name is Required",
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z\u0600-\u06FF]+$/,
                      message: "First name must contain only letters",
                    },
                  })}
                  type="text"
                  placeholder="First Name"
                  isInvalid={!!errors.firstName}
                />
                {errors.firstName && (
                  <p style={{ color: "red" }}>{errors.firstName.message}</p>
                )}
              </Form.Group>

              <Form.Group className={`mb-3 fade-item ${show ? "show" : ""}`}>
                <Form.Label className="from-name">Last Name</Form.Label>
                <Form.Control
                  {...register("lastName", {
                    required: "Last Name is Required",
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z\u0600-\u06FF]+$/,
                      message: "Last name must contain only letters",
                    },
                  })}
                  type="text"
                  placeholder="Last Name"
                  isInvalid={!!errors.lastName}
                />
                {errors.lastName && (
                  <p style={{ color: "red" }}>{errors.lastName.message}</p>
                )}
              </Form.Group>

              <Form.Group className={`mb-3 fade-item ${show ? "show" : ""}`}>
                <Form.Label className="from-name">Email address</Form.Label>
                <InputGroup>
                  <Form.Control
                    {...register("email", {
                      required: "Email address is Required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format",
                      },
                    })}
                    type="email"
                    placeholder="Enter email"
                    isInvalid={!!errors.email}
                    isValid={emailValid && !errors.email}
                    onBlur={async (e) => {
                      const email = e.target.value.toLowerCase();
                      if (!email || errors.email) return;
                      try {
                        setChecking(true);
                        const res = await api.get(`/users?email=${email}`);
                        if (res.data.length > 0) {
                          setError("email", {
                            type: "manual",
                            message: "Email already exists",
                          });
                          setEmailValid(false);
                        } else {
                          setEmailValid(true);
                        }
                      } catch (err) {
                        console.log(err);
                      } finally {
                        setChecking(false);
                      }
                    }}
                  />
                  {checking && (
                    <InputGroup.Text className="d-flex align-items-center justify-content-center">
                      <Spinner animation="border" size="sm" />
                    </InputGroup.Text>
                  )}
                </InputGroup>
                {errors.email && (
                  <p style={{ color: "red" }}>{errors.email.message}</p>
                )}
                {emailValid && !errors.email && (
                  <p style={{ color: "green" }}>Email is available</p>
                )}
              </Form.Group>

              <Form.Group className={`mb-3 fade-item ${show ? "show" : ""}`}>
                <Form.Label className="from-name">Password</Form.Label>
                <Form.Control
                  {...register("password", {
                    required: "Password is Required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must be at most 20 characters",
                    },
                    pattern: {
                      value: /^(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>?/\\|`~]).+$/,
                      message:
                        "Password must include at least one special character",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  isInvalid={!!errors.password}
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password.message}</p>
                )}
              </Form.Group>

              <Form.Group className={`mb-3 fade-item ${show ? "show" : ""}`}>
                <Form.Label className="from-name">Confirm Password</Form.Label>
                <Form.Control
                  {...register("confirmPassword", {
                    required: "Confirm Password is Required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  type="password"
                  placeholder="Password"
                  isInvalid={!!errors.confirmPassword}
                />
                {errors.confirmPassword && (
                  <p style={{ color: "red" }}>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </Form.Group>

              <button
                type="submit"
                className={`mb-4 Submit-btn ${show ? "show" : ""}`}
              >
                {repetition ? <Spinner size="sm" /> : "Submit"}
              </button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default RegisterUser;
