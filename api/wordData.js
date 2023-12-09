import client from '../utils/client';

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
      const farsiWord = Object.values(data).filter((item) => item.farsi);
      resolve(farsiWord);
    })
    .catch(reject);
});

export {
  getWords,
  getFarsiWords
};
