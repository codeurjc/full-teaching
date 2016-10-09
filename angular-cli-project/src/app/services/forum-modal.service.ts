import { Injectable } from '@angular/core';

@Injectable()
export class ForumModalService {

  public currentIndex: number;

  constructor(){ }

  setCurrentIndex(i: number){
    this.currentIndex = i;
  }

  getCurrentIndex(){
    return this.currentIndex;
  }

}
