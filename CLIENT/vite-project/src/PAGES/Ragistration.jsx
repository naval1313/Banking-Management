import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import Footer from "../COMPONENTS/Footer";



function BankAccountSignup() {

  const [file, setFile] = useState(null);

  const [formData, setFormData] = useState({
    // name: "",
    // email: "",
    // phone: "",
    // password: "",
    // accountType: "Savings",
    // image:file,
    // terms: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleFile = (e) => {
    let value = e.target.files[0];
    setFile(value);
    console.log(file)
    setFormData((prevData) => ({
      ...prevData,
      image: value, // Update image in formData
    }));
    console.log(file);
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Invalid email address";
    if (formData.phone.length !== 10)
      newErrors.phone = "Phone number must be 10 digits";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.terms) newErrors.terms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
    console.log(formData)

   let api = "http://localhost:2000/customer/ragistration"
   await axios.post(api,formData).then((res)=>{
    console.log(res.data);
   })

    if (validateForm()) {
      setSubmitted(true);
      console.log("Form Data:", formData);
    }
  };

  return (
    <Container className="mt-4" id="ragisform">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center" id="ragisH" >Bank Account Sign-Up</h2>

          {submitted && (
            <Alert variant="success">Account Created Successfully!</Alert>
          )}

          <Form onSubmit={handleSubmit}>
            {/* Name Field */}
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Email Field */}
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>ID PROOF</Form.Label>
              <Form.Control
                type="file"
                placeholder="upload id proof"
                name="file"
              
                onChange={handleFile}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Phone Field */}
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Account Type */}
            <Form.Group className="mb-3">
              <Form.Label>Account Type</Form.Label>
              <Form.Select
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
              >
                <option value="Savings">Savings Account</option>
                <option value="Checking">Checking Account</option>
              </Form.Select>
            </Form.Group>

            {/* Terms & Conditions */}
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="I agree to the terms and conditions"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                isInvalid={!!errors.terms}
              />
              <Form.Control.Feedback type="invalid">
                {errors.terms}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit Button */}
            <Button id="ragisbtn" type="submit" className="w-100">
              Create Account
            </Button>
          </Form>
        </Col>
      </Row>
      <br /><br /><br /><br /><br />
    </Container>
  );
}

export default BankAccountSignup;
