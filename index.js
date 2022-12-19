let footer_item_wrapper = document.getElementById("footer-content");
let foooter_content_list_1 = ["Popular Templates",
  "Content Calendar",
  "Product Roadmap",
  "Inventory Tracking",
  "Marketing Campaign Tracking",
  "Event Planning",
  "Show more"];
let foooter_content_list_2 = [
  "Miro",
  "Jira",
  "Clearbit",
  "Loom",
  "Formstack",
  "Show more",
]
let foooter_content_list_3 = [
  "Marketing",

  "Product Operations",

  "Human Resources",

  "Sales",

  "Operations",

  "Show more",
]
let foooter_content_list_4 = [
  "Webinars",
  "Demos",
  "Guides",
  "Articles",
  "Community",
  "Show more",
]
let foooter_content_list_5 = [
  "About",
  "Careers",
  "Blog",
  "Status",
  "Newsroom",
]
let footArr = [];
function renderFooterList(heading, data) {
  let arr1 = `<div class="footer-content-list">
    <h3 class="footer-list-items-heading">${heading}</h3>
    <div class="footer-content-wrapper">
    ${data.map((item) => {
    return `<p class="footer-list-items"><a  href="#">${item}</a></p>`
  }).join(" ")}
  </div>
  </div>`
  footArr.push(arr1);
}
renderFooterList("Popular Templates", foooter_content_list_1);
renderFooterList("Popular Extensions", foooter_content_list_2);
renderFooterList("Popular Solutions", foooter_content_list_3);
renderFooterList("Learn More", foooter_content_list_4);
renderFooterList("Company", foooter_content_list_5);
footer_item_wrapper.innerHTML = footArr.join(" ");
function getAsItemList(text) {
  return `<h1>${text}</h1>`
}

let signUp = document.querySelector(".signup")
signUp.addEventListener("click",function(){
    window.location.href="./Navbar/signUp.html"
})

let signIn = document.getElementById("login")
console.log(signIn)
signIn.addEventListener("click",function(){
    console.log('ck')
    window.location.href="./Navbar/signIn.html"
})