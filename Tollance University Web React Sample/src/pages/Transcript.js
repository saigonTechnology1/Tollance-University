import React from "react";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Col, Container, InputGroup, Row, Form, Table } from "react-bootstrap";
import { TbSearch } from "react-icons/tb";
import { TranscriptedData } from "../components/common/transcriptData/TranscriptedData";
import TranscriptYear from "../components/common/transcriptTable/TranscriptYear";

export const Transcript = () => {
  return (
    <>
      <div style={{ height: "3194px" }}>
        <Breadcrumb />
        <Container className="mt-5 ">
          <Row className="justify-content-center mt-5">
            <Col md={8}>
              <div className="p-4  bg-white w-100 mx-auto rounded-4 box-shadow position-relative z-index-999">
                <h3 className="text-center">Transcript</h3>
                <div className=" w-50 mx-auto mt-4">
                  <p className="fs-5">Enrollment Number</p>
                  <InputGroup.Text className="bg-light px-1 py-1 bg-light">
                    <Form.Group className="w-100">
                      <Form.Control
                        type="text"
                        // value={searchValue}
                        // onChange={(e) => handleSearchValue(e)}
                        placeholder="Enter your enrollment number"
                        className="border-0 bg-light search-input"
                      />
                    </Form.Group>
                    <TbSearch className="fs-4" />
                  </InputGroup.Text>
                </div>
                <b className="fs-5">Enrollment Number : </b>
                <Table striped bordered hover>
                  <thead className="bg-success">
                    <tr>
                      <th className="text-bg-success border-0">TERM</th>
                      <th className="text-bg-success border-0">CODE</th>
                      <th className="text-bg-success border-0">TITLE</th>
                      <th className="text-bg-success border-0">GRADE</th>
                      <th className="text-bg-success border-0">CREDITS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TranscriptedData.map((term, index) => (
                      <TranscriptYear
                        key={index}
                        year={term.year}
                        courses={term.courses}
                      />
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
        <div
          className="w-75 mx-auto position-absolute custom-position-transcript"
          style={{ backgroundImage: "url('assets/images/back-view-teenage.jpg')" }}
        ></div>
      </div>
    </>
  );
};
