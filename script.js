/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

menuButton.addEventListener("click", () => {

    mobileNav.classList.toggle("active");

});


/* Close mobile menu when a link is clicked */

const mobileLinks =
    document.querySelectorAll(".mobile-nav a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("active");

    });

});


/* =====================================================
   TEST SEARCH
===================================================== */

const testSearch =
    document.getElementById("testSearch");

const testItems =
    document.querySelectorAll(".test-item");

testSearch.addEventListener("input", function () {

    const searchValue =
        this.value.toLowerCase().trim();


    testItems.forEach(item => {

        const testName =
            item.dataset.name.toLowerCase();

        if (testName.includes(searchValue)) {

            item.style.display = "grid";

        } else {

            item.style.display = "none";

        }

    });

});


/* =====================================================
   APPOINTMENT FORM
===================================================== */

const appointmentForm =
    document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "Thank you! Your appointment request has been received. We will contact you shortly."
    );

    appointmentForm.reset();

});