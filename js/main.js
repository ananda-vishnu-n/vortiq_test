document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     DESKTOP NAVIGATION
     ========================================================= */

  const navItems = document.querySelectorAll(".nav-item.has-dropdown");

  navItems.forEach((navItem) => {
    const trigger = navItem.querySelector(".nav-trigger");

    if (!trigger) return;

    // Click behavior
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const isOpen = navItem.classList.contains("is-open");

      // Close all other dropdowns first
      navItems.forEach((item) => {
        item.classList.remove("is-open");

        const itemTrigger = item.querySelector(".nav-trigger");

        if (itemTrigger) {
          itemTrigger.setAttribute("aria-expanded", "false");
        }
      });

      // Open the clicked dropdown
      if (!isOpen) {
        navItem.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    // Keyboard accessibility
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        trigger.click();
      }

      if (event.key === "Escape") {
        navItem.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  });


  /* =========================================================
     CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
     ========================================================= */

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-item.has-dropdown")) {
      navItems.forEach((navItem) => {
        navItem.classList.remove("is-open");

        const trigger = navItem.querySelector(".nav-trigger");

        if (trigger) {
          trigger.setAttribute("aria-expanded", "false");
        }
      });
    }
  });


  /* =========================================================
     ESCAPE KEY — CLOSE ALL DESKTOP DROPDOWNS
     ========================================================= */

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    navItems.forEach((navItem) => {
      navItem.classList.remove("is-open");

      const trigger = navItem.querySelector(".nav-trigger");

      if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  });


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const mobileMenuToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (mobileMenuToggle && mobileNav) {

  mobileMenuToggle.addEventListener("click", () => {

    const isOpen = mobileNav.classList.toggle("open");

    mobileMenuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });

}

  /* =========================================================
     MOBILE DROPDOWNS
     ========================================================= */

/* =========================================================
   MOBILE DROPDOWNS
   ========================================================= */

const mobileDropdowns = document.querySelectorAll(
  ".mobile-dropdown"
);

mobileDropdowns.forEach((dropdown) => {

  const toggle = dropdown.querySelector(
    ".mobile-dropdown-toggle"
  );

  const content = dropdown.querySelector(
    ".mobile-dropdown-content"
  );

  if (!toggle || !content) return;


  toggle.addEventListener("click", (event) => {

    event.preventDefault();
    event.stopPropagation();

    const isOpen =
      dropdown.classList.contains("is-open");


    /* Close every other top-level dropdown */

    mobileDropdowns.forEach((otherDropdown) => {

      if (otherDropdown !== dropdown) {

        otherDropdown.classList.remove("is-open");

        const otherToggle =
          otherDropdown.querySelector(
            ".mobile-dropdown-toggle"
          );

        if (otherToggle) {
          otherToggle.setAttribute(
            "aria-expanded",
            "false"
          );
        }


        /* Also close nested dropdowns */

        otherDropdown
          .querySelectorAll(".mobile-service-toggle")
          .forEach((serviceToggle) => {

            serviceToggle.classList.remove("is-open");

            serviceToggle.setAttribute(
              "aria-expanded",
              "false"
            );

            const icon =
              serviceToggle.querySelector(
                "span:last-child"
              );

            if (icon) {
              icon.textContent = "+";
            }

          });

      }

    });


    /* Toggle the selected dropdown */

    if (isOpen) {

      dropdown.classList.remove("is-open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

    } else {

      dropdown.classList.add("is-open");

      toggle.setAttribute(
        "aria-expanded",
        "true"
      );

    }

  });

});

/* =========================================================
   MOBILE NESTED DROPDOWNS
   ========================================================= */

const mobileServiceToggles = document.querySelectorAll(
  ".mobile-service-toggle"
);

mobileServiceToggles.forEach((toggle) => {

  const content = toggle.nextElementSibling;

  if (!content) return;


  toggle.addEventListener("click", (event) => {

    event.preventDefault();
    event.stopPropagation();

    const isOpen =
      toggle.classList.contains("is-open");


    /* Close other nested dropdowns
       inside the same top-level menu */

    const parentDropdown =
      toggle.closest(".mobile-dropdown");

    if (parentDropdown) {

      parentDropdown
        .querySelectorAll(".mobile-service-toggle")
        .forEach((otherToggle) => {

          if (otherToggle !== toggle) {

            otherToggle.classList.remove("is-open");

            otherToggle.setAttribute(
              "aria-expanded",
              "false"
            );

            const otherContent =
              otherToggle.nextElementSibling;

            if (otherContent) {
              otherContent.classList.remove("is-open");
            }

            const otherIcon =
              otherToggle.querySelector(
                "span:last-child"
              );

            if (otherIcon) {
              otherIcon.textContent = "+";
            }

          }

        });

    }


    /* Toggle selected nested menu */

    toggle.classList.toggle(
      "is-open",
      !isOpen
    );

    toggle.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    content.classList.toggle(
      "is-open",
      !isOpen
    );


    const icon =
      toggle.querySelector("span:last-child");

    if (icon) {
      icon.textContent =
        isOpen ? "+" : "−";
    }

  });

});


  /* =========================================================
     MOBILE NAV — CLOSE WHEN LINK IS CLICKED
     ========================================================= */

  const mobileLinks = document.querySelectorAll(
    ".mobile-nav a"
  );

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!mobileNav || !mobileMenuToggle) return;

      mobileNav.classList.remove("is-open");

      mobileMenuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });


  /* =========================================================
     DESKTOP HOVER INTENT
     
     Keeps a dropdown open while moving from the navbar
     trigger into the mega-menu.
     ========================================================= */

  navItems.forEach((navItem) => {
    let closeTimer;

    const openMenu = () => {
      clearTimeout(closeTimer);

      navItems.forEach((item) => {
        if (item !== navItem) {
          item.classList.remove("is-open");

          const otherTrigger = item.querySelector(
            ".nav-trigger"
          );

          if (otherTrigger) {
            otherTrigger.setAttribute(
              "aria-expanded",
              "false"
            );
          }
        }
      });

      navItem.classList.add("is-open");

      const trigger = navItem.querySelector(
        ".nav-trigger"
      );

      if (trigger) {
        trigger.setAttribute(
          "aria-expanded",
          "true"
        );
      }
    };

    const scheduleClose = () => {
      clearTimeout(closeTimer);

      closeTimer = setTimeout(() => {
        navItem.classList.remove("is-open");

        const trigger = navItem.querySelector(
          ".nav-trigger"
        );

        if (trigger) {
          trigger.setAttribute(
            "aria-expanded",
            "false"
          );
        }
      }, 120);
    };

    navItem.addEventListener("mouseenter", openMenu);
    navItem.addEventListener("mouseleave", scheduleClose);

    const megaMenu = navItem.querySelector(".mega-menu");

    if (megaMenu) {
      megaMenu.addEventListener("mouseenter", () => {
        clearTimeout(closeTimer);
      });

      megaMenu.addEventListener("mouseleave", scheduleClose);
    }
  });


  /* =========================================================
     SYSTEMS MEGA MENU
     
     The Systems menu is intentionally a simple four-column
     editorial mega-menu, so no tab switching is required.
     ========================================================= */

  const systemsMenu = document.querySelector(
    "#systems-menu"
  );

  if (systemsMenu) {
    systemsMenu.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }


  /* =========================================================
     GENERAL HEADER SCROLL STATE
     ========================================================= */

  const header = document.querySelector(".site-header");

  if (header) {
    const updateHeader = () => {
      if (window.scrollY > 10) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };

    updateHeader();

    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );
  }


  /* =========================================================
     CURRENT PAGE NAVIGATION STATE
     ========================================================= */

  const currentPage = window.location.pathname
    .split("/")
    .pop();

  const navLinks = document.querySelectorAll(
    ".site-nav a"
  );

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (!href) return;

    const linkPage = href
      .split("/")
      .pop()
      .split("#")[0];

    if (
      linkPage &&
      linkPage === currentPage
    ) {
      link.classList.add("is-current");
    }
  });
});