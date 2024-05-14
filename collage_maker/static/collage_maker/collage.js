export class Collage {
  constructor(collage_name, num_of_collage, icon_url){
    this.collage_name = collage_name;
    this.num_of_collage = num_of_collage;
    this.icon_url= icon_url;

    this.collage_child_id = [];
  }


  create_collage(target_container_id){
    const container = document.getElementById(target_container_id);

    const collage_container = document.createElement("div");
    collage_container.setAttribute("class", `${this.collage_name} collage`);
    collage_container.setAttribute("id", "collage");

    for (let i=0; i<this.num_of_collage; i++){
      const collage_label = document.createElement("label");
      let input_id = `collage-input-${i+1}`
      collage_label.setAttribute("for", input_id)

      const collage = document.createElement("div");
      let collage_id = `div-${i+1}`;
      collage.setAttribute("id", collage_id);


      const collage_icon = document.createElement("img");
      let icon_id = `div-${i+1}-icon`;
      collage_icon.setAttribute("id", icon_id)
      collage_icon.setAttribute("src",this.icon_url);

      const collage_input = document.createElement("input");
      collage_input.setAttribute("type", "file");
      collage_input.setAttribute("accept", "image/*");
      collage_input.setAttribute("id", input_id);

      this.collage_child_id.push(
        {
          "input": input_id,
          "collage": collage_id,
          "icon": icon_id,
        }
      )


      collage.appendChild(collage_icon);
      collage.appendChild(collage_input);
      collage_label.appendChild(collage);
      collage_container.appendChild(collage_label);
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






