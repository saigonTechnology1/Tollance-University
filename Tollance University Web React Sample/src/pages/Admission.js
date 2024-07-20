import React, { useState } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import Dialog from '../components/common/Dialog';

const Admission = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    program: '',
    course: '',
    lastQualification: null,
    remarks: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const [errors, setErrors] = useState({});

  const programs = ['Program 1', 'Program 2', 'Program 3'];
  const courses = ['Course 1', 'Course 2', 'Course 3'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      lastQualification: e.target.files[0],
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.program) errors.program = 'Program is required';
    if (!formData.course) errors.course = 'Course is required';
    if (!formData.lastQualification) errors.lastQualification = 'Last qualification is required';
    if (formData.remarks.length > 500) errors.remarks = 'Remarks cannot exceed 500 characters';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Submit the form
      console.log(formData);
    }
  };

  return (
    <div className='grand-admission'>
     <Breadcrumb></Breadcrumb>
    <div className="Admission">
      <h6>Admission</h6>
      <form onSubmit={handleSubmit} className="admission-form">
        <div className="form-group">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </label>
        </div>


        <div className="form-group">
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Lirst Name"
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </label>
        </div>


        <div className="form-group">
          <label>
            Program:
            <select name="program" value={formData.program} onChange={handleChange}>
              <option value="">Select a program</option>
              {programs.map((program, index) => (
                <option key={index} value={program}>
                  {program}
                </option>
              ))}
            </select>
            {errors.program && <span className="error">{errors.program}</span>}
          </label>
        </div>


        <div className="form-group">
          <label>
            Course:
            <select name="course" value={formData.course} onChange={handleChange}>
              <option value="">Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {errors.course && <span className="error">{errors.course}</span>}
          </label>
        </div>


        <div className="form-group">
         
          <label>
            Last Qualification:
            <div className="drag-file-area">
            <span class="material-icons-outlined upload-icon"> <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/upload-512.png" alt="" /> </span>
            <input  type="file" name="lastQualification" class="default-file-input" onChange={handleFileChange} />
            <p class="dynamic-message"> Drag & drop any file here or <span className='drag-text'>choose files</span> </p>
            <p className='file-size-text'>File Type Allowed:PDF,JPEG,PNG & 10 MB Max File Size </p>
            {errors.lastQualification && <span className="error">{errors.lastQualification}</span>}
            </div>
          </label>
          
        </div>
      {/* extra */}
      
        {/* <div class=""> */}
		{/* <div class="drag-file-area"> */}
			{/* <span class="material-icons-outlined upload-icon"> <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/upload-512.png" alt="" /> </span> */}
			{/* <h3 class="dynamic-message"> Drag & drop any file here </h3> */}
			{/* <label class="label"> or <span class="browse-files"> <input type="file" name="lastQualification" onChange={handleFileChange} class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span> </label> */}
		{/* </div> */}
		{/* <span class="cannot-upload-message"> <span class="material-icons-outlined">error</span> Please select a file first <span class="material-icons-outlined cancel-alert-button">cancel</span> </span> */}
	
        {/* </div> */}
        {/* extra */}


        <div className="form-group">
          <label>
            Remarks:
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              maxLength="500"
            />
            {errors.remarks && <span className="error">{errors.remarks}</span>}
          </label>
          <p className='file-size-text'>Max 500 character</p>
        </div>


        <div className="">
        {/* <button type="button" className="tl-def-btn tl-4-def-btn" onClick={() => setFormData({
            firstName: '',
            lastName: '',
            program: '',
            course: '',
            lastQualification: null,
            remarks: '',
          })}>Cancel x </button> */}
          <button className='tl-def-btn tl-4-def-btn' onClick={openDialog}>Cancel</button>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog} />
          <button  className="tl-def-btn tl-4-def-btn" type="submit" style={{marginLeft:"100px"}}>Submit <span></span></button>
          
        </div>

      </form>
    </div>
      <section
        class="tl-9-services tl-9-section-spacing bg-defaults  " 
        data-background="/assets/images/admission-bg-2.jpg"
        style={{ backgroundImage: `url(/assets/images/admission-bg-2.jpg)`  }}
      >
        </section>
        <div className="tl-4-about-stat-num text-align-center visib " >Collage Admission</div>
        </div>
       
  );
};

export default Admission;
