/* ============================================================
   DATA
============================================================ */
const skills = [
  {
    icon: "⚛️",
    title: "Frontend Development",
    tags: [
      {
        name: "React.js",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      },
      {
        name: "JavaScript",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "Tailwind CSS",
        img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "HTML5",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      },
      {
        name: "CSS3",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      },
      {
        name: "Bootstrap",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original-wordmark.svg",
      },
    ],
  },
  {
    icon: "🖥️",
    title: "Backend Development",
    tags: [
      {
        name: "Node.js",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "Express.js",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      },
    ],
  },
  {
    icon: "☁️",
    title: "Backend as a Service",
    tags: [
      {
        name: "Firebase",
        // img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
      },
      // {
      //   name: "Appwrite",
      //   img: "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg",
      // },
    ],
  },
  {
    icon: "🗄️",
    title: "Databases & ORM",
    tags: [
      {
        name: "MongoDB",
        // img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        img: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
      },
      {
        name: "MySQL",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        // img: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
      },
      {
        name: "Prisma",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
      },
      {
        name: "Drizzle",
        img: "https://avatars.githubusercontent.com/u/108468352?s=200&v=4",
      },
    ],
  },
  {
    icon: "🛠️",
    title: "Dev Tools & Version Control",
    tags: [
      {
        name: "Git",
        img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      },
      {
        name: "GitHub",
        img: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
      },
      {
        name: "VS Code",
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      },
    ],
  },
  {
    icon: "🎨",
    title: "UI / Design Tools",
    tags: [
      {
        name: "Figma",
        img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      },
      {
        name: "Canva",
        img: "https://freelogopng.com/images/all_img/1656733637logo-canva-png.png",
      },
    ],
  },
];

const projects = [
    {
    title: "Makewell Agri Equipments Website",
    type: "frontend",
    label: "Frontend",
    img: "image/MakeWell.png",
    tools: ["React.js", "Tailwind CSS", "JavaScript", "Figma"],
    desc: "Developed a responsive multi-page website for Makewell Agri Equipments using React and Tailwind CSS, featuring product showcases, detailed product information, quotation request functionality, company profiles, smooth navigation, and a client-focused, mobile-first experience optimised for performance and accessibility.",
    github: "",
    live: "https://vyom1912.github.io/Makewell-Agri-Equipments/",
  },
  {
    title: "PublishPro- A Blogging Platform",
    type: "fullstack",
    label: "Full Stack",
    img: "image/PublishPro.png",
    tools: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Axios",
      "Cloudinary",
      "TinyMCE",
    ],
    desc: "A production-ready MERN blogging platform featuring secure JWT authentication, rich text editing, Cloudinary image uploads, search, and interactive features like likes, bookmarks, comments, and user dashboards.",
    github: "https://github.com/Vyom1912/PublishPro-A-Blogging-Platform.git",
    live: "https://publishpro-a-blogging-platform.onrender.com/",
  },
  {
    title: "URL Shortener",
    type: "fullstack",
    label: "Full Stack",
    img: "image/UrlShortener.png",
    tools: ["Node.js", "Express.js", "MongoDB", "EJS", "Zod", "JWT", "Argon2"],
    desc: "Full-stack URL shortener with custom shortcodes, JWT authentication, email-based verification & password reset using Nodemailer/MJML, and a complete link management dashboard.",
    github: "https://github.com/Vyom1912/urlShortener.git",
    live: "https://urlshortener-1osn.onrender.com/",
  },
  {
    title: "FoodZing",
    type: "frontend",
    label: "Frontend",
    img: "image/FoodZing.png",
    tools: ["React.js", "Firebase", "CSS", "Figma"],
    desc: "Responsive food ordering web app with Firebase authentication, real-time Firestore database, cart management, and a clean category-based menu UI across all devices.",
    github: "https://github.com/Vyom1912/FoodZing-A-Food-Ordering-Website.git",
    live: "https://vyom1912.github.io/FoodZing-A-Food-Ordering-Website/",
  },

  // {
  //   title: "Rakhi Store",
  //   type: "frontend",
  //   label: "Frontend",
  //   img: "image/RakhiStore.png",
  //   tools: ["React.js", "CSS", "React Router", "Figma"],
  //   desc: "Freelance e-commerce website for handmade rakhis with multi-page routing, cart functionality, SEO-friendly meta tags, and live deployment on a custom domain via Hostinger.",
  //   github: "https://github.com/Vyom1912/A-Rakhi-Store.git",
  //   live: "https://vyom1912.github.io/A-Rakhi-Store/",
  // },
  // {
  //   title: "Music Player",
  //   type: "frontend",
  //   label: "Frontend",
  //   img: "image/Musicplayer.png",
  //   tools: ["HTML", "CSS", "JavaScript"],
  //   desc: "Spotify-inspired custom music player with play/pause, shuffle, repeat, volume control, favorites list, and MP3 download — fully responsive with a custom-built UI.",
  //   github: "https://github.com/Vyom1912/Music-Player.git",
  //   live: "https://vyom1912.github.io/Music-Player/",
  // },
  {
    title: "The Maroons — Landing Page",
    type: "frontend",
    label: "Frontend",
    img: "image/TheMaroons.png",
    tools: ["HTML", "CSS", "JavaScript"],
    desc: 'Modern, animated startup landing page for "The Maroons" with smooth scroll animations, service/contact sections, and immersive Diwali-themed particle background.',
    github: "https://github.com/Vyom1912/TheMaroons.git",
    live: "https://vyom1912.github.io/TheMaroons/",
  },
  // {
  //   title: "Notes Maker (PatelKeeps)",
  //   type: "frontend",
  //   label: "Frontend",
  //   img: "image/Notes.png",
  //   tools: ["HTML", "CSS", "JavaScript", "localStorage"],
  //   desc: "Google Keep-inspired note-taking web app with create, edit, and delete functionality. Notes persist via localStorage with a clean, minimal UI for productive organization.",
  //   github: "https://github.com/Vyom1912/Notes-Maker.git",
  //   live: "https://vyom1912.github.io/Notes-Maker/",
  // },
];

/* ============================================================
   LOADER
============================================================ */
const loaderName = document.getElementById("loader-name");
const nameLetters = "VYOM PATEL".split("");
nameLetters.forEach((l, i) => {
  const span = document.createElement("span");
  span.textContent = l === " " ? "\u00A0" : l;
  span.style.animationDelay = `${i * 80}ms`;
  loaderName.appendChild(span);
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader-overlay").classList.add("hidden");
    AOS.init({ once: true, duration: 700, offset: 60 });
  }, 2000);
});

/* ============================================================
   THEME TOGGLE — removed (single fixed theme)
============================================================ */

/* ============================================================
   NAVBAR — mobile burger
============================================================ */
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");
const navbar = document.getElementById("navbar");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

// Close when a nav link is clicked
// mobileNav.querySelectorAll("a").forEach((a) => {
//   a.addEventListener("click", () => {
//     burger.classList.remove("open");
//     mobileNav.classList.remove("open");
//   });
// });

mobileNav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(a.getAttribute("href"));

    burger.classList.remove("open");
    mobileNav.classList.remove("open");

    setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300); // wait for menu close animation
  });
});

// Close when clicking outside the navbar
document.addEventListener("click", (e) => {
  if (mobileNav.classList.contains("open") && !navbar.contains(e.target)) {
    burger.classList.remove("open");
    mobileNav.classList.remove("open");
  }
});

// Close on resize back to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    burger.classList.remove("open");
    mobileNav.classList.remove("open");
  }
});

/* ============================================================
   ACTIVE NAV ON SCROLL + PROGRESS BAR
============================================================ */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
const progressBar = document.getElementById("progress-bar");
const scrollTopBtn = document.getElementById("scrollTop");
const brandImg = document.getElementById("brand-img");
const brandTxt = document.getElementById("brand-txt");

// Detect when navbar is stuck (hero has scrolled out of view)
const heroSection = document.getElementById("hero");
const navbarPlaceholder = document.getElementById("navbar-placeholder");

function updateNavbarFixed() {
  // navbar's natural top offset from the document
  const navbarTop = navbarPlaceholder.classList.contains("active")
    ? navbar.offsetTop  // already fixed — use placeholder position
    : navbar.getBoundingClientRect().top + window.scrollY;

  const shouldFix = window.scrollY >= navbarTop;

  if (shouldFix && !navbar.classList.contains("fixed")) {
    navbar.classList.add("fixed", "scrolled");
    navbarPlaceholder.classList.add("active");
    if (brandImg) brandImg.style.display = "none";
    if (brandTxt) brandTxt.style.opacity = "1";
  } else if (!shouldFix && navbar.classList.contains("fixed")) {
    navbar.classList.remove("fixed", "scrolled");
    navbarPlaceholder.classList.remove("active");
    if (brandImg) brandImg.style.display = "block";
    if (brandTxt) brandTxt.style.opacity = "0";
  }
}

// Store the navbar's natural offset once on load
let navbarNaturalTop = null;
window.addEventListener("load", () => {
  navbarNaturalTop = navbar.getBoundingClientRect().top + window.scrollY;
});

function updateNavbarFixedStable() {
  if (navbarNaturalTop === null) return;
  const shouldFix = window.scrollY >= navbarNaturalTop;

  if (shouldFix && !navbar.classList.contains("fixed")) {
    navbar.classList.add("fixed", "scrolled");
    navbarPlaceholder.classList.add("active");
    if (brandImg) brandImg.style.display = "none";
    if (brandTxt) brandTxt.style.opacity = "1";
  } else if (!shouldFix && navbar.classList.contains("fixed")) {
    navbar.classList.remove("fixed", "scrolled");
    navbarPlaceholder.classList.remove("active");
    if (brandImg) brandImg.style.display = "block";
    if (brandTxt) brandTxt.style.opacity = "0";
  }
}

window.addEventListener("scroll", () => {
  // Fix navbar once it reaches the top
  updateNavbarFixedStable();

  // Progress bar
  const scrolled =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = scrolled + "%";

  // Scroll top button
  scrollTopBtn.classList.toggle("visible", window.scrollY > 500);

  // Active nav
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute("id");
  });
  navLinks.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
  mobileNavLinks.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

scrollTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);

/* ============================================================
   STICKY BAR (after hero) — guard against missing elements
============================================================ */
const stickyBar = document.getElementById("stickybar");
const sbImg = document.getElementById("sb-img");
const sbTxt = document.getElementById("sb-txt");
const sbBurger = document.getElementById("sbBurger");
const sbMobileNav = document.getElementById("sbMobileNav");
const sbLinks = document.querySelectorAll(".sb-links a");

// Stuck detection for stickybar — when hero leaves viewport
if (stickyBar) {
  const sbObserver = new IntersectionObserver(
    ([entry]) => {
      const stuck = !entry.isIntersecting;
      stickyBar.classList.toggle("sb-stuck", stuck);
      if (sbImg) sbImg.style.display = stuck ? "none" : "block";
      if (sbTxt) sbTxt.style.opacity = stuck ? "1" : "0";
    },
    { threshold: 0 },
  );
  sbObserver.observe(document.getElementById("hero"));
}

// Active link highlight (reuse scroll listener)
if (sbLinks.length) {
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute("id");
    });
    sbLinks.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  });
}

// Burger toggle
if (sbBurger && sbMobileNav) {
  sbBurger.addEventListener("click", () => {
    sbBurger.classList.toggle("open");
    sbMobileNav.classList.toggle("open");
  });

  // Close on link click
  sbMobileNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      sbBurger.classList.remove("open");
      sbMobileNav.classList.remove("open");
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (
      sbMobileNav.classList.contains("open") &&
      !stickyBar.contains(e.target)
    ) {
      sbBurger.classList.remove("open");
      sbMobileNav.classList.remove("open");
    }
  });

  // Close on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      sbBurger.classList.remove("open");
      sbMobileNav.classList.remove("open");
    }
  });
}

/* ============================================================
   TYPING EFFECT
============================================================ */
const lines = [
  "Full Stack Developer",
  "React.js Enthusiast",
  "UI/UX Designer",
  "Problem Solver",
];
let li = 0,
  ci = 0,
  deleting = false;
const typedEl = document.getElementById("typed-text");

function tick() {
  const line = lines[li];
  const cursor = '<span class="cursor"></span>';
  if (!deleting) {
    ci++;
    typedEl.innerHTML = line.slice(0, ci) + cursor;
    if (ci === line.length) {
      deleting = true;
      setTimeout(tick, 1800);
      return;
    }
  } else {
    ci--;
    typedEl.innerHTML = line.slice(0, ci) + cursor;
    if (ci === 0) {
      deleting = false;
      li = (li + 1) % lines.length;
    }
  }
  setTimeout(tick, deleting ? 50 : 90);
}
tick();

/* ============================================================
   RENDER SKILLS
============================================================ */
const grid = document.getElementById("skillsGrid");
skills.forEach((cat, i) => {
  const card = document.createElement("div");
  card.className = "skill-card";
  card.setAttribute("data-aos", "fade-up");
  card.setAttribute("data-aos-delay", String(i * 80));

  card.innerHTML = `
    <div class="skill-card-header">
      <div class="skill-card-icon">${cat.icon}</div>
      <div class="skill-card-title">${cat.title}</div>
    </div>
    <div class="skill-tags">
      ${cat.tags
        .map(
          (t) => `
        <div class="skill-tag">
          <img src="${t.img}" alt="${t.name}" />
          ${t.name}
        </div>
      `,
        )
        .join("")}
    </div>
  `;
  grid.appendChild(card);
});

/* ============================================================
   RENDER PROJECTS
============================================================ */
const pgrid = document.getElementById("projectsGrid");

function renderProjects(filter) {
  pgrid.innerHTML = "";
  projects
    .filter((p) => filter === "all" || p.type === filter)
    .forEach((p, i) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.setAttribute("data-aos", "fade-up");
      card.setAttribute("data-aos-delay", String(i * 80));

      const githubBtn = p.github
        ? `<a href="${p.github}" target="_blank" rel="noopener" class="project-link">
             <i class="fa-brands fa-github"></i> Code
           </a>`
        : `<button class="project-link disabled" disabled title="Source code is private for this client project.">
             <i class="fa-brands fa-github"></i> Private
           </button>`;

      card.innerHTML = `
        <div class="project-thumb">
          <img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.style.display='none'" />
          <div class="project-thumb-overlay"></div>
          <div class="project-badge badge-${p.type}">${p.label}</div>
        </div>

        <div class="project-body">
          <div class="project-header">
            <div class="project-title">${p.title}</div>
          </div>

          <!-- always visible on mobile: title row with expand icon + links -->
          <div class="project-mobile-bar">
            <div class="project-mobile-links">
              ${githubBtn}
              <a href="${p.live}" target="_blank" rel="noopener" class="project-link primary">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Live
              </a>
            </div>
            <button class="project-detail-toggle" aria-label="Show details" aria-expanded="false">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>

          <!-- expandable details (hidden on mobile by default) -->
          <div class="project-details" aria-hidden="true">
            <p class="project-desc">${p.desc}</p>
            <div class="project-tools">
              ${p.tools.map((t) => `<span class="tool-chip">${t}</span>`).join("")}
            </div>
          </div>

          <!-- desktop: links always visible -->
          <div class="project-links project-links-desktop">
            ${githubBtn}
            <a href="${p.live}" target="_blank" rel="noopener" class="project-link primary">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
            </a>
          </div>
        </div>
      `;

      // toggle handler
      const toggleBtn = card.querySelector(".project-detail-toggle");
      const details   = card.querySelector(".project-details");

      toggleBtn.addEventListener("click", () => {
        const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
        const opening  = !expanded;
        toggleBtn.setAttribute("aria-expanded", String(opening));
        details.setAttribute("aria-hidden",     String(!opening));
        card.classList.toggle("details-open", opening);
        toggleBtn.setAttribute("aria-label", opening ? "Hide details" : "Show details");
      });

      pgrid.appendChild(card);
    });
  AOS.refresh();
}

renderProjects("all");

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

/* ============================================================
   CONTACT FORM
============================================================ */
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("form-msg");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Sending… <i class="fa-solid fa-spinner fa-spin"></i>';

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    });
    const data = await res.json();
    if (data.success) {
      formMsg.textContent = "✓ Message sent! I'll get back to you soon.";
      formMsg.className = "success";
      form.reset();
    } else throw new Error();
  } catch {
    formMsg.textContent = "✕ Something went wrong. Please try again.";
    formMsg.className = "error";
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML =
      'Send Message <i class="fa-solid fa-paper-plane"></i>';
  }
});
