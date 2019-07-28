const URL = 'https://amypi7yipl.execute-api.us-east-1.amazonaws.com/v1/routes';

const rejectNotOk = (response) => {
  if (!response.ok) {
    const error = new Error('Could not call API');
    error.name = 'ApiError';
    return Promise.reject(error);
  }
  return Promise.resolve(response);
}

const handleError = (error) => {
  console.error('ERROR', error);
  return Promise.reject(error);
};

export const fetchRoutes = () => {
  const method = 'GET';
  const options = { headers: { method } };
  return fetch(URL, options)
    .then(rejectNotOk)
    .then(data => data.json())
    .then(({ routes }) => routes)
    .catch(handleError);
};

export const postRoute = (route) => {
  const method = 'POST';
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(route)
  };
  return fetch(URL, options)
    .then(rejectNotOk)
    .catch(handleError);
};
