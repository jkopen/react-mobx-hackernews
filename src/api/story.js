const API_URI = 'http://hn.algolia.com/api/v1/search?query=';

const fetchStories = (query) =>
    fetch(`${API_URI}${query}`)
        .then(res => res.json());

export { fetchStories };