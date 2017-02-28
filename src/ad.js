import adFetch from './adFetch.js';
const fetchAd = container => {
  adFetch
    .any()
    .then(data => {
      container.innerHTML = data.ad

      var scripts = container.getElementsByTagName('script')

      for (const script of scripts){
        const parent = script.parentElement

        const newScript = document.createElement('script')

        if(script.async) newScript.async =  script.async
        if(script.src) newScript.src = script.src
        if(script.textContent) newScript.textContent = script.textContent
        if(script.type) newScript.type = script.type
        parent.insertBefore(newScript, script)
        parent.removeChild(script)
      }

    });
}
export default class Ad {
  constructor({containerId, updateInterval}) {
    this.container = document.getElementById(containerId);
    this.updateInterval = updateInterval * 1000;

  }
  runAd(){
    fetchAd(this.container)
    setInterval(() => fetchAd(this.container), this.updateInterval);
  };
}
