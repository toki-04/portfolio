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
let current_collage_idx = 0;

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
  current_collage_idx = idx;

  let collage_child_id = collage_list[idx].collage_child_id
  console.log(collage_child_id[0])

  for(let i=0; i<collage_child_id.length; i++){

    const collage_input_id = collage_child_id[i].input
    const collage_id = collage_child_id[i].collage;
    const collage_icon_id = collage_child_id[i].icon;

    const collage_input = document.getElementById(collage_input_id);

    collage_input.addEventListener("change", function(){
      upload_collage(collage_id, collage_icon_id, collage_input_id)
    })
  }
}

// const collage_input_1 = document.getElementById("collage-input-1");
// collage_input_1.addEventListener("change", function(){
//   upload_collage()
// })

function upload_collage(collage_id, collage_icon_id, collage_input_id){
  const collage_preview = document.getElementById(collage_id);
  const collage_icon = document.getElementById(collage_icon_id);
  const collage_input = document.getElementById(collage_input_id);

  const file = collage_input.files[0];
  let reader = new FileReader();

  reader.onloadend = function(){
    collage_preview.style.backgroundImage=`url(${reader.result})`;
    collage_icon.style.display = "none";
  }

  if(file){
    reader.readAsDataURL(file);
  } else{
    collage_preview.style.backgroundImage= "";
  }

  console.log("done");

}


get_collage(current_collage_idx);
generate_collage_icon();

console.log(collage_list[current_collage_idx].collage_child_id);

