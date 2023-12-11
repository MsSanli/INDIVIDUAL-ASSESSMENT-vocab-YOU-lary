import client from '../utils/client';

// API CALLS FOR BOOKS
const endpoint = client.databaseURL;

// GET ALL WORDS
// Object.values is used b/c mult objects
// catch catches any errors
const getWords = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
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

// TODO: GET SINGLE WORD
const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
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
      const farsiWords = Object.values(data).filter((item) => item.language === 'farsi');
      resolve(farsiWords);
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
      const uzbekiWords = Object.values(data).filter((item) => item.language === 'uzbeki');
      resolve(uzbekiWords);
    })
    .catch(reject);
});
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
      const turkishWords = Object.values(data).filter((item) => item.language === 'turkish');
      resolve(turkishWords);
    })
    .catch(reject);
});
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
      const englishWords = Object.values(data).filter((item) => item.language === 'english');
      resolve(englishWords);
    })
    .catch(reject);
});

export {
  getWords,
  createWord,
  updateWord,
  deleteWord,
  getSingleWord,
  getFarsiWords,
  getUzbekiWords,
  getEnglishWords,
  getTurkishWords
};
