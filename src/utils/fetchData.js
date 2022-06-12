export const exercisesOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_EXERCISE_DB_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_EXERCISE_DB_HOST,
    },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_YOUTUBE_HOST,
    },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};
