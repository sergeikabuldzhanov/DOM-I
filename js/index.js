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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

function $(selector){
  return document.querySelector(selector);
}

function $a(selector){
  return document.querySelectorAll(selector);
}

const nav = $a('.container header nav a');
console.log(nav);
nav.forEach((elem, i)=>elem.innerHTML = siteContent.nav[`nav-item-${i+1}`]);

const logoImg = $('#logo-img');
logoImg.src = siteContent.nav["img-src"];

const ctah1 =$('.cta .cta-text h1');
ctah1.textContent = siteContent.cta.h1;

const ctaButton =$('.cta .cta-text button');
ctaButton.textContent = siteContent.cta.button;

const ctaimg =$('#cta-img');
ctaimg.setAttribute('src', siteContent.cta['img-src']); 

const midimg =$('#middle-img');
midimg.setAttribute('src', siteContent['main-content']['middle-img-src']); 

const feath4 = $('.top-content .text-content:first-child h4');
feath4.textContent = siteContent['main-content']['features-h4'];

const featContent = $('.top-content .text-content p');
featContent.innerHTML = siteContent['main-content']['features-content'];

const abouth4 = $('.top-content .text-content:last-child h4');
abouth4.textContent = siteContent['main-content']['about-h4'];

const aboutContent = $('.top-content .text-content:last-child p');
aboutContent.innerHTML = siteContent['main-content']['about-content'];

const servicesh4 = $('.bottom-content .text-content:nth-child(1) h4');
servicesh4.textContent = siteContent['main-content']['services-h4'];

const servicesContent = $('.bottom-content .text-content:nth-child(1) p');
servicesContent.innerHTML = siteContent['main-content']['services-content'];

const producth4 = $('.bottom-content .text-content:nth-child(2) h4');
producth4.textContent = siteContent['main-content']['product-h4'];

const productContent = $('.bottom-content .text-content:nth-child(2) p');
productContent.innerHTML = siteContent['main-content']['product-content'];

const visionh4 = $('.bottom-content .text-content:nth-child(3) h4');
visionh4.textContent = siteContent['main-content']['vision-h4'];

const visionContent = $('.bottom-content .text-content:nth-child(3) p');
visionContent.innerHTML = siteContent['main-content']['vision-content'];

const contact = $('.contact h4');
contact.innerHTML = siteContent['contact']['contact-h4'];

const address = $('.contact p:nth-child(2)');
address.innerHTML = siteContent['contact']['address'];

const phone = $('.contact p:nth-child(3)');
phone.innerHTML = siteContent['contact']['phone'];

const email = $('.contact p:nth-child(4)');
email.innerHTML = siteContent['contact']['email'];

const copyright = $('footer p');
copyright.innerHTML = siteContent.footer.copyright;
