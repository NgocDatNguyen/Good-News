async function getData() {
  let content = document.getElementById("content");
  let html = ``;
  let res = await fetch("https://news-ncov-api.herokuapp.com/news?_page=1");
  let data = await res.json();
  for (let i = 0; i < 2; i++) {
    html =
      html +
      `<div class="col-lg-6">
      <div class="card" style="width: 35rem;">
          <img src="${data[i].thumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
      </div>
  </div>`;
  }
  content.innerHTML = html;
}
getData();

async function getData1() {
  let content = document.getElementById("content1");
  let html = ``;
  let res = await fetch("https://news-ncov-api.herokuapp.com/news?_page=1");
  let data = await res.json();
  for (let i = 0; i < 2; i++) {
    html =
      html +
      `<div class="col-lg-6">
      <div class="card" style="width: 35rem;">
          <img src="${data[i].thumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
      </div>
  </div>`;
  }
  content.innerHTML = html;
}
getData1();

async function getData2() {
  let content = document.getElementById("content2");
  let html = ``;
  let res = await fetch("https://news-ncov-api.herokuapp.com/news?_page=1");
  let data = await res.json();
  for (let i = 0; i < 4; i++) {
    html =
      html +
      `<div class="col-lg-3">
      <div class="card" style="width: 15rem;">
          <img src="${data[i].thumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
      </div>
  </div>`;
  }
  content.innerHTML = html;
}
getData2();
