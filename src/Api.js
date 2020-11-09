import axios from 'axios';

// Main function which will return an object with 2 keys: user & posts
// These keys will contain a read function value which will return data after resolving the promises
export const fetchData = () => {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise),
  };
};

// The wrapper function contain a fetch/axios promise, and will return a read function
// This read function will observe the Promise status, and either throw suspender if 'pending' or an error,
// or simply return the result in success case.

const wrapPromise = promise => {
  // Set initial status
  let status = 'pending';
  // Will store the result
  let result;
  // Wait for the promise
  let suspender = promise.then(
    // If we have a result, it means it was successful
    res => {
      status = 'success';
      result = res;
    },
    // Otherwise we got an error
    err => {
      status = 'error';
      result = err;
    }
  );

  return {
    /* If we get data, we simply return it, but if the promise is not solved yet, we "throw" the suspender
     We just simulate an error by throwing suspender, in order to communicate to react Suspense the promise isn`t solved yet.
     Suspense will intercept this and will check if it's a real error or if it's just a promise.
     If it's a promise, Suspense will know that the componant is still waiting for data to display, 
     so Suspense will render the security fallback display.
     */
    read() {
      if (status === 'pending') {
        console.log('pending', result);
        throw suspender;
      } else if (status === 'error') {
        console.log('error', result);
        throw result;
      }
      console.log('success', result);
      return result;
    },
  };
};

const fetchUser = () => {
  console.log('Fetching user...');
  return axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(e => console.log(e));
};

const fetchPosts = () => {
  console.log('Fetching posts...');
  return axios
    .get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(res => res.data)
    .catch(e => console.log(e));
};
