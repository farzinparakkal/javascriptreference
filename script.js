function loadDatas() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://fakestoreapi.com/products");

  let btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    xhr.send();
  });

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Successs...");
        let response = xhr.responseText;
        let parsed_response = JSON.parse(response);

        let dataContainer = document.getElementById("datacontainer");

        let cards = "";

        for (let i = 0; i < parsed_response.length; i++) {
          cards += `
                <div class="card">
                    <img src="${parsed_response[i].image}" alt="${
            parsed_response[i].title
          }">
                    <h3>${parsed_response[i].title}</h3>
                    <p>${parsed_response[i].description.substring(0, 30)}...</p>
                    <div class="price">$${parsed_response[i].price}</div>
                    <button onclick="handleClick(${
                      parsed_response[i].id
                    })">View Details</button>
                </div>`;
        }

        dataContainer.innerHTML = cards;
      } else {
        alert("Failed to load response!");
        console.log("failed to lead response");
      }
    }
  };
}

function handleClick(id) {
  console.log("REached here....");
  console.log("id : ", id);

  window.location.href = `dashboard.html?id=${id}`;

  return;
}

function loadUserDatas() {
  console.log("loading...");

  let location = window.location;
  console.log("location : ", location);

  let querystring = location.search;
  console.log("querystring : ", querystring);

  let urlParams = new URLSearchParams(querystring);
  console.log("urlParams : ", urlParams);

  let id = urlParams.get("id");
  console.log("id : ", id);

  let xhr = new XMLHttpRequest();

  xhr.open("get", `https://fakestoreapi.com/products/${id}`);

  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log("Ready state completed...");

      if (xhr.status === 200) {
        console.log("Success");

        let userData = xhr.response;
        console.log("userData : ", userData);

        let parsed_userData = JSON.parse(userData);
        console.log("parsed_userData : ", parsed_userData);

        let dataContainer1 = document.getElementById("details");

        let dcards = "";
        dcards += `
                <div class="dcard">
                    <img src="${parsed_userData.image}" alt="${parsed_userData.title}" height="500" width="500">
                    <div class="dtext">
                        <h3>${parsed_userData.title}</h3>
                        <p>Note: ${parsed_userData.description}...</p>
                        <p>Category: ${parsed_userData.category} </p>
                        <div class="price">$${parsed_userData.price}</div><br>
                        <div class="rating">Rating : ${parsed_userData.rating.rate} ⭐</div><br>
                        <div class="rating">Count : ${parsed_userData.rating.count}....</div>
                    </div>
                </div>`;

        dataContainer1.innerHTML = dcards;

        return;
      } else {
        alert("Failed to load response!");
      }
    }
  };
}
