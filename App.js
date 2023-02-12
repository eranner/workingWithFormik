import { formik, useFormik } from 'formik'
import React from 'react'
import './App.css';

function App() {


  const formik = useFormik(
    {
      initialValues: {
        // fname: '',
        email: '',
        password: ''

      },
      onSubmit: values => {
        console.log('form:', values)
      },
      validate: values => {
        const errors = {}
        // if(!values.fname) errors.name ='This field is required'
        if(!values.email){
          errors.email ='Field Required'
        } 

        if(!values.password){
          errors.password ='Field Required'
        } 

        // if(values.email != include('@')){
        //   errors.noPass = 'Needs to be an email'
        // }
        return errors;
      }
    }
  )

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
          {/* <label>First Name:</label>
          <input type='text' name='fname'
            onChange={formik.handleChange}
            value={formik.values.fname} />
            {formik.errors.fname ? <div style={{color: 'red'}}>{formik.errors.fname}</div>: null} <br></br> */}
          <label>Email:</label>
          <input type='email' name='email' id='emailField'            
            onChange={formik.handleChange}
            value={formik.values.email} />
            {formik.errors.email ? <div id='emailError'style={{color: 'red'}}>{formik.errors.email}</div>: null}
            {/* {formik.errors.noPass ? <div id='emailError'style={{color: 'red'}}>{formik.errors.noPass}</div>: null} */}
             <br></br>
             <br></br>
          <label>Password:</label>
          <input type='password' name='password' id='pswField'
                      onChange={formik.handleChange}
                      value={formik.values.password} />
                      {formik.errors.password ? <div id='pswError'style={{color: 'red'}}>{formik.errors.password}</div>: null} <br></br>
          <button id='submitBtn'type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default App;
