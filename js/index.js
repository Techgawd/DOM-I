const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//Get Elements by ID
const ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"])
//Query Selector
const middleimg = document.querySelector("#middle-img");
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
//Get Elements by Tag Name
const ptag = document.getElementsByTagName("p");
//Get Elements by Class Name
const contact = document.getElementsByClassName("contact");
//Query Selector All
const header = document.querySelectorAll("header");


//Header
const ctatext = document.querySelector(".cta-text h1");
ctatext.textContent = "DOM IS AWESOME";

const ctabutton = document.querySelector(".cta-text button");
ctabutton.textContent = "Get Started";

//Footer
const copyright = document.querySelector("footer p");
copyright.textContent = "Copyright Great Idea! 2018";

//Nav
const link1 = document.getElementById("link1");
link1.textContent = "Services";

const link2 = document.querySelectorAll("a");
link2[1].textContent = "Product";

const link3 = document.querySelectorAll("a");
link3[2].textContent = "Vision";

const link4 = document.querySelectorAll("a");
link4[3].textContent = "Features";

const link5 = document.querySelectorAll("a");
link5[4].textContent = "About";

const link6 = document.querySelectorAll("a");
link6[5].textContent = "Contact";

//Contact Section
const contactheader = document.querySelector(".contact h4");
contactheader.textContent = "Contact";

const contactaddress = document.querySelectorAll(".contact p");
contactaddress[0].textContent = "123 Way 456 Street Somewhere, USA";

const contactnumber = document.querySelectorAll(".contact p");
contactnumber[1].textContent = "1 (888) 888-8888";

const contactemail = document.querySelectorAll(".contact p");
contactemail[2].textContent = "sales@greatidea.io";
//Top Section
const topH1 = document.querySelectorAll(".text-content h4");
topH1[0].textContent = "Features";

const topH2 = document.querySelectorAll(".text-content h4");
topH2[1].textContent = "About";

const topP1 = document.querySelectorAll(".text-content p");
topP1[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const topP2 = document.querySelectorAll(".text-content p");
topP2[1].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//Bottom Section
const bottomH1 = document.querySelectorAll(".text-content h4");
bottomH1[2].textContent = "Services";

const bottomH2 = document.querySelectorAll(".text-content h4");
bottomH2[3].textContent = "Product";

const bottomH3 = document.querySelectorAll(".text-content h4");
bottomH3[4].textContent = "Vision";

const bottomP1 = document.querySelectorAll(".text-content p");
bottomP1[2].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const bottomP2 = document.querySelectorAll(".text-content p");
bottomP2[3].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const bottomP3 = document.querySelectorAll(".text-content p");
bottomP3[4].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";