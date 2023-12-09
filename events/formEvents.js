import { showWords } from '../pages/words';
import { createWord, updateWord, getWords } from '../api/wordData';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    //  CLICK EVENT FOR SUBMITTING FORM FOR ADDING A WORD
    if (e.target.id.includes('submit')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value
        // uid: 'user.uid'
      };

      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWord(patchPayload).then(() => {
          getWords().then(showWords);
        });
      });
    }

    // CLICK EVENT FOR EDITING A WORD
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#definition').value,
        // timestamp: document.querySelector('#timestamp').value,
        firebaseKey,
      };

      updateWord(payload).then(() => {
        getWords().then(showWords);
      });
    }
  });
};

export default formEvents;
