const SERVER_URL = 'https://dj5pypyyfj.execute-api.us-east-1.amazonaws.com/prod/';

const API_ROUTES = {
    users: `${SERVER_URL}/users`,
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());


export {SERVER_URL, API_ROUTES, fetcher};