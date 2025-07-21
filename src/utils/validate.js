export const checkValiddata = (email, password, name) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z\s]*$/.test(name)

    if(!isNameValid){
        return "enter the valid name only letters and whitespace are allowed"
    } else if (name.length < 3){
        return "minimum 3 characters required"
    }

    if(!isEmailValid){
        return "email is not valid"
    }

    if(!isPasswordValid){
        return "password is not valid"
    }

}