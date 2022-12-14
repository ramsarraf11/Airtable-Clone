let filter_item_list = document.getElementById("filter_item_list");
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
    "Venture Capital"]
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
    { heading: "Digial Video Production", desc: "Video production can seem daunting at first, but the key to any complicated, collaborative project is organization. This digital video product template is perfect for keeping your entire team, from a small in-house corporate video content team to a studio with camera operators, video editors, and...", img: 'MidContentImages\1.jpeg' },
    { heading: "Social Media Calendar", desc: "World-class social media teams move fast. Part content calendar, part culture calendar, this social template helps you wrangle the unwrangle-able by showcasing your important events and dates directly alongside your posts. With this template you can easily plan your day, week, month, and moving...", img: 'MidContentImages\2.jpg' },
    { heading: "Blog Editorial Calendar", desc: "Even the most battle-hardened editorial team needs a plan of attack. And that plan is called an editorial calendar. It’s a crucial tool for everything from brainstorming blog topics, to setting deadlines and analyzing content performance. Our template saves you time by acting as a single source...", img: 'MidContentImages\3.jpg' }
]
let topImages = document.querySelectorAll('.image');
let mid_container_list = document.querySelector(".mid-container-list");
console.log(mid_container_list)
function renderMidElementContentAsCard(data) {
    data.map((item) => {
        return `
        <div class="content-items-wrapper">
        <div class="content-wrapper">
        <img
            src="${item.img}"
            alt=""
        />
        <div class="mid-item-content">
            <h3>${item.heading}</h3>
            <p>
            ${item.desc.substring(0, 65)}...
            </p>
        </div>
      </div>
            </div>`
    }).join(" ")
}
function renderMidContent(data, heading) {
    let arr = [];
    let newArr = `<div class="content-items">
        <h2 class="heading">${heading}</h2>
           ${renderMidElementContentAsCard(data)}
        </div>`
    arr.push(newArr);
    mid_container_list.innerHTML = arr.join(" ")
}
function getAsItemList(text) {
    return `<h1>${text}</h1>`
}
renderMidContent(content_list_1,"Creative Content")