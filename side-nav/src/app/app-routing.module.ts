import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';
import { FilmDetailComponent } from './filmdetail/filmdetail.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: "footer",
    component: FooterComponent,
    
  },
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  {
    path: "content",
    component: ContentComponent,
    
  },
  {
    path: "filmdetail/:id",
    component: FilmDetailComponent,
    
  },
  {
    path: "search",
    component: SearchComponent,
    
  },
  {
    path: "search/:id",
    component: SearchComponent,
    
  },
  {
    path: "navbar",
    component: NavbarComponent,
    
  },
  {
    path: "header",
    component: HeaderComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
