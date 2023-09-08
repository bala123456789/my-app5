import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'aboutus', component: AboutusComponent },
	{ path: 'news', component: NewsComponent },
	{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
