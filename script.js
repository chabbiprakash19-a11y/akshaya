// ================================
// MOBILE MENU
// ================================

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileNav = document.querySelector(".mobile-nav");

if (mobileMenuBtn && mobileNav) {

    mobileMenuBtn.addEventListener("click", function () {

        // Open / close mobile menu
        mobileNav.classList.toggle("active");

        // Animate hamburger
        mobileMenuBtn.classList.toggle("active");

    });

    // Close menu when a link is clicked
    const mobileLinks = mobileNav.querySelectorAll("a");

    mobileLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mobileNav.classList.remove("active");
            mobileMenuBtn.classList.remove("active");
        });
    });
}

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
