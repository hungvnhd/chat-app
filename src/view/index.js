import { chatPage } from "../pages/chat-page";
import { loginPage } from "../pages/login-page/index";
import { registerPage } from "../pages/register-page";
import { resetPasswordPage } from "../pages/reset-password-page";
import { validateLoginInfo } from "../controller";
import { validateRegisterInfo } from "../controller";
import { displayProfileName } from "../model";
import { uploadImg } from "../model";
import { validateResetPassword } from "../controller";
import { resetPasswordEmail } from "../model";
import { uploadImgRegister } from "../model";

export let setActiveScreen = (screenName) => {
  let app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const forgetPassword = document.getElementById("forget-password");
      forgetPassword.onclick = () => {
        setActiveScreen("resetPasswordPage");
      };
      const loginForm = document.getElementById("login-form-1");
      if (loginForm) {
        console.log(loginForm);
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = loginForm.email.value;
          const password = loginForm.password.value;
          console.log(email, password);
          validateLoginInfo(email, password);
        });
      }
      const createAcc = document.getElementById("create-account");
      createAcc.onclick = () => {
        setActiveScreen("registerPage");
      };

      break;
    case "registerPage":
      if (app) {
        app.innerHTML = registerPage;
      }
      const loginRedirect = document.getElementById("login-redirect");
      loginRedirect.onclick = () => {
        setActiveScreen("loginPage");
      };

      const regForm = document.getElementById("reg-form");
      if (regForm) {
        // const registerPhoto = document.getElementById("register-photo");
        // registerPhoto.onclick = () => {
        //   console.log(registerPhoto.files);
        // };
        regForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const regEmail = regForm.email.value;
          const regPassword = regForm.password.value;
          const regFirstname = regForm.firstName.value;
          const regLastname = regForm.lastName.value;
          const regConfirmPassword = regForm.confirmPassword.value;

          validateRegisterInfo(
            regFirstname,
            regLastname,
            regEmail,
            regPassword,
            regConfirmPassword,
            "register-photo"
          );

          // console.log(
          //   regEmail,
          //   regPassword,
          //   regFirstname,
          //   regLastname,
          //   regConfirmPassword
          // );
        });
      }
      // let displayChatName = document.getElementById("chat-display-name");
      // displayChatName.onclick = () => {
      //   console.log("hello");
      // };
      break;

    case "chatPage":
      if (app) {
        app.innerHTML = chatPage;
      }
      displayProfileName("chat-display-name", "chat-ava");
      document.getElementById("submit-img").onclick = (event) => {
        event.preventDefault();
        uploadImg("photo", "chat-ava");
      };

      break;
    case "resetPasswordPage":
      if (app) {
        app.innerHTML = resetPasswordPage;
      }
      const resetPasswordLoginRedirect = document.getElementById(
        "reset-password-login-redirect"
      );
      resetPasswordLoginRedirect.onclick = () => {
        setActiveScreen("loginPage");
      };
      const reset = document.getElementById("reset-password-form");

      reset.addEventListener("submit", (event) => {
        const resetEmail = reset.email.value;
        event.preventDefault();
        validateResetPassword(resetEmail);
        resetPasswordEmail(resetEmail);
      });

      break;
  }
};

export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};

export let successful = (text) => {
  alert(text);
};

// console.log(displayChatName);
