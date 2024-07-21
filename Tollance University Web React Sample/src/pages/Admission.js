import React, { useState } from "react";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BsSend } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { Dropzone, FileMosaic } from "@files-ui/react";

export const Admission = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    program: "",
    course: "",
    lastQualification: "",
    remarks: "",
  });

  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (incommingFiles) => {
    setFiles(incommingFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData, files);
  };
  return (
    <>
      <div style={{ height: "1683px" }}>
        <Breadcrumb />{" "}
        <Container className="mt-5 ">
          <Row className="justify-content-center mt-5">
            <Col md={8}>
              <Form
                onSubmit={handleSubmit}
                className="p-4  bg-white w-75 mx-auto rounded-4 box-shadow position-relative z-index-999"
              >
                <h3 className="text-start mb-4">Admission</h3>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                  />
                </Form.Group>
                <Form.Group controlId="lastName" className="mt-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                  />
                </Form.Group>
                <Form.Group controlId="program" className="mt-3">
                  <Form.Label>Program</Form.Label>
                  <Form.Control
                    as="select"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                  >
                    <option value="">-- Select Program --</option>
                    <option value="program1">Program 1</option>
                    <option value="program2">Program 2</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="course" className="mt-3">
                  <Form.Label>Course</Form.Label>
                  <Form.Control
                    as="select"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                  >
                    <option value="">-- Select Course --</option>
                    <option value="course1">Course 1</option>
                    <option value="course2">Course 2</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="lastQualification" className="mt-3">
                  <Form.Label>Last Qualification</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastQualification"
                    value={formData.lastQualification}
                    onChange={handleChange}
                    placeholder="Enter your last qualification"
                  />
                </Form.Group>
                <Form.Group controlId="files" className="mt-3">
                  <Dropzone
                    onChange={handleFileChange}
                    value={files}
                    className="uploadfile-bg"
                  >
                    <div className="text-center">
                      <div className="w-100">
                        <FiUpload className="bg-success text-light upload-icon" />
                      </div>
                      <Form.Label className="fs-6 w-100 text-dark">
                        Drag & drop your files here or{" "}
                        <span className=" text-danger">Choose files</span>
                      </Form.Label>
                    </div>
                    {files.map((file) => (
                      <FileMosaic {...file} preview />
                    ))}
                  </Dropzone>
                  <Form.Text className="text-muted">
                    File Types Allowed: PDF, JPEG, PNG | 10 MB Max File Size
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="remarks" className="mt-3">
                  <Form.Label>Remarks</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    placeholder="Are there any additional details you'd like to share about your application?"
                    maxLength={500}
                    rows={5}
                  />
                  <Form.Text className="text-muted">
                    Max 500 characters
                  </Form.Text>
                </Form.Group>
                <div className="d-flex justify-content-center gap-3 mt-4">
                  <Button
                    variant="secondary"
                    className="form-btn border text-dark"
                    onClick={() =>
                      setFormData({
                        firstName: "",
                        lastName: "",
                        program: "",
                        course: "",
                        lastQualification: "",
                        remarks: "",
                      })
                    }
                  >
                    Cancel <IoCloseOutline className="fs-4" />
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    className="form-btn submit-Btn"
                  >
                    Submit <BsSend className="fs-5" />
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>{" "}
        <div
          className="w-75 mx-auto position-absolute custom-position"
          style={{ backgroundImage: "url('assets/images/admission-bg-2.jpg')" }}
        ></div>
        <div></div>
      </div>
    </>
  );
};
