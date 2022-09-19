//controller lam nhiem vu validate thong tin
//tao ham validateloginInfo nhan vao email va password trong controller
//export ham validateLoginInfo
//import ham validateLoginInfo trong view
//trong screen login, goi ham validateLoginInfo() voi email va pass lay tu form

//trong controller, viet logic ham validateLoginInfo() de validate hop le
// Tạo một hàm setMessage ở view và export sang controller để in ra lỗi
// từ những trường hợp validate đó

//lam giong het cac buoc tren voi nhung man resetpassword va register

//regex
//export ham` ben controller
import { renderErrorMessage, setActiveScreen } from "../view/index";
import { createNewUser, uploadImgRegister } from "../model/index";
import { signInExistingUser } from "../model/index";
import { successful } from "../view/index";

export function validateLoginInfo(email, password) {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("err-message", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("err-message", "Invalid email");
  } else {
    renderErrorMessage("err-message", "");
  }

  if (!password) {
    renderErrorMessage("err-message", "Please enter your password");
  } else {
    renderErrorMessage("password-error-message", "");
  }
  if (email && password && emailRegex.test(email)) {
    successful("dang nhap thanh cong");
    signInExistingUser(email, password);
  }
}

export function validateRegisterInfo(
  firstname,
  lastname,
  email,
  password,
  confPass,
  id
) {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("err-reg-email", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("err-reg-email", "Invalid email");
  } else {
    renderErrorMessage("err-reg-email", "");
  }

  if (!password) {
    renderErrorMessage("err-reg-password", "Please enter your password");
  } else {
    renderErrorMessage("err-reg-password", "");
  }
  if (!firstname) {
    renderErrorMessage("err-reg-first-name", "Please enter your first name");
  }
  if (!lastname) {
    renderErrorMessage("err-reg-last-name", "Please enter your last name");
  }
  if (!confPass) {
    renderErrorMessage(
      "err-reg-confirm-password",
      "Please confirm your password"
    );
  }
  if (confPass !== password && password && confPass) {
    renderErrorMessage("err-reg-confirm-password", "Password does not match");
  }
  if (
    firstname &&
    lastname &&
    email &&
    password &&
    confPass &&
    password === confPass
  ) {
    createNewUser(email, password, firstname, lastname);
    uploadImgRegister(id);
    successful("Dang ky thanh cong");
    setActiveScreen("loginPage");
  }
}

export function validateResetPassword(email) {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("err-reset-password", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("err-reset-password", "Invalid email");
  } else {
    renderErrorMessage("err-reset-password", "");
  }
}
