let todos = document.getElementsByClassName("todo-container");

for (let i = 0; i < todos.length; i++) {
  let checkbox = todos[i].childNodes[1];
  let text = todos[i].childNodes[3];

  if (checkbox.checked) {
    text.style.textDecoration = "line-through";
    text.style.color = "grey";
  } else {
    text.style.textDecoration = "none";
    text.style.color = "black";
  }
}

todo_counter = document.getElementById("counter");
todo_counter.innerText = todos.length;

function update_todo(todo_container_id, url) {
  todo_container = document.getElementById(todo_container_id);

  let checkbox = todo_container.childNodes[1];
  let text = todo_container.childNodes[3];

  if (checkbox.checked) {
    text.style.textDecoration = "line-through";
    text.style.color = "grey";
  } else {
    text.style.textDecoration = "none";
    text.style.color = "black";
  }

  let csrftoken = getCookie("csrftoken");

  data = {
    "is_done": checkbox.checked,
    "todo_text": text.value,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "X-CSRFToken": csrftoken },
  });
}

function remove_todo(todo_container_id, todo_id, url) {
  todo_container = document.getElementById(todo_container_id);
  todo_container.style.display = "none";

  let csrftoken = getCookie("csrftoken");
  let response = fetch(url, {
    method: "POST",
    body: JSON.stringify({ "todo_id": todo_id }),
    headers: { "X-CSRFToken": csrftoken },
  });

  let prev_count = parseInt(todo_counter.innerText);
  todo_counter.innerText = prev_count - 1;
}

// The following function are copying from
// https://docs.djangoproject.com/en/dev/ref/csrf/#ajax
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + "=")) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
