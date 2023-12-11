import { deleteWord, getWords, getSingleWord } from '../api/wordData';
import { showWords } from '../pages/words';
import addWordForm from '../components/forms/addWordForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A WORD
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE WORD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteWord(firebaseKey).then(() => {
          getWords(user.iud).then(showWords);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A WORD
    if (e.target.id.includes('add-word-btn')) {
      addWordForm();
    }

    // TODO: CLICK EVENT EDITING/UPDATING A WORD
    if (e.target.id.includes('edit-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then((wordObj) => addWordForm(wordObj));
    }
  });
};
export { domEvents, deleteWord, getWords };
