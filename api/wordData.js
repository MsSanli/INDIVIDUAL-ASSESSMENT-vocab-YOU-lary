import client from '../utils/client';

// API CALLS FOR BOOKS
const endpoint = client.databaseURL;

// GET ALL WORDS
const getWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy"uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// create word
const createWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application.json',
    },
    body: JSON.stringify(payload),
  })
  .then((response) => response.json())
  .then((data) => resolve(data))
  .catch(reject);
});

// update word
const updateWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${payload.firebaseKey}.json`, {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application.json',
    },
    body: JSON.stringify(payload),
  })
  .then((response) => response.json())
  .then(resolve)
  .catch(reject);
});

// TODO: DELETE WORD
const deleteWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    // not using object b/c only deleting 1 thing. no need for array of objects
    .then((data) => resolve(data))
    .catch(reject);
});



// this filter stuff def belongs somewhere else. another file?

// FILTER BY FARSI
const getFarsiWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const farsiWord = Object.values(data).filter((item) => item.something);
// i feel like something is wrong here. too soon
      resolve(farsiWord);
    })
    .catch(reject);
});
// need the same for uzbeki, turkish, and english
// FILTER BY UZBEKI
const getUzbekiWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const uzbekiWord = Object.values(data).filter((item) => item.something);
// i feel like something is wrong here. too soon
      resolve(uzbekiWord);
    })
    .catch(reject);

    // FILTER BY TURKISH
const getTurkishWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const TurkishWord = Object.values(data).filter((item) => item.something);
// i feel like something is wrong here. too soon
      resolve(TurkishWord);
    })
    .catch(reject);

// FILTER BY ENGLISH
const getEnglishWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const englishWord = Object.values(data).filter((item) => item.something);
// i feel like something is wrong here. too soon
      resolve(englishWord);
    })
    .catch(reject);
});
export {
  getWords,
  createWord,
  updateWord,
  getFarsiWords,
  getUzbekiWords,
  getTurkishWords,
  getEnglishWords
  farsiWord,
  uzbekiWord,
  englishWord,
  TurkishWord
};
