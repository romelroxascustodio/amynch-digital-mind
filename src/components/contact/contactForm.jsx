import { useState, useEffect } from 'react';
// import { Mailer } from "nodemailer-react";
// import { createTransport } from "nodemailer";

const ContactForm = () => {
     const formValue = { name: "", email: "", message: "", number:"", jobtitle:"" };
     const [formValues, setFormValues] = useState(formValue);
     const [formErrors, setFormErrors] = useState({});
     const [isSubmit, setIsSubmit] = useState(false);

     const handleChange = (e) => {
          const {name, value} = e.target;
          setFormValues({...formValues, [name]: value});
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          setFormErrors(validate(formValues));
          setIsSubmit(true);
     };

     useEffect(() => {
          console.log(formErrors);
          if(Object.keys(formErrors).length === 0 && isSubmit) {
               console.log(formValues);
          }
     }, [formErrors])

     const validate = (values) => {
          const errors = {}
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          // const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
          const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
          

          if(!values.name) {
               errors.name = "Name is required";
          }
          
          if(!values.email) {
               errors.email = "Email is required";
          } else if (!emailRegex.test(values.email)) {
               errors.email = "Email Address is invalid";
          }

          if(!values.number) {
               errors.number = "Phone Number is required";
          } else if (!phoneRegex.test(values.number)) {
               errors.number = "Phone Number is invalid";
          }

          if(!values.jobtitle) {
               errors.jobtitle = "Job Title is required";
          }

          if(!values.message) {
               errors.message = "Message is required";
          };

          return errors;
     };

     return (
          <>
               {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
               <form className="relative w-full bg-slate-100 py-8" onSubmit={handleSubmit}>

                    <div className="flex flex-row flex-wrap p-4">
                              
                         <div className="w-full lg:w-6/12 p-4">

                              <input
                                   type="text"
                                   name="name" 
                                   className="min-h-[3rem] w-full p-4 border-inherit border-solid border-2 outline-0 focus:border-primary" 
                                   placeholder="Name"
                                   value={formValues.name}
                                   onChange={handleChange}
                              />
                              <p className="mt-1 font-medium text-red-500">{ formErrors.name }</p>

                         </div>

                         <div className="w-full lg:w-6/12 p-4">

                              <input 
                                   type="text"
                                   name="email"
                                   className="min-h-[3rem] w-full p-4 border-inherit border-solid border-2 outline-0 focus:border-primary" 
                                   placeholder="Email"
                                   value={formValues.email}
                                   onChange={handleChange}
                              />
                              <p className="mt-1 font-medium text-red-500">{ formErrors.email }</p>

                         </div>

                         <div className="w-full lg:w-6/12 p-4">

                              <input 
                                   type="text"
                                   name="number"
                                   className="min-h-[3rem] w-full p-4 border-inherit border-solid border-2 outline-0 focus:border-primary" 
                                   placeholder="Phone Number"
                                   value={formValues.number}
                                   onChange={handleChange}
                              />
                              <p className="mt-1 font-medium text-red-500">{ formErrors.number }</p>

                         </div>

                         <div className="w-full lg:w-6/12 p-4">

                              <input
                                   type="text"
                                   name="jobtitle" 
                                   className="min-h-[3rem] w-full p-4 border-inherit border-solid border-2 outline-0 focus:border-primary" 
                                   placeholder="Job Title"
                                   value={formValues.jobtitle}
                                   onChange={handleChange}
                              />
                              <p className="mt-1 font-medium text-red-500">{ formErrors.jobtitle }</p>

                         </div>

                         <div className="w-full p-4">

                              <textarea 
                                   name="message" 
                                   className="w-full p-4 border-inherit border-solid border-2 outline-0 focus:border-primary" 
                                   rows="5" 
                                   placeholder="Message"
                                   value={formValues.message}
                                   onChange={handleChange}
                              />
                              <p className="mt-1 font-medium text-red-500">{ formErrors.message }</p>

                         </div>

                         <div className="w-full p-4">

                              <input 
                                   type="submit" 
                                   className="relative bg-primary text-white w-full rounded p-4 hover:bg-secondary transition-all duration-300 ease-in cursor-pointer" 
                                   value="Submit" 
                              />

                         </div>

                    </div>

               </form>
          </>
     );
};

export default ContactForm;
