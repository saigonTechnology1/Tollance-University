import React from 'react'
import { Breadcrumb } from '../components/common/Breadcrumb'

const Transcript = () => {
  const data = {
      "semesters": [
          {
              "term": "",
              "code": "",
              "title": "SEM - 1",
              "grade": "",
              "credits": ""
          },
          {
              "term": "Fall 2016",
              "code": "",
              "title": "English",
              "grade": "A-",
              "credits": "3"
          },
          {
              "term": "Fall 2016",
              "code": "",
              "title": "Mathematics I",
              "grade": "A",
              "credits": "3"
          },
          {
              "term": "Fall 2016",
              "code": "",
              "title": "Applied Physics",
              "grade": "B",
              "credits": "4"
          },
          {
              "term": "Fall 2016",
              "code": "",
              "title": "C & Data Structures",
              "grade": "C+",
              "credits": "3"
          },
          {
              "term": "Fall 2016",
              "code": "",
              "title": "Engineering Drawing Practice",
              "grade": "B-",
              "credits": "3"
          },
          {
              "term": "Fall 2016",
              "code": "",
              "title": "Semiconductor Devices and Circuits",
              "grade": "B",
              "credits": "4"
          },
          {
              "term": "Fall 2016",
              "code": "",
              "title": "Computers and Information Technology",
              "grade": "B+",
              "credits": "3"
          },
          {
              "term": "",
              "code": "",
              "title": "SEM - 2",
              "grade": "",
              "credits": ""
          },
          {
              "term": "Sprint 2016",
              "code": "",
              "title": "Mathematics II",
              "grade": "C+",
              "credits": "4"
          },
          {
              "term": "Sprint 2016",
              "code": "",
              "title": "Discrete Structures",
              "grade": "C-",
              "credits": "3"
          },
          {
              "term": "Sprint 2016",
              "code": "",
              "title": "Data Processing",
              "grade": "B+",
              "credits": "4"
          },
          {
              "term": "Sprint 2016",
              "code": "",
              "title": "Logic Theory",
              "grade": "A-",
              "credits": "3"
          },
          {
              "term": "Sprint 2016",
              "code": "",
              "title": "IC Application",
              "grade": "B-",
              "credits": "4"
          },
          {
              "term": "Sprint 2016",
              "code": "",
              "title": "Managerial Economics and Accountancy",
              "grade": "B+",
              "credits": "3"
          },
          {
              "term": "Sprint 2016",
              "code": "",
              "title": "Linear and Digital ICO Applications",
              "grade": "B",
              "credits": "4"
          },
          {
              "term": "",
              "code": "",
              "title": "SEM - 3",
              "grade": "",
              "credits": ""
          },
          {
              "term": "Fall 2017",
              "code": "",
              "title": "Probability and Statistics",
              "grade": "D",
              "credits": "3"
          },
          {
              "term": "Fall 2017",
              "code": "",
              "title": "Electrical Technology",
              "grade": "B+",
              "credits": "4"
          },
          {
              "term": "Fall 2017",
              "code": "",
              "title": "Computer Organization",
              "grade": "B",
              "credits": "4"
          },
          {
              "term": "Fall 2017",
              "code": "",
              "title": "Operating Systems",
              "grade": "B",
              "credits": "4"
          },
          {
              "term": "Fall 2017",
              "code": "",
              "title": "Design and Analysis of Algorithms",
              "grade": "B",
              "credits": "3"
          },
          {
              "term": "Fall 2017",
              "code": "",
              "title": "Object-Oriented Programming",
              "grade": "B",
              "credits": "3"
          },
          {
              "term": "",
              "code": "",
              "title": "SEM - 4",
              "grade": "",
              "credits": ""
          },
          {
              "term": "Sprint 2017",
              "code": "",
              "title": "Operations Research",
              "grade": "A",
              "credits": "4"
          },
          {
              "term": "Sprint 2017",
              "code": "",
              "title": "Data Communications",
              "grade": "B+",
              "credits": "3"
          },
          {
              "term": "Sprint 2017",
              "code": "",
              "title": "Theory of Computation",
              "grade": "A",
              "credits": "3"
          },
          {
              "term": "Sprint 2017",
              "code": "",
              "title": "System Programming",
              "grade": "A",
              "credits": "3"
          },
          {
              "term": "Sprint 2017",
              "code": "",
              "title": "Interfacing Through Microprocessors",
              "grade": "D",
              "credits": "3"
          },
          {
              "term": "Sprint 2017",
              "code": "",
              "title": "Principles of Programming Languages",
              "grade": "C+",
              "credits": "4"
          },
          {
              "term": "",
              "code": "",
              "title": "SEM - 5",
              "grade": "",
              "credits": ""
          },
          {
              "term": "Fall 2018",
              "code": "",
              "title": "Computer Architecture",
              "grade": "C+",
              "credits": "3"
          },
          {
              "term": "Fall 2018",
              "code": "",
              "title": "Data Mining",
              "grade": "C",
              "credits": "4"
          },
          {
              "term": "Fall 2018",
              "code": "",
              "title": "Computer Network",
              "grade": "C",
              "credits": "3"
          },
          {
              "term": "Fall 2018",
              "code": "",
              "title": "Neuro-Fuzzy",
              "grade": "B+",
              "credits": "4"
          },
          {
              "term": "Fall 2018",
              "code": "",
              "title": "Data Structures and Algorithms",
              "grade": "C-",
              "credits": "3"
          },
          {
              "term": "Fall 2018",
              "code": "",
              "title": "Database Information System",
              "grade": "D",
              "credits": "3"
          },
          {
              "term": "",
              "code": "",
              "title": "SEM - 6",
              "grade": "",
              "credits": ""
          },
          {
              "term": "Sprint 2018",
              "code": "",
              "title": "Artificial Intelligence",
              "grade": "B",
              "credits": "3"
          },
          {
              "term": "Sprint 2018",
              "code": "",
              "title": "Wireless Network",
              "grade": "C-",
              "credits": "4"
          },
          {
              "term": "Sprint 2018",
              "code": "",
              "title": "Compiler Design",
              "grade": "C+",
              "credits": "3"
          },
          {
              "term": "Sprint 2018",
              "code": "",
              "title": "Computer Graphics",
              "grade": "A",
              "credits": "4"
          },
          {
              "term": "Sprint 2018",
              "code": "",
              "title": "Information Storage Management",
              "grade": "B-",
              "credits": "4"
          },
          {
              "term": "Sprint 2018",
              "code": "",
              "title": "Implementation of Programming Languages",
              "grade": "B",
              "credits": "4"
          },
          {
              "term": "",
              "code": "",
              "title": "SEM - 7",
              "grade": "",
              "credits": ""
          },
          {
              "term": "Fall 2019",
              "code": "",
              "title": "Software Engineering",
              "grade": "D",
              "credits": "3"
          },
          {
              "term": "Fall 2019",
              "code": "",
              "title": "Distributed Systems",
              "grade": "B-",
              "credits": "4"
          },
          {
              "term": "Fall 2019",
              "code": "",
              "title": "Java Programming",
              "grade": "C-",
              "credits": "3"
          },
          {
              "term": "Fall 2019",
              "code": "",
              "title": "Image Processing",
              "grade": "B+",
              "credits": "3"
          },
          {
              "term": "Fall 2019",
              "code": "",
              "title": "Neural Networks",
              "grade": "C-",
              "credits": "4"
          },
          {
              "term": "Fall 2019",
              "code": "",
              "title": "Visual Programming",
              "grade": "F",
              "credits": "4"
          },
          {
              "term": "",
              "code": "",
              "title": "SEM - 8",
              "grade": "",
              "credits": ""
          },
          {
              "term": "Sprint 2019",
              "code": "",
              "title": "Simulation and Modeling",
              "grade": "A",
              "credits": "4"
          },
          {
              "term": "Sprint 2019",
              "code": "",
              "title": "Pattern Recognition",
              "grade": "B-",
              "credits": "3"
          },
          {
              "term": "Sprint 2019",
              "code": "",
              "title": "Mobile Computing",
              "grade": "B-",
              "credits": "4"
          },
          {
              "term": "Sprint 2019",
              "code": "",
              "title": "Computer Communication",
              "grade": "B+",
              "credits": "3"
          },
          {
              "term": "Sprint 2019",
              "code": "",
              "title": "Project Management",
              "grade": "C+",
              "credits": "4"
          },
          {
              "term": "Sprint 2019",
              "code": "",
              "title": "Formal Languages and Automata Theory",
              "grade": "A",
              "credits": "3"
          }
      ]
  }

  return (
      <div classname='transcript-root' style={{ display: "flex", justifyContent: "center", padding: "4em" }}>
          <div className='transcript-main'>
              <div className='transcript-header'>
                  <h4>Transcript</h4>
              </div>
              <div className='enroll-no'>
                  <h6>Enrollment Number</h6>
                  <div className='search-icon'>
                      <input className="enrollment-input" type="text" placeholder="Enter your enrollment number" />
                      <img src='assets/images/transcript/magnifying-glass.png' alt='Search Icon' />
                  </div>
              </div>
              <div className='transcript-table'>
                  <h6>Enrollment Number: 0692515933</h6>
                  <table>
                      <thead>
                          <tr>
                              <th>Term</th>
                              <th>Code</th>
                              <th>Title</th>
                              <th>Grade</th>
                              <th>Credits</th>
                          </tr>
                      </thead>
                      <tbody>
                          {data.semesters.map((semester, index) => (
                              <tr key={index} className={semester.title.includes('SEM')?'sem-bold': ''}>
                                  <td>{semester.term}</td>
                                  <td>{semester.code}</td>
                                  <td>{semester.title}</td>
                                  <td>{semester.grade}</td>
                                  <td>{semester.credits}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>
      </div >
  )
}

export default Transcript