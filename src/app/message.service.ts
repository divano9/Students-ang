import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  addNewMessage(newMessage: string) {
    this.messages.push(newMessage);
  }

  clearMessages(){
    this.messages = [];
  }

  constructor() { }

}
