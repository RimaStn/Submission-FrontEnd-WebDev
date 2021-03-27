class CardProfile extends HTMLElement {

    connectedCallback() {
        this.attachShadow({mode: "open"});
        this.render();
    }


    render() {
        this.shadowRoot.innerHTML = `
        <style>
            .profile header {
             text-align: center;
          }

            .profile p{
            text-align;left;
          }

            .card {
            
             border-radius: 10px;
             padding: 20px;
             margin-top: 20px;
             text-align: center;
          }
        </style>

        <div class="profile card">
          <header>
              <h2>About Nyam-Nyam</h2>
          </header>
           <section>
               <p> Nyam-Nyam is a tech company building a community platform for people to find food information.You can find food information that you like based on the categories contained in the Nyam-Nyam feature.
                Nyamnyam even provides food recipes that you can follow through videos. we hope Nyam-Nyam can be an alternative for you as a technology that makes it easy for you to find information that you like.
              </p>
          </section>
        </div>
      `;
    }
}

customElements.define("card-profile", CardProfile);