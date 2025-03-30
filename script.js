

// Initialize variables
let p = 0;
let uV1 = 15;
let uV2 = 150;
let autoClickerCount = 0;
let redbulls = 1;
let ap = 0;
let fester = 1;

// Load saved values from cookies if they exist
window.onload = function() {
    p = getCookie("points") ? parseInt(getCookie("points")) : 0;
    uV1 = getCookie("uV1") ? parseInt(getCookie("uV1")) : 15;
    uV2 = getCookie("uV2") ? parseInt(getCookie("uV2")) : 150;
    autoClickerCount = getCookie("autoClickers") ? parseInt(getCookie("autoClickers")) : 0;
    redbulls = getCookie("redbull") ? parseInt(getCookie("redbulls")) : 1;
    ap = getCookie("ap") ? parseInt(getCookie("ap")) : 0;
    fester = getCookie("fester") ? parseInt(getCookie("fester")) : 1;
    updateDisplay();

  if(redbulls >= 2) {
    document.getElementById("redbull").style.display = "none";
  }

  if(fester >= 2) {
    document.getElementById("bedriftfest").style.display = "none";
  }
}

const str1 = "Du har ";
const str2 = " poeng";
const uv1str1 = " Autoclicker - ";
const uv2str1 = " Underbetalte Arbeidere - "

let comb = str1 + p + str2;
let uv1comb = autoClickerCount + uv1str1 + uV1;
let uv2comb = ap + uv2str1 + uV2;



// Function to update display
function updateDisplay() {
  
  comb = str1 + p + str2;
  uv1comb = autoClickerCount + uv1str1 + uV1;
  uv2comb = ap + uv2str1 + uV2;
  document.title = comb;
  document.getElementById("titleforgame").innerHTML = comb;
  document.getElementById("upgrade1").innerHTML = uv1comb;
  document.getElementById("upgrade2").innerHTML = uv2comb;
}

// Wait for DOM to be ready before first update
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateDisplay);
} else {
  updateDisplay();
}

// Auto-clicker function
setInterval(function() {
    if (autoClickerCount > 0) {
        p += (autoClickerCount * redbulls);
        updateDisplay();
    }
    if(ap > 0) {
        p += ((ap * 10) * fester);
        updateDisplay();
    }
    setCookie("points", p, 365);
}, 1000);


// Check display states after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    if (redbulls >= 2) {
      document.getElementById("redbull").style.display = "none";
    }
    if (fester >= 2) {
      document.getElementById("bedriftfest").style.display = "none"
    }
  });
} else {
  if (redbulls >= 2) {
    document.getElementById("redbull").style.display = "none";
  }
  if (fester >= 2) {
    document.getElementById("bedriftfest").style.display = "none"
  }
}


function clix() {
  p += (1 * redbulls);
  comb = str1 + p + str2;
  document.title = comb;
  document.getElementById("titleforgame").innerHTML = comb;
  // Save points to cookie
  setCookie("points", p, 365);
}

// Cookie helper functions
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}


function upgrade1() {
  if (p >= uV1) {
    p -= uV1;
    uV1 = Math.round(uV1 * 1.15);
    autoClickerCount += 1;
    comb = str1 + p + str2;
    
    document.title = comb;
    uv1comb = autoClickerCount + uv1str1 + uV1;
    document.getElementById("titleforgame").innerHTML = comb;
    document.getElementById("upgrade1").innerHTML = uv1comb;
    setCookie("points", p, 365);
    setCookie("uV1", uV1, 365);
    setCookie("autoClickers", autoClickerCount, 365);
  }
}

function upgrade2() {
  if (p >= uV2) {
    p -= uV2;
    uV2 = Math.round(uV2 * 1.15);
    ap += 1;
    comb = str1 + p + str2;

    document.title = comb;
    uv2comb = ap + uv2str1 + uV2;
    document.getElementById("titleforgame").innerHTML = comb;
    document.getElementById("upgrade2").innerHTML = uv2comb;
    setCookie("points", p, 365);
    setCookie("uV2", uV2, 365);
    setCookie("ap", ap, 365);
  }
}

function reseth() {
  p = 0;
  uV1 = 15;
  autoClickerCount = 0;
  ap = 0;
  redbulls = 1;
  fester = 1;
  uV2 = 150;
  comb = str1 + p + str2;
  uv1comb = autoClickerCount + uv1str1 + uV1;
  uv2comb = ap + uv2str1 + uV2;
  document.title = comb;
  document.getElementById("titleforgame").innerHTML = comb;
  document.getElementById("upgrade1").innerHTML = uv1comb;
  document.getElementById("upgrade2").innerHTML = uv2comb;
  document.getElementById("redbull").style.display = "block";
  document.getElementById("bedriftfest").style.display = "block";
  // Save points to cookie
  setCookie("points", p, 365);
  setCookie("uV1", uV1, 365);
  setCookie("uV2", uV2, 365);
  setCookie("autoClickers", autoClickerCount, 365);
  setCookie("ap", ap, 365);
}


function redbull() {
 if (p >= 200) {
   p -= 200;
   comb = str1 + p + str2;
   document.title = comb;
   redbulls += 1;
   document.getElementById("titleforgame").innerHTML = comb;
   document.getElementById("redbull").style.display = "none";
   // Save points to cookie
   setCookie("points", p, 365);
   setCookie("redbulls", redbulls, 365);
 }
}

function fest() {
  if (p >= 1000) {
     p -= 1000;
     comb = str1 + p + str2;
     document.title = comb;
     fester += 1;
     document.getElementById("titleforgame").innerHTML = comb;
     document.getElementById("bedriftfest").style.display = "none";
     // Save points to cookie
     setCookie("points", p, 365);
     setCookie("fester", fester, 365);
   }
}