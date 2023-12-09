import { signOut } from '../utils/auth';
// navigation events
const navigationEvents = () => {
  // logout button
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  // create entry
  document.querySelector('#add-word-btn').addEventListener('click', () => {
  // add form function
  });
};

export default navigationEvents;
