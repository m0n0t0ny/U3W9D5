const home = document.getElementById("home");
const browser = document.getElementById("browser");
const backBtn = document.getElementById("back-btn");
const homeBtn = document.getElementById("home-btn");
const optionsBtn = document.getElementById("options-btn");

backBtn.addEventListener("click", function () {
  contacts.classList.add("d-none");
  browser.classList.add("d-none");
  home.classList.remove("d-none");
});
homeBtn.addEventListener("click", function () {
  contacts.classList.add("d-none");
  browser.classList.add("d-none");
  home.classList.remove("d-none");
});
optionsBtn.addEventListener("click", function () {
  contacts.classList.add("d-none");
  browser.classList.add("d-none");
  home.classList.remove("d-none");
});

// * ---------- chrome ----------

const chromeBrowser = document.getElementById("chrome-browser");

chromeBrowser.addEventListener("click", function () {
  home.classList.add("d-none");
  contacts.classList.add("d-none");
  browser.classList.remove("d-none");
});

const topUp5 = document.getElementById("top-up-1");
const topUp10 = document.getElementById("top-up-2");
const topUp15 = document.getElementById("top-up-3");
const topUp25 = document.getElementById("top-up-4");
const topUp50 = document.getElementById("top-up-5");

topUp5.addEventListener("click", function () {
  addcredit(5);
});
topUp10.addEventListener("click", function () {
  addcredit(10);
});
topUp15.addEventListener("click", function () {
  addcredit(15);
});
topUp25.addEventListener("click", function () {
  addcredit(25);
});
topUp50.addEventListener("click", function () {
  addcredit(50);
});

// * ---------- contacts ----------

const contactsBtn = document.getElementById("contacts-btn");
contactsBtn.addEventListener("click", function () {
  home.classList.add("d-none");
  browser.classList.add("d-none");
  contacts.classList.remove("d-none");
});
