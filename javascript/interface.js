import imgGet from "./Api/unsplash_api.js";
import jk from "./Api/chuck_api.js";
import translate from './Api/translate_api.js'

class Interface {
  constructor() {
    this.jkbtn = document.querySelector(".jk-button");
    this.jkbtn.addEventListener("click", () => this.interfaceJK());
  }

  interfaceJK = async () => {
    const randomImg = await imgGet();
    const randomJk = await jk();
    const translation = await translate(randomJk);

    const results = {
      randomImg,
      translation,
      randomJk,
    };
    this.print(results);
  };

  print(results) {
    document.querySelector('.cv').innerHTML = 
        `
        <div class="card">
        <div class="card-image">
          <figure class="image is-6by1">
            <img src="${results.randomImg}" alt="Placeholder image">
          </figure>
        </div>
        
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-5 has-text-danger pb-4 pt-1">English</p>
              <h5 class="subtitle is-6">${results.randomJk}</h5>
          </div>
        </div>
      </div>
    
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-5 has-text-success pb-4 pt-1">Türkçe</p>
            <h5 class="subtitle is-6">${results.translation}</h5>
        </div>
      </div>
    </div>
    
      </div>
    `;
  }
}

export default function appGO() {
  new Interface();
}
