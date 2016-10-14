import {EventEmitter, Injectable} from  '@angular/core';
import { ISocketHandler } from "../../eimerreis.web/ISocketHandler";

declare function io() : any;
declare function io(url: string) : any;

@Injectable()
export class SocketService{
  socket = null;

  constructor(){
    this.socket = io("http://2weiremote.azurewebsites.net");
  }

  On(eventId: string, callback: (data: any) => any){
    this.socket.on(eventId, function(data){
      for(let handler of this.Handlers){
        if(handler.EventId === eventId){
          handler.Process(data);
        }
      }
    });
  }

  Emit(eventId: string, data: any){
    this.socket.emit(eventId, data);
    //console.log('---- socket event emitted ----- ' + eventId);
  }

  RegisterHandler(handler : ISocketHandler){
    this.Handlers.push(handler);
  }

  public Handlers : Array<ISocketHandler>;

  public  messageRecieved = new EventEmitter<Object>();
}
