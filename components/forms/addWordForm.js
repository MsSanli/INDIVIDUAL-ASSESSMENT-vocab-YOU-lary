import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
// import selectWord from './selectWord';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
      <div class="form-group">
        <label for="title">New Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="wordTitle" placeholder="Enter New Word" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="What does it mean tho?" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-word">
      </div>
      <button type="submit" class="btn btn-primary">Submit Word
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  // selectWord(`${obj.title || ''}`);
};

export default addWordForm;
