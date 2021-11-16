import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };

  constructor(private activatedRoute: ActivatedRoute, private paramsSubscription:Subscription) {}

  ngOnInit() {
    this.paramsSubscription= this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params.get('id'));
      this.user = {
        id: +params.get('id'),
        name: params.get('name'),
      };
      console.log(this.user.id);
    });
  }

  ngOnDestroy(): void {
   this.paramsSubscription.unsubscribe();
    
  }
}
