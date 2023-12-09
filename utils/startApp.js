// import stuff will go here. showWords from words pages prob
import navBar from '../components/shared/navBar';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import { getWords, showWords } from '../pages/words';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder();// BUILD THE DOM
  navBar();// DYNAMICALLY ADD THE NAV
  logoutButton();// ADD THE LOGOUT BUTTON COMPONENT
  // domEvents();// ADD THE EVENT LISTENERS TO THE DOM
  // formEvents();// ADD FORM EVENT LISTENERS TO DOM
  navigationEvents();// ATTACH EVENT LISTENERS TO NAV
  // TO DO: PUT ALL WORDS ON THE DOM ON APP LOAD
  getWords().then(showWords);
};

export default startApp;
