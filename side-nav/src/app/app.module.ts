import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FilmDetailComponent } from './filmdetail/filmdetail.component';
import { FooterComponent } from './footer/footer.component';
import { NavFooterComponent } from './navfooter/navfooter.component';
import { MovieService } from './movie-service.service';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    SearchComponent,
    NavbarComponent,
    HeaderComponent,
    ContentComponent,
    FilmDetailComponent,
    FooterComponent,
    NavFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    FormsModule,
    MatInputModule
  ],
  providers: [ContentComponent, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
