async function generate_qr_code(url) {
  text = document.getElementById("qr-text");
  qr_code = document.getElementById("qr-code");
  qr_settings = document.getElementById("qr-settings");

  let csrftoken = getCookie("csrftoken");

  let data = "";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({ "text": text.value }),
    headers: { "X-CSRFToken": csrftoken },
  })
    .then((res) => res.json())
    .then((res) => data = res);

  // console.log(data["qr"]);

  qr_settings.style.display = "flex";
  qr_code.src = "data:image/png;base64," + data["qr"];
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
