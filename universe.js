function crousel(){
    let images=[
        "file:///C:/Users/Naveen%20Kumar/OneDrive/Desktop/cw/overjoyed-class-89/images/WhatsApp%20Image%202022-12-15%20at%2000.09.32%20(1).jpeg",
        "file:///C:/Users/Naveen%20Kumar/OneDrive/Desktop/cw/overjoyed-class-89/images/WhatsApp%20Image%202022-12-15%20at%2000.09.32.jpeg",

"file:///C:/Users/Naveen%20Kumar/OneDrive/Desktop/cw/overjoyed-class-89/images/WhatsApp%20Image%202022-12-15%20at%2000.09.33.jpeg",

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