import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  intervalSubscription: Subscription;
  customInternalObservableSubscription: Subscription;
  constructor() { }
 
  ngOnInit() {
    const customInternalObservable = new Observable<number>( observer => {
      let count = 0;
      setInterval( () => {
        observer.next(count++)
      }, 1000);
    })
    
    this.customInternalObservableSubscription = customInternalObservable.subscribe( (num:number) => {
      console.log(num);
    })
  } // end ngOnInit()
 
  ngOnDestroy() {
    this.customInternalObservableSubscription.unsubscribe();
  }
}
