import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Spinner, InputGroup } from "react-bootstrap";
import api from "../../../Api/axios";
import "./styles.css";

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

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
      const res = await api.get(
        `/users?email=${data.email}&password=${data.password}`,
      );
      if (res.data.length > 0) {
        console.log("Login Success", res.data[0]);
        reset();
      } else {
        setError("root", {
          type: "manual",
          message: "Invalid email or password",
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setRepetition(false);
    }
  };
  return (
    <Container fluid className="p-0">
      <Row  className="login-form m-0">
        <Col md={{ span: 6, offset: 3 }}>
          <div className={`login-box ${show ? "show" : ""}`}>
            <h4 className="text-center text-muted mb-4">
              Login to your account
            </h4>
            <Form className="Login-form" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className={`mb-3 fade-item ${show ? "show" : ""}`} controlId="formBasicEmail">
                <Form.Label className="label-name">Email address</Form.Label>
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
                    name="email"
                    placeholder="Enter email"
                    isInvalid={!!errors.email}
                  />
                </InputGroup>
                {errors.email && (
                  <p style={{ color: "red" }}>{errors.email.message}</p>
                )}
              </Form.Group>

              <Form.Group className={`mb-3 fade-item ${show ? "show" : ""}`} controlId="formBasicPassword">
                <Form.Label className="label-name">Password</Form.Label>
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
                  name="password"
                  placeholder="Password"
                  isInvalid={!!errors.password}
                />
              </Form.Group>
              {errors.root && (
                <p style={{ color: "red" }}>{errors.root.message}</p>
              )}
              <button 
              disabled={repetition} 
              className={show ? "show" : ""} 
              type="submit">
                {repetition ? <Spinner size="sm" /> : "Login"}
              </button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
