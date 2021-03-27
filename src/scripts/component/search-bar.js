class SearchBar extends HTMLElement {
    
  constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: "open"});
    }

  connectedCallback(){
      this.render();
    }

  set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }

  get value() {
      return this.shadowDOM.querySelector("#searchElement").value;
    }

  render() {
      this.shadowDOM.innerHTML = `
        <style>
          .search-container {
             max-width: 800px;
             box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
             padding: 10px;
             border-radius: 5px;
             display: flex;
             top: 0px;
             background-color: #f2f2f2;
          }
      
          .search-container > input {
             width: 70%;
             padding: 10px;
             border: 0;
             border-bottom: 1px solid black;
             font-weight: bold;
          }
      
          .search-container > input:focus {
             outline: 0;
             border-bottom: 2px solid black;
          }
      
          .search-container > input:focus::placeholder {
            font-weight: bold;
          }
      
          .search-container >  input::placeholder {
             color: black;
             font-weight: normal;
          }
      
         .search-container > button {
             width: 30%;
             cursor: pointer;
             margin-left: auto;
             padding: 10px;
             background-color: black;
             color: white;
             border: 0;
             text-transform: uppercase;
          }
      
          @media screen and (max-width: 550px){
            .search-container {
               flex-direction: column;
               position: static;
            }
      
            .search-container > input {
               width: 100%;
               margin-bottom: 12px;
            }
      
            .search-container > button {
               width: 100%;
            }
          }

          @media screen and (min-width: 790px){
            .search-container {
               min-width: 400px;
            }
          }


       </style>
       <div id="search-container" class="search-container">
           <input placeholder="Search Food by Name" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);