import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:id/edit', component: EditServerComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
