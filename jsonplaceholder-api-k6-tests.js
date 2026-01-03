import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {

  // 🔹 TESTE GET
  const getResponse = http.get(
    'https://jsonplaceholder.typicode.com/comments'
  );

  check(getResponse, {
    'GET status is 200': (r) => r.status === 200,
    'GET response is not empty': (r) => r.json().length > 0,
    'GET has expected fields': (r) =>
      r.json()[0].id !== undefined &&
      r.json()[0].email !== undefined &&
      r.json()[0].body !== undefined,
  });

  sleep(1);

  // 🔹 TESTE POST
  const payload = JSON.stringify({
    userId: 1,
    title: 'Nova ID',
  });

  const headers = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const postResponse = http.post(
    'https://jsonplaceholder.typicode.com/albums',
    payload,
    headers
  );

  check(postResponse, {
    'POST status is 201': (r) => r.status === 201,
    'POST returns id': (r) => r.json().id !== undefined,
    'POST title is correct': (r) => r.json().title === 'Nova ID',
    'POST userId is correct': (r) => r.json().userId === 1,
  });

  sleep(1);
}