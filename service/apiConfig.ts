const SERVER_URL = 'http://localhost:8080/api/socio';

const API_ROUTES = {
    allUsers: `${SERVER_URL}/findAll`,
    getUser: `${SERVER_URL}/findSocioByCedula`,
    updateUser: `${SERVER_URL}/update`,
    createUser: `${SERVER_URL}/createUser`
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());


export {SERVER_URL, API_ROUTES, fetcher};