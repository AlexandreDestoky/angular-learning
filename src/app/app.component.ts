import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repos } from './repos.modele';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userName: string = 'AlexandreDestoky';
  baseURL: string = 'https://api.github.com/';
  repos: Repos[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRepos();
  }

  public getRepos() {
    return this.http
      .get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
      .subscribe(
        (response) => {
          //Next callback
          console.log('response received');
          console.log(response);
          this.repos = response;
        },
        (error) => {
          //Error callback
          console.error('Request failed with error');
          alert(error);
        },
        () => {
          //Complete callback
          console.log('Request completed');
        }
      );
  }
}
