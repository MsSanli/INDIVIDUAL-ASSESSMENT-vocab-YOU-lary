import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { getWords } from '../api/wordData';

const emptyWords = () => {
  const domString = '<h1>No Words</h1>';
  renderToDOM('#store', domString);
};

const showWords = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-word-btn">Add A Word</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${item.language}</h6>
        <p class="card-text">${item.definition}</p>
        <a id="edit-word-btn--${item.firebaseKey}" href="#" class="btn btn-edit">Edit</a>
        <a id="delete-word-btn--${item.firebaseKey}" href="#" class="btn btn-delete">Delete</a>
      </div>
    </div>`;
  });

  renderToDOM('#store', domString);
};

export { showWords, emptyWords, getWords };
