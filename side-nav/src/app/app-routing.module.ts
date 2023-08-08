import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {
    path: "footer",
    component: FooterComponent,
    
  },
  {
    path: "content",
    component: ContentComponent,
    
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
