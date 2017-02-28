/*global describe, it, before */

import chai from 'chai';
import Ad from '../src/ad.js';


chai.expect();

const expect = chai.expect;

var containerId = 'adOne';
var updateInterval = 60;

describe('Given instance of library',  () => {
      describe('runAd', () => {
        var expectvalue = 'adOne';
        it('should return the containerId', () => {
          expect(expectvalue).to.be.equal(containerId);

        });
      describe('runAd', () => {
        var expectUpdateInterval = 60;
        it('should return the updateInterval', () => {
        expect(expectUpdateInterval).to.be.equal(updateInterval);

        });
      });

    });
});
