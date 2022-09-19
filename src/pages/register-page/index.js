import "./style.css";
export let registerPage = /*html*/ `<div class="register-parent-layout">
<div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png" alt="" class="register-logo">
</div>
<div>
    <h1>Create new account</h1>
</div>
<div id="server-error-message"></div>
<div class="register-form">
    <div>
        <form action="" id="reg-form">
            <div class="description-title">First Name</div>
            <div><input type="text" placeholder="Please enter your first name" name="firstName"></div>
            <div id="err-reg-first-name"></div>
            <div class="description-title">Last Name</div>
            <div><input type="text" placeholder="Please enter your last name" name="lastName"></div>
            <div id="err-reg-last-name"></div>
            <div class="description-title">Email address</div>
            <div><input type="email" placeholder="Please enter your email" name="email"></div>
            <div id="err-reg-email"></div>
            <div class="description-title">Password</div>
            <div><input type="password" placeholder="Please enter your password" name="password"></div>
            <div id="err-reg-password"></div>
            <div class="description-title">Confirm password</div>
            <div><input type="password" placeholder="Confirm your password" name="confirmPassword"></div>
            <div id="err-reg-confirm-password"></div>
            <div style="margin-bottom:10px">
            <label class="custom-file-upload">
                <input type="file" id="register-photo" />
                    Choose Avatar
            </label>
            <button id="register-submit-img">upload</button>
            </div>
            <button>Register</button>
        </form>
    </div>
</div>
<div>
    <div class="login-redirect" id="login-redirect"> Already have an account? Login here</div>
</div>







</div>
`;
