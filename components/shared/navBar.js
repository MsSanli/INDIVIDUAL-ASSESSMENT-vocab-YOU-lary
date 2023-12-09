import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24">
  </a>
  <a class="nav-link" href="#" id="create-entry">
                Create Entry <span class="sr-only">(current)</span>
              </a>
        <a class="navbar-brand title" href="#">Vocabulary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
