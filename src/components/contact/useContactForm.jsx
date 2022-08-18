import { useState, useEffect } from "react";

const useContactForm = () => {
  const [values, setValues] = useState({
    // name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  }

  return { handleChange, values, handleSubmit };

   
};

export default useContactForm;
