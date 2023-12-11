import { signOut } from '../utils/auth';
import { showWords } from '../pages/words';
import {
  getWords,
  getFarsiWords,
  getUzbekiWords,
  getTurkishWords,
  getEnglishWords
} from '../api/wordData';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // FARSI WORDS
  document.querySelector('#farsi-words').addEventListener('click', () => {
    getFarsiWords(user.uid).then(showWords);
  });

  // UZBEKI WORDS
  document.querySelector('#uzbeki-words').addEventListener('click', () => {
    getUzbekiWords(user.uid).then(showWords);
  });

  // TURKISH WORDS
  document.querySelector('#turkish-words').addEventListener('click', () => {
    getTurkishWords(user.uid).then(showWords);
  });

  // ENGLISH WORDS
  document.querySelector('#english-words').addEventListener('click', () => {
    getEnglishWords(user.uid).then(showWords);
  });

  // TODO: ALL WORDS
  document.querySelector('#all-words').addEventListener('click', () => {
    getWords(user.uid).then(showWords);
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE WORDS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
