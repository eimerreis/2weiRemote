import {Component} from "@angular/core";

import {SocketService} from "../services/socket/socket.service";

@Component({
  selector: 'slides',
  templateUrl: 'app/slides/slides.component.html'
})
export class SlidesComponent {
  constructor(private socketService : SocketService){
  }

  SlideClicked(slide : any){
    this.socketService.Emit(SLIDE_CHANGED_EVENT, slide.number);
  }

  slides = SLIDES;
}

const SLIDE_CHANGED_EVENT = "change-slide";

const SLIDES = [
  {name: 'TVR Aufstellung', number: '1', image:'TVRAufstellung.jpg'},
  {name: 'Gäste Aufstellung', number: '2'},
  {name: 'Tabelle', number: '3'},
  {name: 'Spieler Einzeln', number: '4'},
  {name: 'Teambild', number: '5'},
  {name: 'Chat', number: '7'},
  {name: 'Chat Erklärung', number: '8'},
  {name: 'Video-Wiederholung', number: '10'},
]
