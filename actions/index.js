const URL = 'https://amypi7yipl.execute-api.us-east-1.amazonaws.com/v1';

const rejectNotOk = (response) => {
  if (!response.ok) {
    const error = new Error('Could not call API');
    error.name = 'ApiError';
    return Promise.reject(error);
  }
  return Promise.resolve(response);
}

const handleError = (error) => {
  return Promise.reject(error);
};

export const fetchRoutes = () => {
  const url = `${URL}/routes`;
  const method = 'GET';
  const options = { headers: { method } };
  return fetch(url, options)
    .then(rejectNotOk)
    .then(data => data.json())
    .then(({ routes }) => routes)
    .catch(handleError);
};

export const postRoute = (route) => {
  const url = `${URL}/routes`;
  const method = 'POST';
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(route)
  };
  return fetch(url, options)
    .then(rejectNotOk)
    .catch(handleError);
};

export const deleteRoute = (route) => {
  const url = `${URL}/route`;
  const method = 'DELETE';
  const { id } = route;
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id })
  };
  return fetch(url, options)
    .then(rejectNotOk)
    .catch(handleError);
};
