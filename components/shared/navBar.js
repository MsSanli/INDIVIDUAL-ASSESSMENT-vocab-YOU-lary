import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="https://cdn4.vectorstock.com/i/1000x1000/81/28/foreign-language-translation-creative-icon-logo-vector-31138128.jpg" alt="" width="40" height="36">
  </a>
        <a class="navbar-brand title" href="#">Vocabulary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-words">
                All <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="farsi-words">Farsi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="uzbeki-words">Uzbeki</a>
            </li>
            <li>
            <li class="nav-item">
            <a class="nav-link" href="#" id="turkish-words">Turkish</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#" id="english-words">English</a>
            </li>
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Words"
              aria-label="Search"
            />
            </li>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
          <span class="navbar-text">
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
