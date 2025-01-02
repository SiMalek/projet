import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormationListComponent } from './components/formation-list/formation-list.component';
import { FormationDetailComponent } from './components/formation-detail/formation-detail.component';
import { AdminComponent } from './components/admin/admin.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formations', component: FormationListComponent },
  { path: 'formations/:id', component: FormationDetailComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'search', component: SearchComponent },

];
