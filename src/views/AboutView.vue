<template>
  <div class="about">
   <div class="login-page-bg">
        
        <header>
            <img class="app-logo" src="../assets/netflix-logo.png" alt="Netflix Logo">
        </header>

        <div class="login-form-wrapper">

            <form class="login-form">
                <h1 class="form-header">Sign In</h1>
                <label class="email-or-phone-label">
                    <input class="email-or-phone-input" type="text" placeholder="Email or phone number">
                </label>

                <label class="password-label">
                    <input class="password-input" type="text" placeholder="Password">
                </label>

                <button class="form-sign-in-btn">Sign In
                </button>

                <div class="login-help-options">
                    
                    <label class="remember-me-checkbox-label">
                        <input type="checkbox" class="remember-me-checkbox" checked>
                        Remember me
                    </label>

                    <a class="login-help-link" href="">
                        Need help?
                    </a>
                </div>
            </form>
            <div class="login-form-extra">
            <div class="sign-up-now">
                New to Netflix?
                <span class="sign-up-now-link">
                    Sign up now
                </span>
            </div>

            <div class="terms-and-conditions">
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                <a class="form-learn-more" type="submit" href="#">Learn more.</a>
            </p>
            </div>
        </div>
    </div>

        <footer class="page-footer">
            <div class="footer-inner">
            <div class="footer-call-line-number">
                Questions? Call 0 801-000-723
            </div>
            <div class="footer-links">
                <ul class="footer-links-ul">
                    <li class="footer-link">FAQ</li>
                    <li class="footer-link">Help Centre</li>
                    <li class="footer-link">Terms of Use</li>
                    <li class="footer-link">Privacy</li>
                    <li class="footer-link">Cookie Preference</li>
                    <li class="footer-link">Corporate Information</li>
                </ul>
            </div>
        </div>

        </footer>
        
    </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Arimo&family=Open+Sans&display=swap');

/* font-family: 'Arimo', sans-serif;
font-family: 'Open Sans', sans-serif; */

:root {
    --primary-color: #E50914;
    --transparent-black-bg: rgba(0,0,0,.75);
}

::placeholder {
    font-size: 16px;
}

* {
    box-sizing: border-box;
}

input[type="checkbox"] {
    /* ############# */
}

html, body {
    height: 100%;
}

ul {
	list-style: none;
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    font-family: 'Arimo', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #f3f3f3;
    color: #333;
    font-size: 16px;
}

header {
    width: 100%;
    height: 90px;
}

.app-logo {
    position: relative;
    height: 50px;
    margin: 1rem 0 0 1.3rem;
    z-index: 1;
}

.login-page-bg {
    position: relative;
    background: url(../assets/netflix-hero-bg.jpg) no-repeat;
    min-width: 100%;
    min-height: 100%;
}

.login-page-bg::after {
    content: '';
    position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
	background: rgba(0, 0, 0, 0.6);
}

.login-form-wrapper {
    position: relative;
    z-index: 1;
    margin: 0 auto;
    margin-bottom: 60px;
    padding: 60px 68px 40px;
    min-height: 660px;
    max-width: 450px;
    background: var(--transparent-black-bg);
    display: flex;
    flex-direction: column;
    width: 100%;
}

.login-form {
    flex-grow: 1;
}

.form-header {
    color: #fff;
}

.email-or-phone-input, .password-input {
    border: none;
    width: 100%;
    padding: 1rem;
    border-radius: 4px;
    background: #333;
    margin-bottom: 16px;
}

.form-sign-in-btn {
    background: var(--primary-color);
    color: #fff;
    width: 100%;
    border-radius: 4px;
    padding: 16px;
    font-weight: 700;
    margin: 24px 0 12px;
    font-size: 16px;
}

.login-help-options {
    display: flex;
    justify-content: space-between;
    color: #b3b3b3;
    font-size: 13px;
}

.login-help-link {
    text-decoration: none;
    color: inherit;
}

.login-form-extra {
    color: #737373;
}
.sign-up-now-link {
    color: #fff;
}

.terms-and-conditions {
    font-size: 13px;
    color: #8c8c8c;
}

.form-learn-more {
    color: #0071EB;
}

footer {
    background: var(--transparent-black-bg);
    color: #737373;
    position: relative;
    z-index: 1;
}
.footer-inner {
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
}

.footer-call-line-number {
    margin-bottom: 30px;
}

.footer-links-ul {
    display: block;
}

.footer-link {
    box-sizing: border-box;
    padding: 0;
    margin-bottom: 16px;
    display: inline-block;
    min-width: 100px;
    width: 25%;
    padding-right: 12px;
    vertical-align: top;
    font-size: 13px;
}
</style>
