import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

export class ChatService {
    private url = 'http://localhost:3000';
    private socket;
    private room;

    constructor() {
        this.socket = io(this.url);
    }
    public setRoom(room){
      this.room=room;
    }
    public getRoom()
    {
      return this.room;
    }
    public sendMessage(message, username) {
        this.socket.emit('new-message', message);
    }

    public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('new-message', (message) => {
                observer.next(message);
               console.log(message);
            });
        });
    }
    public getListOfRooms()
    {
      this.socket.emit('room','userRoom');
      return Observable.create((observer) => {
            this.socket.on('roomList', (rooms) => {
                observer.next(rooms);
               console.log(rooms);
            });
        });
    }
}
