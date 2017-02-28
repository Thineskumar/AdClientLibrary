import fetch from 'isomorphic-fetch';
const adUrl = 'https://5xhlcfzk8c.execute-api.eu-west-1.amazonaws.com/prod/mock-engine';
const firstAd = `${adUrl}?forceAdId=0`;
const secondAd = `${adUrl}?forceAdId=1`;
const thirdAd = `${adUrl}?forceAdId=2`;
const fetchAd = url => {
  return fetch(url)
    .then(res => {
      if(!res.ok) throw new Error('Failed to fetch resource');
      return res.json()
    });
};
export default {
  any: () => fetchAd(adUrl),
  first: () => fetchAd(firstAd),
  second: () => fetchAd(secondAd),
  third: () => fetchAd(thirdAd)
};
