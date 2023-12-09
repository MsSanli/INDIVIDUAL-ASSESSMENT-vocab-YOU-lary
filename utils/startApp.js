// import stuff will go here. showWords from words pages prob
import navBar from '../components/shared/navBar';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import { getWords, showWords } from '../pages/words';

const startApp = (user) => {
  navBar();// DYNAMICALLY ADD THE NAV
  logoutButton();// ADD THE LOGOUT BUTTON COMPONENT
  domBuilder(user);// BUILD THE DOM
  domEvents();// ADD THE EVENT LISTENERS TO THE DOM
  formEvents();// ADD FORM EVENT LISTENERS TO DOM
  navigatonEvents();// ATTACH EVENT LISTENERS TO NAV
  // TO DO: PUT ALL WORDS ON THE DOM ON APP LOAD
  getWords(user.uid).then(showWords);
};

export default startApp;
