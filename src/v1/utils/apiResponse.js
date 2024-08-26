class JoiErrors{};
class ServerError{};
class UserCreation{};
class UserLoggedIn{};

JoiErrors.error={
    "email":"Invalid email format",
    "emailRequired":"Email is required",
    "password":"Password must be at least 6 characters long",
    "passwordRequired":"Password is required",
    "confirmPassword":"Passwords do not match",
    "confirmPasswordRequired":"Confirm password is required"
};

ServerError.error={
    "emailAlreadyExists":"User already exists",
    "internalServerError":"Internal Server Error",
    "invalidPassword":"Invalid password",
    "invalidEmail":"Invalid email / User does not exist",

};

UserCreation.success={
    "message":"User created successfully",
    "success":"true",
    "statusCode":200
};
UserLoggedIn.success={
    "message":"User logged in successfully",
    "success":"true",
    "statusCode":200

}
module.exports={JoiErrors,ServerError,UserCreation,UserLoggedIn};
