/*global describe, it, before */

import chai from 'chai';
import Ad from '../lib/adClientLibrary.js';

chai.expect();

const expect = chai.expect;

let ad;

describe('Given an instance of my library',  () => {
  before(() => {
    ad = new Ad();
  });
  describe('when I need the containerId and updateInterval', () => {
    it('should return the containerId and updateInterval', () => {
      expect(ad.runAd().containerId).to.be.equal('adOne');
      //expect(ad.updateInterval).to.be.equal('60');

    });
  });
});
