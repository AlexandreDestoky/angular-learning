import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverList = [];

  onAddServer(server) {
    console.log(server);
    this.serverList.push({
      type: 'server',
      name: server.serverName,
      content: server.serverContent,
    });
  }

  onAddBlueprint(server) {
    this.serverList.push({
      type: 'blueprint',
      name: server.serverName,
      content: server.serverContent,
    });
  }

}
