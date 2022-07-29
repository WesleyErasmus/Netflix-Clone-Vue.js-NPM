<template>
  <div class="about">
    <div class="login-page-bg">
      <!-- About page Navbar -->
      <header>
        <!-- Netflix logo -->
        <img
          class="app-logo"
          src="../assets/netflix-logo.png"
          alt="Netflix Logo"
        />
      </header>

      <!-- Sign in form  wrapper-->
      <div class="login-form-wrapper">
        <!-- Sign in form -->
        <form
          class="login-form"
          @submit.prevent="submitForm"
          autocomplete="off"
        >
          <!-- Form heading -->
          <h1 class="form-header">Sign In</h1>

          <!-- Input label -->
          <label class="email-or-phone-label">
            <!-- Username input -->
            <input
              v-model="form.username"
              id="name"
              class="email-or-phone-input"
              type="text"
              name="username"
              placeholder="Enter your full name"
            />
          </label>

          <!-- Form username input validation -->
          <p v-if="v$.form.username.$invalid" class="error-message">
            Please Enter Your Username or Full Name
          </p>

          <!-- Password input label -->
          <label class="password-label">
            <!-- Password input -->
            <input
              v-model="form.password"
              id="password"
              class="password-input"
              type="text"
              name="userPassword"
              placeholder="Password"
            />
          </label>

          <!-- Password form validation -->
          <p v-if="v$.form.password.$invalid" class="error-message">
            Please Enter Your Password
          </p>

          <!-- Sign-in buttton link to Home Page  -->
          <router-link :to="{ path: '/' }">
            <!-- Button is disabled until form validation is true -->
            <button
              :disabled="v$.form.$invalid"
              @click="submitForm(), persist()"
              id="saveUserName"
              class="form-sign-in-btn"
            >
              Sign In
            </button>
          </router-link>

          <!-- Remember me check box [aesthetics only] -->
          <div class="login-help-options">
            <label class="remember-me-checkbox-label">
              <input type="checkbox" class="remember-me-checkbox" checked />
              Remember me
            </label>
          </div>
        </form>
        <!-- Form end -->
      </div>

      <!-- About page footer -->
      <footer class="about-page-footer">
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

<script>
// Used and imported vuelidate for my form validation
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
    };
  },
  // Validation data
  validations: {
    form: {
      username: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    submitForm() {
      // v$ references veulidate / vuelidations - see above in setup()
      if (!this.v$.form.$invalid) {
        console.log("✅ form submitted", this.v$.form);
      } else {
        console.log("❌ Invalid form");
      }
    },
    // Persist is used to store username to local storage
    persist() {
      localStorage.name = this.form.username;
      console.log("now pretend I did more stuff...");
    },
  },
  mounted() {
    // Below if statement is used to store username to local storage
    if (localStorage.name) {
      this.form.username = localStorage.name;
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Arimo&family=Open+Sans&display=swap");
/* font-family: 'Arimo', sans-serif;
font-family: 'Open Sans', sans-serif; */

/* Form validation required messages */
.error-message {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.738);
}

/* About body styling */
.about {
  margin: 0;
  font-family: "Arimo", sans-serif;
  -webkit-font-smoothing: antialiased;
  background: #f3f3f3;
  color: #333;
  font-size: 16px;
}
/* Universal button styling */
button {
  border: none;
  line-height: 1;
}

/* Header navbar styling */
header {
  width: 100%;
  height: 90px;
}

/* App logo */
.app-logo {
  position: relative;
  height: 50px;
  margin: 1rem 0 0 1.3rem;
  z-index: 1;
}

/* Page background image */
.login-page-bg {
  position: relative;
  background: url(../assets/netflix-hero-bg.jpg) no-repeat;
  min-width: 100%;
  min-height: 100%;
}

/* Dark shadow effect on whole page  */
.login-page-bg::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: rgba(0, 0, 0, 0.6);
}

/* Login form wrapper */
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

/* Form styling */
.login-form {
  flex-grow: 1;
}

/* Form heading */
.form-header {
  color: #fff;
  font-weight: bold;
  margin-bottom: 30px;
}

/* Form labels */
.email-or-phone-label,
.password-label {
  display: block;
}

/* Form inputs */
.email-or-phone-input,
.password-input {
  position: relative;
  border: none;
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  background: #333;
  margin-bottom: 16px;
  color: #fff;
  line-height: 1;
}

/* Form sign in button */
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

/* Page footer */
.about-page-footer {
  background: var(--transparent-black-bg);
  color: #737373;
  position: relative;
  z-index: 1;
  padding: 4%;
}

/* Footer inner container */
.footer-inner {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 0;
}

/* Footer item */
.footer-call-line-number {
  margin-bottom: 30px;
}

/* Footer ul containing li's */
.footer-links-ul {
  display: block;
}

/* Footer items */
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

// MEDIA QUERIES
@media screen and (min-width: 1601px) and (max-width: 1920px) {
  // #
}

@media screen and (min-width: 1281px) and (max-width: 1600px) {
  // #
}

@media screen and (min-width: 841px) and (max-width: 1280px) {
  // #
}

@media screen and (min-width: 481px) and (max-width: 840px) {
   /* App logo */
  .app-logo {
    height: 45px;
  }

  /* Page background image */
  .login-page-bg {
    position: relative;
    background: #141414;
  }

  /* Login form wrapper */
  .login-form-wrapper {
    padding: 4%;
    width: 100%;
  }

  .login-form {
  flex-grow: 1;
}
}

@media screen and (min-width: 0) and (max-width: 480px) {
  /* App logo */
  .app-logo {
    height: 45px;
  }

  /* Page background image */
  .login-page-bg {
    position: relative;
    background: #141414;
  }

  /* Login form wrapper */
  .login-form-wrapper {
    margin-bottom: 0;
    padding: 4%;
    width: 100%;
  }

  .login-form {
  flex-grow: 1;
}
}
</style>
