<template>
    <div class="footerComponent">
        <!-- Home page footer -->
        <footer class="footer-component-container">
          <!-- Home page footer links -->
          <ul class="footer-links">
            <li class="footer-link-item">Audio and Subtitles</li>
            <li class="footer-link-item">Audio Description</li>
            <li class="footer-link-item">Help Centre</li>
            <li class="footer-link-item">Gift Cards</li>
            <li class="footer-link-item">Media Center</li>
            <li class="footer-link-item">Investor Relations</li>
            <li class="footer-link-item">Jobs</li>
            <li class="footer-link-item">Terms of Use</li>
            <li class="footer-link-item">Privacy</li>
            <li class="footer-link-item">Legal Notices</li>
            <li class="footer-link-item">Cookie Preferences</li>
            <li class="footer-link-item">Corporate Information</li>
            <li class="footer-link-item">Contact Us</li>
          </ul>
        </footer>
    </div>
</template>


<style lang="scss">
/* Home page footer */
.footer-component-container {
  position: relative;
  max-width: 980px;
  color: grey;
  margin: 0 auto;
  padding: 0 4%;
  z-index: 11;
}

// Home page footer items container
.footer-links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 0 14px;
  padding: 0;
}

// Home page footer items
.footer-link-item {
  flex-basis: 25%;
  flex: 0 0 33%;
  margin-bottom: 16px;
  font-size: calc(10px + 0.4vw);
}
</style>