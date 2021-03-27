
class MealItem extends HTMLElement {

  constructor() {
   super();
   this.shadowDOM = this.attachShadow({mode: "open"});
  }

  set meal(meal) {
        this._meal = meal;
        this.render();
  }


  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

        :host {
            background-color:#f2f2f2;;
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
          }
              
        .fan-art-meal {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
          }
              
        .meal-info {
            padding: 24px;
            background-color:#f2f2f2;;
          }
              
        .meal-info > h2 {
            font-weight: lighter;
          }
              
        .meal-info > p {
            margin-top: 10px;
            text-align:justify;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 10; /* number of lines to show */
          }

        a:link, a:visited {
            background-color: white;
            color: black;
            border: 2px solid #555555;
            padding: 5px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            transition-duration: 0.4s;
            cursor: pointer;
          }

        a:hover, a:active {
            background-color: #555555;
            color: white;
          }
      </style>
          <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Fan Art">
          <div class="meal-info">
              <h2>${this._meal.strMeal}</h2>
              <p>${this._meal.strInstructions}</p>
              <a href="${this._meal.strYoutube}" target="_blank">Watch Video</a>
          </div>
    `; 
  }
}

customElements.define("meal-item", MealItem);