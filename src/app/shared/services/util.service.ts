import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  store = {
    set: function (arg1, arg2) {
      localStorage.setItem(arg1, arg2);
    },
    get: function (arg) {
      return localStorage.getItem(arg) || null;
    },
    del: function (arg) {
      localStorage.removeItem(arg);
    },
  };
}
