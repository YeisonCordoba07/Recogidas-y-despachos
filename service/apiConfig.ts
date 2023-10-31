const SERVER_URL = 'http://localhost:8080/api';

const API_ROUTES = {
    allUsers: `${SERVER_URL}/socio/findAll`,
    getUser: `${SERVER_URL}/socio/findSocioByCedula`,
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());


export {SERVER_URL, API_ROUTES, fetcher};