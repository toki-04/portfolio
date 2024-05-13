import { Collage } from "./collage.js"

const collage_1 = new Collage(
  "collage-1",
  1,
  "/static/collage_maker/images/add.png",
)
const collage_2 = new Collage(
  "collage-2",
  2,
  "/static/collage_maker/images/add.png",
)

const collage_3 = new Collage(
  "collage-3",
  3,
  "/static/collage_maker/images/add.png",
)
const collage_4 = new Collage(
  "collage-4",
  4,
  "/static/collage_maker/images/add.png",
)


const collage_list = [collage_1, collage_2, collage_3, collage_4];

const collage_container = document.getElementById("collage-container");
const collage_icon_container = document.getElementById("collage-icon-container");

function generate_collage_icon(){
  const collage_icon_list = [];

  collage_icon_container.innerHTML = "";
  for (let i=0; i<collage_list.length; i++){
    collage_list[i].create_collage_icon("collage-icon-container");
    const collage_icon = document.getElementById(collage_list[i].collage_name+"-icon")
    collage_icon_list.push(collage_icon);
  }

  for (let i=0; i<collage_icon_list.length; i++){
    collage_icon_list[i].addEventListener("click", function(){
      get_collage(i);
    })
  }
}



function get_collage(idx){
  collage_container.innerHTML = "";
  collage_list[idx].create_collage("collage-container");
}


get_collage(0)
generate_collage_icon()


