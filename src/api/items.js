import CONFIG from './../.configs';

const token = CONFIG.API_KEY;
fetch('https://fortniteapi.io/v2/challenges?season=current&lang=en', {
  headers: {
    Authorization: `${token}`,
  },
})
  .then((res) => res.json())
  .then((json) => console.log(json));
