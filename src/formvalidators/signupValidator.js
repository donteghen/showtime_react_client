import {isEmail, isStrongPassword} from 'validator'
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


  const validatePassword = (password) => {
    if(!password){
      return {
        validateStatus: 'error',
        errorMsg: 'Password is required!',
      }
    }
    if(isStrongPassword(password, {
        minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
    })){
      return {
        validateStatus: 'success',
        errorMsg: null,
      }
    }
    return {
      validateStatus: 'error',
      errorMsg: 'Password must validate these, minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1',
    }
  }
export {validateEmail, validatePassword, validateName}