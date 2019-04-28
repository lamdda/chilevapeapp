import { Injectable } from '@angular/core';

import hmacSHA1 from 'crypto-js/hmac-sha1';
import Base64 from 'crypto-js/enc-base64';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {

  nonce = '';
  currentTimestamp = 0 ;
  customerKey = 'ck_1f01406d9c76aa051c83045b6c394a40b77b29e4';
  customerSecret  = 'cs_87eb31952936ab441d0d8072392e404eb786ad90';

  constructor() { }

  authenticateApi(method: string , url: string, params?: {}) {
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    this.nonce = '';

    for (let i = 0; i < 6; i++) {
      this.nonce += possible.charAt(Math.floor(Math.random() * possible.length));
  }

    this.currentTimestamp = Math.floor(new Date().getTime() / 1000);

    let authParam: object = {
      oauth_consumer_key : this.customerKey,
      oauth_nonce : this.nonce,
      oauth_signature_method : 'HMAC-SHA1',
      oauth_timestamp : this.currentTimestamp,
      oauth_version : '1.0',
  };

    let parameters = Object.assign({}, authParam, params);
    console.log(parameters);

      let signatureStr = '';

    Object.keys(parameters).sort().forEach( (key) => {
      if (signatureStr === '') {
          signatureStr += key + '=' + parameters[key];
        } else {
          signatureStr += '&' + key + '=' + parameters[key];
        }
      });

      let paramStr = '';

    Object.keys(params).sort().forEach( (key) => {
            paramStr += '&' + key + '=' + parameters[key];
        });
     // tslint:disable-next-line:max-line-length
    return url + '?oauth_consumer_key=' + this.customerKey + '&oauth_nonce=' + this.nonce + '&oauth_signature_method=HMAC-SHA1&oauth_timestamp=' + this.currentTimestamp + '&oauth_version=1.0&oauth_signature=' + Base64.stringify(hmacSHA1(method + '&' + encodeURIComponent(url) + '&' + encodeURIComponent(signatureStr), this.customerSecret + '&')) + paramStr;

  }

}
