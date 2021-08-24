import {isEmail} from 'validator'
const validateName = (name) => {
    if(!name){
      return {
        validateStatus: 'error',
        errorMsg: 'Email is required!',
      }
    }
    if(name.match(/([a-zA-Z.'-])$/i) && name.length >= 5){
      return {
        validateStatus: 'success',
        errorMsg: null,
      }
    }
    return {
      validateStatus: 'error',
      errorMsg: 'Please enter a meaningful name!',
    }
  }
const validateEmail = (email) => {
    if(!email){
      return {
        validateStatus: 'error',
        errorMsg: 'Email is required!',
      }
    }
    if(isEmail(email)){
      return {
        validateStatus: 'success',
        errorMsg: null,
      }
    }
    return {
      validateStatus: 'error',
      errorMsg: 'Wrong email pattern. Please enter a coorect email',
    }
  }


export {validateEmail, validateName}