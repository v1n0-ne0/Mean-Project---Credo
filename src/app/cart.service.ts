import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  constructor() { }

  add(itemuId: string, storedItems: any) {
    let obj = storedItems[itemuId];
    if(obj === '' || obj === null || obj === undefined || obj === NaN) {
      obj = 0;
    }
    storedItems[itemuId] = parseInt(obj) + 1;
    return storedItems;
  }

  delete(itemUid: string, storedItems: any) {
    let obj = storedItems[itemUid];
    if (obj === '' || obj === null || obj === undefined || obj == NaN) {
      console.log('Cannnot Delete: Cart Empty');
    } else {
      if (parseInt(obj) > 1) {
        storedItems[itemUid] = parseInt(obj) - 1;
        return storedItems;
      } else {
        // storedItems[itemUid] = parseInt(obj) - 1;
    delete storedItems[itemUid];
    return storedItems;
      }
    }
  }

}
