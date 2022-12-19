let footer_item_wrapper = document.getElementById("footer-content");

function crousel(){
    let images=[
        "https://dl.airtable.com/.exploreCoverImages/159009a0cd8c8a0af55b9e0eb7ba54dc/f4897fb4",
        "https://dl.airtable.com/exploreCoverImages%2FJUJ2mDSYO5vGKf6T1hg8_airtable-1-1.jpg",
        "https://dl.airtable.com/.exploreCoverImages/e22dbdccf8066ede5e05522ba0e2f5d5/d0fb8f8b"

];
let crousel_div=document.getElementById("crousel");
let img=document.createElement("img")
let i=0;
setInterval(function(){

if(i===images.length){
    i=0;
}
img.src=images[i]
crousel_div.append(img)
i++;
},3000);

}
crousel();
const universe_data = [
    {
      "image" :"https://dl.airtable.com/.exploreCoverImages/6b490b63954468e2d611aec4f625f7e5/b938dd39",
     "description":"Airtable formula Playground",
      "id":1
    },
    {
    "image":"https://dl.airtable.com/.exploreCoverImages/db8996ab10b888076f11788cf4a111cb/d406a89d ",
      "description":"Neighbour support for",
      "id":2
    },
    {
      "image":"https://dl.airtable.com/exploreCoverImages%2FJC6RxfaRhadyFshTGijv_1-AikyoG7oG3OiwtkltxERAg.jpeg",
        "description":"Britannica's Digital Content Management System",
        "id":3
      },
      {
       "image":"https://dl.airtable.com/exploreCoverImages%2F7d6l7vKpTxuF9RNCqcwh_1_ZfLzXxl1nRHjxvmi8ByvYw.jpeg",
          "description":"COVID-19 Resources and projects",
    
         "id":4
        },
        {
          "image":"https://dl.airtable.com/.exploreCoverImages/c6378902c96ebe11aef8e226153237d9/ebd20af2",
           "description":"Twilio's Lightweight CMS",
            "id":5
          },
          {
            "image":"https://dl.airtable.com/exploreCoverImages%2FeMxxxndzTZyBzlSeRqbJ_Airtable_Graphic_v1White%202.png",
              "description":"Product Hunt LIVE: Master Quotes Databas",
              "id":6
            },
            {
              "image":"https://dl.airtable.com/exploreCoverImages%2F8MJ3hI2QMkHu9InjCtZQ_exploreCoverImages%252Fd039lXuPRvindsTZvA3u_qhhrsa4_vpo-william-iven.jpg",
                "description":"Insomniac Events' Staffing Template",
                "id":7
              },
              {
                "image":"https://dl.airtable.com/exploreCoverImages%2FT6R3TJc3TweG4WxE5O8X_insomniac.jpg",
                  "description":"Partner Relationship Manager",
                  "id":8
                },
                {
                  "image":"https://dl.airtable.com/exploreCoverImages%2FpIpZmqULQQCmilLTbhH3_camera.png",
                    "description":"Micromobility Venture Landscape",
                    "id":9
                 },
                 {
                  "image":"https://dl.airtable.com/exploreCoverImages%2FIF9qzUiQEefJzgpIRoEQ_pexels-photo-90807.png",
                    "description":"Coding Bootcamp",
                    "id":10
                },
                {
                 "image":"https://dl.airtable.com/exploreCoverImages%2FA6ukU2IS5Cf5QAcJAs0S_hubspot.png",
                    "description":"Rock Paper Airtable",
                    "id":11
                  },
                  {
                    "image":"https://dl.airtable.com/exploreCoverImages%2FAQrDjhCSVWc3UmQjGLIB_jennifer-boyle-6634.jpg",
                      "description":"Personal Dashboard",
                      "id":12
                    },
                    {
                      "image":"https://dl.airtable.com/.exploreCoverImages/15bb2b3bb969666772964e3dcbfa9f31/69131ec7",
                       "description":"Fullscreen Correspodent Network",
                       "id":13
                      },
                      {
                        "image":"https://dl.airtable.com/exploreCoverImages%2FEvptgyFkTwMaObgx2yOL_airtable_dashboard_template.jpg",
                          "description":"Every Star Teck Ever",
                          "id":14
                        },
                        {
                          "image":"https://dl.airtable.com/exploreCoverImages%2F0NAuVhSLQauAVXpjUFuW_20171208_133609.jpg",
                            "description":"Bussiness Expense Tacker",
                            "id":15
                          },
                          {
                            "image":"https://dl.airtable.com/exploreCoverImages%2FhamKBZfjR5mHPT8pUwPT_pexels-photo-590045.jpeg",
                              "description":"Content Agency Manager",
                              "id":16
                            },
                            {
                              "image":"https://dl.airtable.com/exploreCoverImages%2FA6ukU2IS5Cf5QAcJAs0S_hubspot.png",
                                "description":"The Breakout List",
                                "id":17
                              },
                              {
                                "image":"https://dl.airtable.com/exploreCoverImages%2FYMpnvmShTQKqRIIUPqtt_1.png",
                                  "description":"Video Team Management",
                                 "id":18
                                },
                                {
                                  "image":"https://dl.airtable.com/exploreCoverImages%2F8Te7TuxIQ0u0GVUz4hlr_B8.png",
                                    "description":"The best Furniture Planner",
                                    "id":19
                                  },
                                  {
                                    "image":"https://dl.airtable.com/.exploreCoverImages/58210e6f659a281248f970391d0dd39c/03e443c5",
                                      "description":"Personal CRM",
                                      "id":20
                                    },
                                    {
                                      "image":"https://dl.airtable.com/exploreCoverImages%2F3lr6NESwQj2ln6ovPD94_animalz.png",
                                        "description":"Blackjack",
                                        "id":21
                                      }
                                     
  
  ]
  
  const care_data= async()=>{
  
    try{
        let ans= await fetch("http://localhost:3000/universe_data")
    let cate= await ans.json()
    append_data(cate)
    }
    catch(err){
  append_data(universe_data)
    }
  }
  care_data()
  //let cartArr = JSON.parse(localStorage.getItem('cart')) || []
  
  let main_container = document.getElementById("container");
  
  const append_data=(cate)=>{
  
  cate.forEach((el)=>{
    let card=document.createElement("div");
    let productImg=document.createElement("img");
    productImg.src=el.image;
   
    let des=document.createElement("h2");
  des.innerText = el.description;
   
   
  
    card.append(productImg,des);
    main_container.append(card);
  
  })
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

let signUp = document.querySelector(".signup")
signUp.addEventListener("click",function(){
    window.location.href="../Navbar/signUp.html"
})

let signIn = document.querySelector("#login")
signIn.addEventListener("click",function(){
    window.location.href="../Navbar/signIn.html"
})

document.getElementById("img_link").addEventListener("click",(e)=>{
  window.location.href = "./index.html"
})