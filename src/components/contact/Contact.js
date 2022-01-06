import React, { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Style from './contact.module.scss';
import lyon from '../../assets/images/eden/lyon.jpeg';
import Footer from "../footer/Footer";
const ComposantInput = ({ field, form : { touched, errors }, ...props })=>(
    <input 
    type="text" 
    { ...field }
    className={ errors[field.name] && touched[field.name] ? "form-control border border-2 border-danger" : "form-control border-none" } 
    {...props}
    placeholder={ field.name }  />  
);
const CustomError = (props)=>{
  return(
    <div className="p-2 text-danger fs-2"> { props.children } </div>
  )
}
export default class Contact extends Component{

  submit = (values, actions)=>{
    console.log(values);
    actions.setSubmitting(false)
  }
  userSchema = Yup.object().shape({
    name: Yup.string().min(3, 'trop court').max(20, 'trop long').required('requis'),
    email: Yup.string().email('mauvais email').required('requis'),
    text:Yup.string().required('requis')
  })
  render(){
    return(
      <>
          <div className={ Style.contact }>
        <div className="container">
          <p className="title-page">CONTACT</p>
          <div className={ Style.contactContent}>
            <div className={ Style.contactForm }>
              <p className={ Style.paragraphContact }>
                Envie d'entrer en contact ou de parler d'un projet ? <br />
                N'hésitez pas à remplir le formulaire ci-dessous.
              </p>
              <Formik
              onSubmit = { this.submit }
              initialValues={{ name:'', email:'', text:'' }}
              validationSchema = { this.userSchema }
              //validate = { this.validate } 
              //validateOnBlur = { false }
              //validateOnChange = { false }
              >
                { (
                  {
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  errors,
                  touched
                  }
                )=>(
                    <form onSubmit={ handleSubmit} className="bg-white">
                    <div className="form-group mb-5">
                      <Field name="name" component={ ComposantInput } />
                      <ErrorMessage name="name" component={ CustomError } />
                    </div>
                    <div className="form-group mb-5">
                      <Field name="email" component={ ComposantInput } type="email" /> 
                      <ErrorMessage name="email" component={ CustomError } />
                    </div>
                    <div className="form-group mb-5">
                      <Field name="text" >
                        {
                          ({field, form:{touched, errors}})=>(
                        <textarea 
                          type="textarea"  
                          {...field}
                          className={ errors[field.name] && touched[field.name] ? "form-control border border-2 border-danger" : "form-control border-none" } 
                          placeholder="Votre message" rows="5" />  
                              )
                        }
                      </Field>
                      <ErrorMessage name="text" component={ CustomError } />
                    </div>
                    <button type="submit" className="btnPrimary shadow-lg text-nowrap" disabled={ isSubmitting } >Envoyer</button>
                  </form>    
                 ) 
                }
              </Formik>
            </div>
            <div className={ Style.contactCordinate }>
              <div className={ Style.contactImg }>
                <img src={ lyon } alt="lyon" />    
              </div>
              <div className={ Style.contactCordinateText }>
                <div className={ Style.contactCordinateTextElem }>
                  <i className="fas fa-map-marker-alt"></i>
                  <p>2 Avenue rosa parks, LYON 69009</p>
                </div>
                <div className={ Style.contactCordinateTextElem }>
                  <i className="fas fa-phone"></i>
                  <p>0781152946</p>
                </div>
                <div className={ Style.contactCordinateTextElem }>
                  <i className="far fa-envelope-open"></i>
                  <p>adnensaid83@gmail.com</p>
                </div>
              </div>
              <div className={ Style.socials }>
                <div className={ Style.socialsElem }>
                  <i className="fab fa-github-alt"></i>
                </div>
                <div className={ Style.socialsElem }>
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div className={ Style.socialsElem }>
                  <i className="fab fa-facebook-f"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />  
      </>
    )
  }
}