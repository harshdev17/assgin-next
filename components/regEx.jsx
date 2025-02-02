export const regEx = [
    {
      emailRegex:
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    }, //0
    { numberValidation: /^\.|[^0-9.]|\.\d*\.|^(\d*\.\d{0,2}).*$/g }, //1
    { phoneNumberValidation: /[^0-9]/g }, //2
    { emailTextValidation: /[^0-9A-Za-z@.]/g }, //3
    { textValidation: /[^A-Za-z ]/g }, //4
    { descValidation: /[^A-Za-z0-9 . ]/g }, //5
  ];