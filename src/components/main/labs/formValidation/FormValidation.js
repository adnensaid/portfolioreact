import React, { Component } from 'react'
import { Formik, Field} from 'formik';
import * as Yup from 'yup';
//import Style from './hoc.module.scss';
import ListFields from './listfields/ListFields';

const ButtonNext = (props)=>{
  return(
    <button
      type="button" 
      className="btn btn-primary btn-small" 
      disabled = { props.errors.name  ||  !props.values.name ? true : false } 
      onClick = { props.handleClick }
      >
        Next
    </button>    
  )
}


export default class FormValidation extends Component{
  constructor(props){
    super(props);
    this.state = {
      initialValues:{ name:'', email:'', message:'' },
      fields:['name', 'email', 'messages'],
      selectedfield:0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  submit = (values, actions)=>{
    actions.setSubmitting(false)
  }
  userSchema = Yup.object().shape({
    name:Yup.string().min(3).max(20).required(),
    email:Yup.string().email(),
    message:Yup.string().min(1).max(30)
  })
  handleClick= (e)=>{
    console.log(e.target);
    this.setState({
      selectedfield:this.state.selectedfield + 1
    })
  }
  render(){
    return(
      <div className="flex-1 d-flex flex-column align-items-center justify-content-center" >
        <Formik
          onSubmit={ this.submit }
          initialValues = { this.state.initialValues }
          validationSchema={ this.userSchema }
        >
         { ({
           handleChange,
           handleBlur,
           handleSubmit,
           values,
           isSubmitting,
           errors,
           touched
         }) =>(
          <form onSubmit = { handleSubmit } className="bg-white p-5 d-flex flex-column position-relative">
            <Field name="name">
              {
                ({field, form})=>{
                  console.log({ field, form:{ errors} })
                  return(
                    <div className="form-group slide">
                      <label> { field.name } </label>
                      <input { ...field } type="text" className="form-control" />
                    </div>    
                  )    
                }
              }
            </Field>
            <button
              type="button" 
              className="btn btn-primary btn-small" 
              disabled = { errors.name  ||  !values.name ? true : false } 
              onClick = { this.handleClick }
              >
                Next
            </button> 
            <Field name="email" >
              {
                ({field, form})=>{
                  console.log({ field, form:{ errors} })
                  return(
                    <div className="form-group slide">
                      <label> { field.name } </label>
                      <input { ...field } type="text" className="form-control" />
                    </div>    
                  )    
                }
              }
            </Field>
            <button
              type="button" 
              className="btn btn-primary btn-small" 
              disabled = { errors.email  ||  !values.email ? true : false } 
              onClick = { this.handleClick }
              >
                Next
            </button> 
            <Field name="message">
              {
                ({field, form})=>{
                  console.log({ field, form:{ errors} })
                  return(
                    <div className="form-group slide">
                      <label> { field.name } </label>
                      <input { ...field } type="text" className="form-control" />
                    </div>    
                  )    
                }
              }
            </Field>
            <button
              type="button" 
              className="btn btn-primary btn-small" 
              disabled = { errors.message  ||  !values.message ? true : false } 
              onClick = { this.handleClick }
              >
                Next
            </button> 
          </form>
         ) } 
        </Formik>
      </div>
    )
  }
}


























/* const CustomInput = ({ field, form, ...props})=>{
  return(
  <div className={ Style.formGroup }>
    <label>{field.name}</label>
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

class ListFields extends Component{
  constructor(props){
    super(props);
    this.state={
      disabled : true
    }
  }
  render(){
    let content;
    console.log(this.props.errors);
    {
      if (this.props.touched.name && this.props.errors.name) {
        content = (
          <>
          <Field name={ this.props.field.name } type={this.props.field.type} component={CustomInput} />
          <button 
          className={ Style.btn+' '+Style.btnNext } 
          type="button" 
          disabled={ true }
          onClick = { this.props.updateSelectedField }
          >
          Next
        </button>   
        </> 
        )
      }else if(this.props.touched.name && !this.props.errors.name){
        content = (
          <>
          <Field name={ this.props.field.name } type={this.props.field.type} component={CustomInput} />
          <button 
          className={ Style.btn+' '+Style.btnNext } 
          type="button" 
          disabled={ false }
          onClick = { this.props.updateSelectedField }
          >
          Next
        </button>   
        </> 
        )
      }else{
        content = (
          <>
          <Field name={ this.props.field.name } type={this.props.field.type} component={CustomInput} />
          <button 
          className={ Style.btn+' '+Style.btnNext } 
          type="button" 
          disabled={ true }
          onClick = { this.props.updateSelectedField }
          >
          Next
        </button>   
        </> 
        )
      }
    }
    return(
      <>
      { content } 
      </>
    )
  }
}
export default class Hoc extends Component{
  constructor(props){
    super(props);
    this.state = {
      fields:[
        {
        name:'name',
        type:'text'
      },
      {
        name:'email',
        type:'email'
      },
      {
        name:'password',
        type:'password'
      }
    ],
      selectedField:0,
      disabledBtn:true,
      disabledSubmit:true
    }
  }
  submit = (values, actions)=>{
    console.log(values);
    setTimeout(() => {
      actions.setSubmitting(false);
      actions.resetForm();
    }, 1000);
  }
  updateSelectedField = ()=>{
    if (this.state.selectedField > this.state.fields.length - 2) {
      this.setState({
        disabledBtn:!this.state.disabledBtn,
        disabledSubmit : !this.state.disabledSubmit
      })    
    }else{
      this.setState({
        selectedField:this.state.selectedField + 1
      })
    }
  }
  validate = (values)=>{
    let errors = {};
    if (values.name && values.name.length < 3) {
      errors.name = true;
    }
    return errors;
  }

  render(){

    return(
      <div className={ Style.withForm }>
        <Formik
        onSubmit = { this.submit }
        validate = { this.validate }
        initialValues = { {name:'', email:'', password:''} }
        validationSchema={ this.userSchema }

        >
          { ({
            handleSubmit,
            handleBlur,
            handleChange,
            values,
            isSubmitting,
            errors,
            touched
          })=>(
            <form onSubmit={ handleSubmit }>
              <ListFields 
              field = { this.state.fields[this.state.selectedField] } 
              disabled={ this.state.disabledBtn } 
              errors = { errors }
              touched = { touched }
              updateSelectedField = { this.updateSelectedField }
              />
              <button className={ Style.btn } type="submit" disabled={ this.state.disabledSubmit } >Submit</button>
            </form>
          ) }
        </Formik>
      </div>

    )
  }
} */