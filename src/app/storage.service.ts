import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  public datas: any = {};
  storageName = 'FruityCart';

  constructor() { this.loadStorage(); }

  loadStorage() {
    let obj = localStorage.getItem(this.storageName);
    if(obj === '' || obj === null || obj === undefined) {
      this.datas = {};
    } else {
      this.datas = JSON.parse(obj);
    }
  }

  set(obj: any) {
    (Object.keys(obj)).forEach((item: any) => {
      this.datas[item] = obj[item];
    });
    this.store(this.datas);
  }

  store(obj: any) {
    localStorage.setItem(this.storageName, JSON.stringify(obj));
  }

  get(key: string) {
    if (key === '') {
      return this.datas;
    } else {
      if(this.datas[key] !== undefined) {
        return this.datas[key];
      } else {
        return {};
      }
    }
  }

}
