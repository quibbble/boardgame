import axios from 'axios';

axios.defaults.withCredentials = true;

export const CreateGame = async (host, gameKey, gameID, teams, variant) => {
    let config = {
        method: 'POST',
        url: `${ host }/game/create`,
        headers: {
            'Content-Type': 'application/json'
        },
        data : JSON.stringify({
            GameKey: gameKey,
            GameID: gameID.toLowerCase(),
            Teams: teams,
            TurnLength: null,
            MoreOptions: {
                Seed: Date.now(),
                Variant: variant,
            }
        })
    };
    return axios(config)
        .catch(error => error.response)
        .then(response => response.status);
};

export const LoadGame = async (host, gameID, bgn) => {
    let config = {
        method: 'POST',
        url: `${ host }/game/load`,
        headers: {
            'Content-Type': 'application/json'
        },
        data : JSON.stringify({
            GameKey: CONFIG.key,
            GameID: gameID.toLowerCase(),
            BGN: bgn
        })
    };
    return axios(config)
        .catch(error => error.response)
        .then(response => response.status)
};

export const GetBGN = async (host, gameKey, gameID) => {
    let config = {
        method: 'GET',
        url: `${ host }/game/bgn?GameKey=${ gameKey }&GameID=${ gameID.toLowerCase() }`,
    };
    return axios(config)
        .catch(error => error.response)
};

export const GetSnapshot = async (host, gameKey, gameID) => {
    let config = {
        method: 'GET',
        url: `${ host }/game/snapshot?GameKey=${ gameKey }&GameID=${ gameID.toLowerCase() }`,
    };
    return axios(config)
        .catch(error => error.response)
};

export const Health = async (host) => {
    let config = {
        method: 'GET',
        url: `${ host }/health`,
    };
    return axios(config)
        .catch(error => error.response)
};
