console.log('wecome to project 3')
// https://newsapi.org/v2/top-headlines?country=us&apiKey=58eb71ac6a8641c9b1c59a32fac69acf
// let apikey = '58eb71ac6a8641c9b1c59a32fac69acf'
let = newsAccordion = document.getElementById('newsAccordion')
// create aget request
const xhr = new XMLHttpRequest();
xhr.open('GET','https://saurav.tech/NewsAPI/top-headlines/category/health/in.json', true)

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function(element,index){
      console.log(element, index)
      let news = `<div class="card">
      <div class="card-header" id="heading${index}">
          <h2 class="mb-0">
          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
              aria-expanded="false" aria-controls="collapse${index}">
             <b>Breaking News ${index+1}:</b> ${element["title"]}
          </button>
          </h2>
      </div>

      <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
          <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
      </div>
  </div>`;
          newsHtml += news ;  

    });
    newsAccordion.innerHTML = newsHtml;
  }
  else {
    console.log('some error occured')

  }
}

xhr.send()

