import CONFIG from '../../.configs.json';

export default async () => {
  const token = CONFIG.API_KEY;
  fetch('https://fortniteapi.io/v2/challenges?season=current&lang=en', {
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => console.log(err));
};
