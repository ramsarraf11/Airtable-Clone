let filter_item_list = document.getElementById("filter_item_list");
let footer_item_wrapper = document.getElementById("footer-content");
let filter_items = [
  "Content production",
  "Featured",
  "Creative",
  "Event Planning",
  "Everyday Life",
  "Groups, Clubs & Hobbies",
  "HR & Recruiting",
  "Legal",
  "Local Business",
  "Marketing",
  "Nonprofit",
  "Personal",
  "PR & Communications",
  "Product, design, and UX",
  "Project Management",
  "Publishing",
  "Real Estate",
  "Remote work",
  "Sales & Customers",
  "Software Development",
  "Startup",
  "Venture Capital", "Content production",
  "Featured",
  "Creative",
  "Event Planning",
  "Everyday Life",
  "Groups, Clubs & Hobbies",
  "HR & Recruiting",
  "Legal",
  "Local Business",
  "Marketing",
  "Nonprofit",
  "Personal",
  "PR & Communications",
  "Product, design, and UX",
  "Project Management",
  "Publishing",
  "Real Estate",
  "Remote work",
  "Sales & Customers",
  "Software Development",
  "Startup",]
renderFilterItems(filter_items);
function renderFilterItems(data) {
  filter_item_list.innerHTML = data.map((item) => {
    return `<a href= "#"><p class="filter-items">${item}</p></a>`
  }).join(" ")
}
let imageWrapper = document.getElementById('image-list-wrapper-top')
let topImageItems = [
  {
    text: "Content Calender", color: `linear-gradient(
        rgba(29, 20, 206, 0.5),
        rgba(21, 7, 113, 0.5),
        rgba(17, 54, 154, 0.5),
        rgba(28, 10, 144, 0.5)
      )`, image: './Image/image_1.png'
  },
  {
    text: "Project Tracker", color: `linear-gradient(
        rgba(232, 29, 103, 0.5),
        rgba(189, 19, 143, 0.5),
        rgba(245, 36, 196, 0.5),
        rgba(250, 37, 126, 0.5)
      )`, image: './Image/image_2.jpg'
  },
  {
    text: "Marketing Campaign Tracking", color: `linear-gradient(
        rgba(137, 29, 232, 0.5),
        rgba(137, 29, 232, 0.5),
        rgba(137, 29, 232, 0.5),
        rgba(137, 29, 232, 0.5)
      )`, image: './Image/image_2.jpg'
  }
]
let content_list_1 = [
  { heading: "Digial Video Production", desc: "Video production can seem daunting at first, but the key to any complicated, collaborative project is organization. This digital video product template is perfect for keeping your entire team, from a small in-house corporate video content team to a studio with camera operators, video editors, and...", img: './MidContentImages/1.jpeg' },
  { heading: "Social Media Calendar", desc: "World-class social media teams move fast. Part content calendar, part culture calendar, this social template helps you wrangle the unwrangle-able by showcasing your important events and dates directly alongside your posts. With this template you can easily plan your day, week, month, and moving...", img: './MidContentImages/2.jpg' },
  { heading: "Blog Editorial Calendar", desc: "Even the most battle-hardened editorial team needs a plan of attack. And that plan is called an editorial calendar. It’s a crucial tool for everything from brainstorming blog topics, to setting deadlines and analyzing content performance. Our template saves you time by acting as a single source...", img: './MidContentImages/3.jpg' }
]
let content_list_2 = [
  { heading: "Indie Film Production", desc: " Manage every step from script to screen! You can use this template to plan out scenes, shots, props and actors for your next film project. ", img: './MidContentImages/4.jpg' },
  { heading: "Novel Planning", desc: " Manage every step from script to screen! You can use this template to plan out scenes, shots, props and actors for your next film project. ", img: './MidContentImages/5.jpg' },
  { heading: "Art Gallery Management", desc: " Manage every step from script to screen! You can use this template to plan out scenes, shots, props and actors for your next film project. ", img: './MidContentImages/6.jpg' },
]
let content_list_3 = [
  { heading: "Event Planning", desc: "Everyone is an event planner, even when said planning may be as simple as a weeknight dinner. For events with many moving parts, you need an event planning template. No matter what the occasion—your company’s annual conference or your two-year-old’s birthday—a handy template helps you visualize...", img: './MidContentImages/7.jpg' },
  { heading: "Event Marketing", desc: "Everyone is an event planner, even when said planning may be as simple as a weeknight dinner. For events with many moving parts, you need an event planning template. No matter what the occasion—your company’s annual conference or your two-year-old’s birthday—a handy template helps you visualize...", img: './MidContentImages/8.jpg' },
  { heading: "Nonprofit Gala", desc: "Everyone is an event planner, even when said planning may be as simple as a weeknight dinner. For events with many moving parts, you need an event planning template. No matter what the occasion—your company’s annual conference or your two-year-old’s birthday—a handy template helps you visualize...", img: './MidContentImages/9.jpg' },
]
let content_list_4 = [
  { heading: "Restaurant Field Guide", desc: "For the foodie, an easy way to organize restaurants and reservations. List the restaurants you'd like to visit, and jot down your own personal reviews for ones you've already visited.", img: './MidContentImages/10.jpg' },
  { heading: "Pet Medical History", desc: "For the foodie, an easy way to organize restaurants and reservations. List the restaurants you'd like to visit, and jot down your own personal reviews for ones you've already visited.", img: './MidContentImages/11.jpg' },
  { heading: "Apartment Hunting", desc: "For the foodie, an easy way to organize restaurants and reservations. List the restaurants you'd like to visit, and jot down your own personal reviews for ones you've already visited.", img: './MidContentImages/12.jpg' },
]
let content_list_5 = [
  { heading: "Book Catalog", desc: "Are you a bookworm who can never quite remember the title of that next book you were going to read? Do you have multiple reading lists spread across Amazon, Goodreads, your local library, and on the backs of dozens of receipts in your purse? Do you have trouble remembering what is already in your...", img: './MidContentImages/13.jpg' },
  { heading: "Soccer Club", desc: "Are you a bookworm who can never quite remember the title of that next book you were going to read? Do you have multiple reading lists spread across Amazon, Goodreads, your local library, and on the backs of dozens of receipts in your purse? Do you have trouble remembering what is already in your...", img: './MidContentImages/14.jpg' },
  { heading: "Tournament Bracket", desc: "Are you a bookworm who can never quite remember the title of that next book you were going to read? Do you have multiple reading lists spread across Amazon, Goodreads, your local library, and on the backs of dozens of receipts in your purse? Do you have trouble remembering what is already in your...", img: './MidContentImages/15.jpg' },
]
let content_list_6 = [
  { heading: "Simple Applicant Tracker", desc: "A dozen candidates apply for a job. Each is in different steps of the process. And each requires dedicated emails, messages, follow-ups—and a partridge in a pear tree. If this is starting to sound like one of those “one train leaves Boston going 75mph” math problems, you’d be right But...", img: './MidContentImages/17.jpg' },
  { heading: "Employee Directory", desc: "A dozen candidates apply for a job. Each is in different steps of the process. And each requires dedicated emails, messages, follow-ups—and a partridge in a pear tree. If this is starting to sound like one of those “one train leaves Boston going 75mph” math problems, you’d be right But...", img: './MidContentImages/16.jpg' },
  { heading: "Contractor Time Tracker", desc: "A dozen candidates apply for a job. Each is in different steps of the process. And each requires dedicated emails, messages, follow-ups—and a partridge in a pear tree. If this is starting to sound like one of those “one train leaves Boston going 75mph” math problems, you’d be right But...", img: './MidContentImages/18.jpg' },
]
let content_list_7 = [
  { heading: "Legal Case Tracking and Billing", desc: "With this template, you can stay on top of your cases, clients, and billing, no matter what's thrown at you.", img: './MidContentImages/19.jpeg' },
  { heading: "Legal Case Analysis", desc: "With this template, you can stay on top of your cases, clients, and billing, no matter what's thrown at you.", img: './MidContentImages/20.jpg' },
  { heading: "Legal Matter Management", desc: "With this template, you can stay on top of your cases, clients, and billing, no matter what's thrown at you.", img: './MidContentImages/21.jpg' },
]
let content_list_8 = [
  { heading: "Product Ops for Teams", desc: "Tens of thousands of new products are introduced to the market each year—and almost half of them fail. Three big reasons products fail to live up to expectations? Inaccessible customer insights, misaligned strategy, and poor execution. And that's exactly where Airtable can help.With a slew...", img: './MidContentImages/22.png' },
  { heading: "Product Ops for Organization", desc: "Tens of thousands of new products are introduced to the market each year—and almost half of them fail. Three big reasons products fail to live up to expectations? Inaccessible customer insights, misaligned strategy, and poor execution. And that's exactly where Airtable can help.With a slew...", img: './MidContentImages/22.png' },
  { heading: "Product Planning", desc: "Tens of thousands of new products are introduced to the market each year—and almost half of them fail. Three big reasons products fail to live up to expectations? Inaccessible customer insights, misaligned strategy, and poor execution. And that's exactly where Airtable can help.With a slew...", img: './MidContentImages/23.jpg' },
]
let content_list_9 = [
  { heading: "Project Tracker", desc: "Impending deadlines. Critical collaborators. Tiny tasks. They all make up a small—but essential—part of project tracking. And while many project tracking tools are good at managing a part of the process, very few do it all well.That's why we built this project-tracking template. With...", img: './MidContentImages/17.jpg' },
  { heading: "Science Museum Project Tracker", desc: "Impending deadlines. Critical collaborators. Tiny tasks. They all make up a small—but essential—part of project tracking. And while many project tracking tools are good at managing a part of the process, very few do it all well.Thats why we built this project-tracking template. With...", img: './MidContentImages/18.jpg' },
  { heading: "Non Proit program Management", desc: "Impending deadlines. Critical collaborators. Tiny tasks. They all make up a small—but essential—part of project tracking. And while many project tracking tools are good at managing a part of the process, very few do it all well.That's why we built this project-tracking template. With...", img: './MidContentImages/14.jpg' },
]
let topImages = document.querySelectorAll('.image');
let mid_container_list = document.querySelector(".mid-container-list");
console.log(mid_container_list)

let arr = []
function renderMidContent(data, heading) {
  let newArr = `<div class="content-items">
    <h2 class="heading">${heading}</h2>
    <div class="content-items-wrapper">
      ${data.map((item) => {
    return `<div class="content-wrapper">
        <img
          src="${item.img}"
          alt=""
        />
        <div class="mid-item-content">
          <h3>${item.heading.substring(0, 22)}</h3>
          <p>
           ${item.desc.substring(0, 70)}...
          </p>
        </div>
      </div>`
  }).join(" ")}
    </div>
  </div>`
  arr.push(newArr);
  console.log(arr)
}

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
renderMidContent(content_list_1, "Content Production")
renderMidContent(content_list_2, "Creative")
renderMidContent(content_list_3, "Event Planning");
renderMidContent(content_list_4, "Everyday Life")
renderMidContent(content_list_5, "Groups, Clubs & Hobbies")
renderMidContent(content_list_6, "HR & Recruiting")
renderMidContent(content_list_7, "Legal")
renderMidContent(content_list_8, "Product, design, and UX")
renderMidContent(content_list_9, "Project Management")
mid_container_list.innerHTML = arr.join(" ")


