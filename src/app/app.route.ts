import { provideRoutes, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExamComponent } from './exam/exam.component';
import { AdsComponent } from './ads/ads.component';
import { NewsComponent } from './news/news.component';
import { BookComponent } from './book/book.component';
import { PublicationComponent } from './publication/publication.component';



const APP_ROUTE_PROVIDER: Routes = [
    
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'exam',component:ExamComponent},
    {path:'ads',component:AdsComponent},
    {path:'news',component:NewsComponent},
    {path:'book',component:BookComponent},
    {path:'publication',component:PublicationComponent},
    ];
    
export const routing = RouterModule.forRoot(APP_ROUTE_PROVIDER);

