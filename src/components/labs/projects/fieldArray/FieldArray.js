import React, { Component } from 'react'
import { Formik, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import Style from './fieldarray.module.scss';

const CustomInput = ({ field, form, ...props})=>{
  return(
  <div className={ Style.formGroup }>
    <label>{ props.displayname ? props.displayname :  field.name}</label>
    <input { ...field } type="text"  { ...props }  />
  </div>  
  )
}
const CustomError = (props)=>{
  return(
    <div className="text-danger">
      { props.children }
    </div>
  )
}
export default class Hoc extends Component{
  submit = (values, actions)=>{
    setTimeout(() => {
      actions.setSubmitting(false);
      actions.resetForm();
    }, 1000);
  }
  userSchema = Yup.object().shape({
    name: Yup.string().min(3, 'trop court').max(8, 'trop long').required('required'),
    email: Yup.string().email('email non valide').required('required'),
    password: Yup.string().min(5, 'trop court').required('required')
  })
  render(){
    return(
      <div className={ Style.withForm }>
        <Formik
        onSubmit = { this.submit }
        validate = { this.validate }
        initialValues = { {name:'', email:'', password:'', items:[{ name:'adnen' }]} }
        validationSchema={ this.userSchema }
        >
          { ({
            handleSubmit,
            isSubmitting,
            values
          })=>(
            <form onSubmit={ handleSubmit }>
              <Field name="name" component={ CustomInput } />
              <ErrorMessage name="name" component={ CustomError } />
              <Field name="email" type="email" component={CustomInput} />
              <ErrorMessage name="email" component={ CustomError } />
              <Field name="password" type="password" component={ CustomInput } />
              <ErrorMessage name="password" component={ CustomError } />
              <FieldArray name="items">
                { arrayHelpers => (
                  <div>
                    { 
                    values.items && values.items.length ? (
                      values.items.map((item, index)=>(
                        <div key={ index }>
                        <div>Item: {index}</div>
                        <hr />
                        <Field name={`items.${ index }.name`} displayname="name" component={ CustomInput } />
                        <ErrorMessage name={`items.${ index }.name`} component={ CustomError } />   
                        <Field name={`items.${ index }.name`} displayname="quantity" component={ CustomInput } />
                        <ErrorMessage name={`items.${ index }.name`} component={ CustomError } />
                      </div>      
                      ))
                    ) : null }
                    <button
                    type="button" 
                    className={ Style.btn }
                    onClick={()=>{
                      arrayHelpers.push({
                        name:'jack'
                      });

                    }}
                    >Add</button>
                  </div>
                ) }
              </FieldArray>
              <button className={ Style.btn } type="submit" disabled={ isSubmitting } >Submit</button>
            </form>
          ) }
        </Formik>
      </div>

    )
  }
}