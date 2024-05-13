export class Collage {
  constructor(collage_name, num_of_collage, icon_url){
    this.collage_name = collage_name;
    this.num_of_collage = num_of_collage;
    this.icon_url= icon_url;
  }

  create_collage(target_container_id){
    const container = document.getElementById(target_container_id);

    const collage_container = document.createElement("div");
    collage_container.setAttribute("class", `${this.collage_name} collage`);

    for (let i=0; i<this.num_of_collage; i++){
      const collage = document.createElement("div");
      collage.setAttribute("class", `div-${i+1}`);

      const collage_icon = document.createElement("img");
      collage_icon.setAttribute("src", this.icon_url);
      collage.appendChild(collage_icon);

      collage_container.appendChild(collage);
    }

    container.appendChild(collage_container);
  }

  create_collage_icon(target_container_id){
    const container = document.getElementById(target_container_id);

    const collage_icon_container = document.createElement("div");
    collage_icon_container.setAttribute("class", `${this.collage_name} collage-icon`);
    collage_icon_container.setAttribute("id", `${this.collage_name}-icon`)

    for (let i=0; i<this.num_of_collage; i++){
      const collage = document.createElement("div");
      collage.setAttribute("class", `div-${i+1}`);
      collage_icon_container.appendChild(collage);
    }

    container.appendChild(collage_icon_container);

  }
}






