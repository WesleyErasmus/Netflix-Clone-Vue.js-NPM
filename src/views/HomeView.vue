<template>
  <div class="home">
   <div class="app-wrapper">
            <!-- Home Page Navbar -->
            <header class="home-page-top-menu">
                <nav class="top-navbar">
                    <div class="top-navbar-inner">
                        <div class="top-nav-netflix-logo">
                            <img class="app-logo" src="../assets/netflix-logo.png" alt="Netflix Logo">
                        </div>
                        <ul class="top-nav-menu-btns">
                            <li class="top-nav-btn top-nav-home-btn">Home</li>
                            <li class="top-nav-btn top-nav-tv-shows-btn">TV Shows</li>
                            <li class="top-nav-btn top-nav-movies-btn">Movies</li>
                            <li class="top-nav-btn top-nav-new-btn">New & Popular</li>
                            <li class="top-nav-btn top-nav-my-list-btn">My List</li>
                        </ul>
                    </div>
                    <div class="top-nav-actions-menu">
                        <div class="top-nav-action-item">

                            <!-- Search SVG from Netflix website -->
                            <div class="-top-search-bar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="search-icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                                        fill="currentColor"></path>
                                </svg></div>
                        </div>
                        <div class="top-nav-action-item">
                            <div class="top-nav-kids-toggle">Kids</div>
                        </div>
                        <div class="top-nav-action-item">
                            <div class="top-nav-notifications-bell"><svg width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg"
                                    class="Hawkins-Icon Hawkins-Icon-Standard">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                                        fill="currentColor"></path>
                                </svg></div>
                        </div>
                        <div class="top-nav-action-item">
                            <div class="top-nav-user-menu">Wesley Erasmus</div>
                        </div>
                        <span class="sign-out-dropdown"></span>
                    </div>
                </nav>
            </header>
              <section class="hero-image-trailer-wrapper">

                <!-- STATIC HERO IMAGE FROM NETFLIX FOR TEST STYLING -->
                <div class="hero-image-trailer">
                    <img class="hero-static-image"
                        src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRXM8JbVMT0QdVT9zM99-LIKCdYyF68UL6oaeib1PU8CtEHAoreOb_svxhhqlUhifqNUSca0slwMr2wGxUm-xptEKAENYfRXLjWs.webp?r=94a"
                        alt="">
                </div>

                <!-- Coming Soon Watermark -->
                <span class="coming-soon-watermark">COMING SOON</span>

                <!-- My list title -->
                <h1 class="my-list-heading">My Watch List</h1>

            </section> <!-- End of hero image section -->
               <!-- Movie Slider -->
            <section class="movie-slider-wrapper">
                <div class="movie-slider-container">
                    <button class="slider-handles handle-prev">
                        <div class="handle-prev-icon"><i class="fa-solid fa-chevron-left"></i></div>
                    </button>
                    <div class="movie-slider">
                        <img class="slider-item movie-thumbnail-placeholder"
                            src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeQ2lk5vyoX1gUlXNwE7rH4pGWh1OtR-haIHv4wQ-u13Misc4AyCVkjyu75t0XdGTaGhxq5iZgXVlaqYrNnw3uKaksW07r94MAwAR2lyUBwdGxPXwDkT_rMY9KYA0W1Jk0jtuCyPIFXeEu1anXGSw59xANba2TKpTWE.jpg?r=602"
                            alt="">

                        <img class="slider-item movie-thumbnail-placeholder"
                            src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVIROzcqdItj5G9tBvl7dEXkUHGYaKBTLREXzIXnZtTu61dvtMyQkwtbLHvmZ3krX8El84GfXZmIRIg5ybGIk4ydFbmEMYPNstvhsO0Nr4GX6i73RSZ6YpyFz85GWztIqNFkSBs8ozAFgG-7REV0ufj2ebVxYCH9k6oc5fx1p3CPYLzVl6CPrvkc0OK1mY7bc4pR.jpg?r=8ba"
                            alt="">

                        <img class="slider-item movie-thumbnail-placeholder"
                            src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzuBN13d-AEr2ErlKQygn1XCWhalBpWW7DFTXwufS1rbaiqcwZOBQMQ86J8YOGb1JiNoBAYBq9Tcce1c0m_57XSGACsoP2Y2XNvXHbr6Sx9_GLhgH7_UdFe-wW070q8kcuWCB-4Vb9hwKHkCK8ZbNY-j-oSYEWttUMSZ_S3GzQcQzeaK8jwIIoAaErV1Vx0NPgh.jpg?r=87e"
                            alt="">

                        <img class="slider-item movie-thumbnail-placeholder"
                            src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbg2X9OnoZpNQHEZDQaQLRCdzvM1cuhy2a2FyiCJfp3Q_dcmHjqpG37rOUoLn3DvZ0KmA7mAyaMQCKotn6TLwYxAn-njKYPFaAKtzVJ3ewVl2OwULk8Pje4fmn4Ty2q09OT045TraKrmgw7Mr4kWYcmiM7wC71p132Vd7sgYl0eZfdmbWj0jnhD57aEH2uwsLYVLKXoxfZtcE34bouxwxWkCYmM8Nni-.jpg?r=07c"
                            alt="">

                        <img class="slider-item movie-thumbnail-placeholder"
                            src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABapf4sMxWAFKjSdpJ8SdCVxHOz5IbPTqpOeK-5DXQUHzWxh54dqr5OVSkMFSR7z5b_vFVl3eXpGgKgDSRdR_35tPw2YL-JOtRJz1-Y9pC9V1AiyftmFnEcW1PAqMwc7Mw_lR.jpg?r=6db"
                            alt="">

                        <img class="slider-item movie-thumbnail-placeholder"
                            src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABepImuVeAbB-2OS9z4N_twdJuQJDZsmPJCexriArdIexrMw72WzF8nPEHj--38DJZ6j4q_wDmtPPitZLsGwNHovQwMWWbXRc9RA.jpg?r=425"
                            alt="">

                        <img class="slider-item movie-thumbnail-placeholder"
                            src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXYDVLRSk4BcB4OLG79HPC1CvCBMC_voQnycPJeYjIZnoXsxtJRDk3S3VH1tDJhtcKYwuyc9Hunz_5P15IAJfFn3Cqdwt_6ER3E.jpg?r=69f"
                            alt="">

                        <img class="slider-item movie-thumbnail-placeholder"
                            src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXJPS7-_hglizkr4cnA8Cu4hvF548cm8Jxr_rrPnKr0UYFjgPWE3sIcRGo2oIfcsa8kmHKi1TNY7pFK5UDkahBRy4fJSqaEMl6jVLs2xoiVqWocloJAkFeGeucYBN8aRflzWpgxq-A.jpg?r=460"
                            alt="">

                        <img class="slider-item movie-thumbnail-placeholder"
                            src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZfLMIaq3bipZe5d17IyLZ8qwQ78xgg3MuAIvDNSm2ndWj54Ho-6iUX175_MW-VrcSDGxtnpPQLmcCeLc2fhkUx4D_8uKgZ9JUXD4g3T_dDJDE-N9RQKahlBL2qxC8zNmQJE.jpg?r=ef3"
                            alt="">

                        <img class="slider-item movie-thumbnail-placeholder"
                            src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZg50S25g0OT8aPkNFc9AhRTP5Sw4KlHxavfsZuaihLV_1HorGinhZ6UncJLq2WXDRAhNZ1wrHes7EquI2EK6U-UHd1qkOO9r0oRs0p5_jJ1ret2EyLgaq8nVI92RZ76QUpoSVhIWNlo9F2kcsUyWK54hFf1K-0ONsM.jpg?r=044"
                            alt="">

                        <img class="slider-item movie-thumbnail-placeholder"
                            src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRq9BeDgg3rr9r8BdqEITzau5wqoS9mdGqXdmQBqIovv0_BQjsP5SQP3GaL6HICugU3UIjd2rzZO3ZTPwvSdGU-K5ZLSm60_gn7FVQADK85mSMCxaR6sjfzb1lu0wSmo0xdy.jpg?r=a37"
                            alt="">

                        <img class="slider-item movie-thumbnail-placeholder"
                            src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdvhaK3Zv1B4kxZrbCS4RPKqeZcv06rch2vCn_8H9D2j_kKoZQi6hiIrEZf4gfcgQYWm2vV5XstsmDQSxSfHl9yRdt2gQVOi31p5Ro4lwW49Y9s62Cf-gPwUuf_IC0wr8YRO.jpg?r=b4e"
                            alt="">
                    </div>
                    <button class="slider-handles handle-next">
                        <div class="handle-next-icon"><i class="fa-solid fa-chevron-right"></i></div>
                    </button>
                </div>
            </section>
            <!-- Home page footer -->
            <footer class="home-page-footer">
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
          </div> <!-- End of app-wrapper -->
  </div>
</template>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
// }

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

*, *::after, *::before {
    box-sizing: border-box;
}

ul {
	list-style: none;
    margin: 0;
    padding: 0;
}

a {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
}

body {
    z-index: -10;
    margin: 0;
    padding: 0;
    font-family: 'Arimo', sans-serif;
    -webkit-font-smoothing: antialiased;
    /* background: #000; */
    background: #141414;
    color: #e5e5e5;
    font-size: 16px;
}

.app-wrapper {
    position: relative;
    margin: 0;
    padding: 0;
}

.app-wrapper::after {
    content: '';
    position: absolute;
    background: linear-gradient(77deg,rgba(0,0,0,.6),transparent 85%);
    top: 0;
    left: 0;
    height: 70%;
    opacity: 1;
    right: 26%;
    z-index: 1;
}

.hero-image-trailer-wrapper {
  // IS THIS NEEDED?
    position: relative;
}

/* NAVBAR */
.top-navbar {
    background-image: linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent);
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 68px;
    font-size: 1.2rem;
    padding: 0 4%;
    align-items: center;
    z-index: 2;
}

.top-navbar-inner {
    display: flex;
    align-items: center;
    font-size: 14px;
}

.app-logo {
    height: 25px;
    margin-right: 25px;
}

.top-nav-menu-btns {
    display: flex;
    margin: 0;
    padding: 0;
}

.top-nav-actions-menu {
    display: flex;
    margin-left: 18px;
    font-size: 14px;
    color: #fff;
}

.top-nav-btn {
    display: block;
    margin-left: 18px;
}

.top-nav-home-btn {
    color: #fff;
    font-weight: 700;
}

.top-nav-actions-menu {
    align-items: center;
    display: flex;
    flex-grow: 1;
    height: 100%;
    justify-content: flex-end;
    position: absolute;
    right: 4%;
    top: 0;
}

.top-nav-action-item {
    display: block;
    margin-left: 10px;
}

.sign-out-dropdown {
    border-color: #fff transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    margin-left: 5px;
    position: relative;
    top: -3px;
}

/* PAGE HERO IMAGE */
.hero-static-image {
    position: relative;
    width: 100%;
}

.coming-soon-watermark {
    /* CHANGE FONT SIZE and Position TO BE RESPONSIVE */
    font-size:calc(16px + 4vw);
    font-weight: bold;
    position: absolute;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    top: 30%;
    left: 5%;

}

/* Movie Slider */
.movie-slider-wrapper {
    position: relative;
    z-index: 3;
    width: 100%;
    margin: 0 auto;
    top: -15vh;
    margin-bottom: 4%;
}

.movie-slider-container, .movie-slider {
    /* Netflix background to blend slider with hero image */
    background-color: transparent;
    background-image: linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 68%,#141414);
    background-position: 0 top;
    background-repeat: repeat-x;
    background-size: 100% 100%;
    bottom: -1px;
    opacity: 1;
    top: auto;
    width: 100%;
}

.movie-slider-container {
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    /* margin-bottom: 4%; */
}

.movie-slider {
    display: flex;
    flex-grow: 1;
    margin: 0 0.25rem;
    /* --items-per-screen used with flex and max-width determine how many items display on the screen */
    --items-per-screen: 6;
    --slider-index: 0;
    transform: translateX(calc(var(--slider-index) * -100%));
    transition: transform 250ms ease-in-out;
}

.slider-item {
    aspect-ratio: 16 / 9;
    padding: 0 0.2vw;
    display: flex;
    border-radius: 0.25rem;
    cursor: pointer;
    flex: 0 0 calc(100% / var(--items-per-screen));
    max-width: calc(100% / var(--items-per-screen));
    width: 16.6666667%;
}

.slider-handles {
    /* FIX SPACING ISSUE */
    z-index: 3;
    border: none;
    border-radius: 0.25rem;
    margin: 0 0 0.2vw;
    padding: 0;
    /* double check that width looks right */
    width: 2rem;
    font-size: 2rem;
    color: #fff;
    background: hsla(0,0%,8%,.5);
    background: transparent;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
}

.handle-prev {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0; 
}

.handle-next {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.my-list-heading {
    /* Using calc to dynamically set font size with a min font size of 12px */
    font-size:calc(12px + 1vw);
    position: absolute;
    bottom: 15vh;
    padding-left: 1.5rem;
    margin-left: 1rem;
    z-index: 2;
    margin-bottom: 0.6rem;
}

.slider-heading {
    padding-left: 1.5rem;
    line-height: 1.25vw;
    margin-left: 1rem;
    margin-bottom: 0.6rem;
    display: block;
    font-size: 1.3em;
    font-weight: bold;
}

/* Home page footer */
.home-page-footer {
    position: relative;
    top: -10vh;
    max-width: 980px;
    color: grey;
    margin: 0 auto;
    padding: 0 4%;
    z-index: 2;
}

.footer-links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 0 0 14px;
    padding: 0;
}

.footer-link-item {
    flex-basis: 25%;
    flex: 0 0 33%;
    margin-bottom: 16px;
}

// Media queries
@media screen and (min-width: 1281px) and (max-width: 1600px)
    {

        .movie-slider{
            --items-per-screen: 5;
        }

        .slider-item {
            width: 20%;
        }

        .app-wrapper::after {
            height: 67%;
        }
    
}

@media screen and (min-width: 841px) and (max-width: 1280px) 
    {

        .movie-slider{
            --items-per-screen: 4;
        }

        .slider-item {
            width: 25%;
        }

        .movie-slider-wrapper {
            top: -10vh;
        }
        
        .my-list-heading {
            bottom: 10vh;
        }
        .app-wrapper::after {
            max-height: 60%;
        }
}



@media screen and (min-width: 481px) and (max-width: 840px)
    {
        .movie-slider{
            --items-per-screen: 3;
        }

        .slider-item {
            width: 33.33333%;
        }

        .my-list-heading {
            /* font-size:calc(12px + 1.4vw); */
            font-size: 2vw;
            font-weight: bold;
        }

        .movie-slider-wrapper {
            top: -10vh;
        }
        
        .my-list-heading {
            bottom: 10vh;
        }

        .app-wrapper::after {
            max-height: 49%;
        }
}
@media screen and (min-width: 0) and (max-width: 480px)
    {
    
        .movie-slider{
            --items-per-screen: 2;
        }

        .slider-item {
            width: 50%;
        }

        /* .app-wrapper::after {
            height: 30%;
        } */
}

</style>

<script>
// @ is an alias to /src

export default {

}
</script>
