import * as Constants from './constants'

export function isEmailValid(email) {
    let emailRegex = Constants.EMAIL_REGEX;
        return emailRegex.test(email);
}
export function isPasswordvalid(password){
    let passwordRegex = Constants.PASSWORD_REGEX;
        return passwordRegex.test(password);
}


