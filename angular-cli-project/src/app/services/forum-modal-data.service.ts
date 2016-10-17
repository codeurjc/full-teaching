import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

declare var $: any;

@Injectable()
export class ForumModalDataService {

  modeAnnounced$: Subject<any>;

  constructor(){
    this.modeAnnounced$ = new Subject<any>();
  }

  announceMode(objs){
    this.modeAnnounced$.next(objs);
  }

  animateIfSmall(){
    if($(window).width() <= 600 || $(window).height() <= 600) $('html,body').animate({scrollTop:0},200);
  }

}
