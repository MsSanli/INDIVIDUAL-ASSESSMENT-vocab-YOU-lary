// import stuff will go here. showWords from words pages prob
import navBar from '../components/shared/navBar';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import { showWords } from '../pages/words';
import { getWords } from '../api/wordData';
import navigationEvents from '../events/navigationEvents';
import { domEvents } from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(user);// BUILD THE DOM
  domEvents(user);// ADD THE EVENT LISTENERS TO THE DOM
  formEvents(user);// ADD FORM EVENT LISTENERS TO DOM
  navBar();// DYNAMICALLY ADD THE NAV
  logoutButton();// ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user);// ATTACH EVENT LISTENERS TO NAV
  // TO DO: PUT ALL WORDS ON THE DOM ON APP LOAD
  getWords(user.uid).then(showWords);
};

export default startApp;
