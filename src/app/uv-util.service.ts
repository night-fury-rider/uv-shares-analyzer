import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UvUtilService {

  constructor() { }

  /**
   * @description Function to check device is mobile or not
   * @returns boolean - Returns true if running on mobile else return false.
   */
  isMobileDevice(): boolean{
    return navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) ? true : false;
  }
}
