import "./style.css";
export let loginPage = /*html*/ ` <div class="login-parent-layout">
<div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png" alt="" class="login-logo">
    <div>
        <h1>Sign in to Rikkei Chat</h1>
    </div>
    <div style="text-align:center;"><div id="err-message">
     
    
    </div></div>
    
    <div class="login-form">
        <form action="" id="login-form-1">
            <div>
                <div style="float:left">Email address</div>
                <div> <input type="email" name="email" placeholder="Please enter your email"></div>

                <div style="float:left">Password</div>
                <div><input type="password" name="password" placeholder="Please enter your password"></div>

                <div><button>Login</button></div>
            </div>
        </form>
    </div>


    <div>
        <div class="create-account" id="create-account">New to Rikkei Chat? Create an account</div>
    </div>
    <div style="display: inline-block;">
        <div style="margin-left:80px" id="forget-password">Forget your password? Click here</div>
    </div>



</div>
</div>`;
