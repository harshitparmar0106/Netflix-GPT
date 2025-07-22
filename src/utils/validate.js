export const checkValidSIgnUpData = (
    name,
    email,
    password,
    confirmPassword
) => {
    const isNameValid = /^[a-zA-Z\s]*$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        email
    );
    const isPasswordValid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]{8,}$/.test(
            password
        );

    if (!isNameValid) {
        return "enter the valid name only letters and whitespace are allowed";
    } else if (name.length < 3) {
        return "minimum 3 charcters required in name";
    }

    if (!isEmailValid) {
        return "email is not valid";
    }

    if (password.length < 8) {
        return "password must consists of minimum 8 charcters one upper case, one lower case, one number & one special symbol required";
    } else if (!isPasswordValid) {
        return " password is invalid";
    }

    if (typeof confirmPassword === "string" && confirmPassword !== password) {
        return "Password and confirm password does not match ? please check the passwords";
    }
};

export const checkValidSIgnInData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        email
    );
    const isPasswordValid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]{8,}$/.test(
            password
        );

    if (!isEmailValid) {
        return "email is not valid";
    }

    if (!isPasswordValid) {
        return "password is not valid";
        console.log("maje karo")
    }
};
