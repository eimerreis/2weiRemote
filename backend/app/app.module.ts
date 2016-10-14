import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from "@angular/router";

//Services
import {SocketService} from "./services/socket/socket.service";

// Components
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
  providers: [SocketService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
