import "./style.css";

export let resetPasswordPage = /*html*/ ` <div class="reset-parent-layout">

<div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png" alt="" class="logo">
</div>
<div>
    <h1>Reset your password</h1>
</div>

<div class="reset-form">
    <form action="" id="reset-password-form">
        <div style="float:left; margin-left:12px" >Email address</div>
        <div><input type="email" placeholder="Please enter your email" name="email"></div>
        <div id="err-reset-password"></div>
        <button>Reset password</button>
    </form>
</div>

<div>
    <div class="description" id="reset-password-login-redirect" >Already have an account? Login here</div>

</div>







</div>
`;
