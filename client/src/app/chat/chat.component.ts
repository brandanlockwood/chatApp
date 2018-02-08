import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { User } from '../user.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message: string;
  messages: string[] = [];
  username : string;
  constructor(private chatService: ChatService,private user: User) {
   this.username=this.getCredentials();
  }

  getCredentials()
  {
    return this.user.getUserName();
  }

  sendMessage() {
    this.chatService.sendMessage(this.message,this.user.getUserName());
    this.message = '';

  }

  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        console.log(this.messages)
        this.messages.push(message);
      });
  }
}

