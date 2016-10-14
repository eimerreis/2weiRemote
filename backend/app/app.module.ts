import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from "@angular/router";

import { AppComponent }   from './app.component';
import { SlidesComponent } from "./slides/slides.component"

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: SlidesComponent},
      { path: 'players', component: SlidesComponent},
      { path: 'slides', component: SlidesComponent},
      { path: 'polls', component: SlidesComponent}
    ])
  ],
  declarations: [
    AppComponent,
    SlidesComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
