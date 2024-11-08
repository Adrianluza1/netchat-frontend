import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  standalone: true,
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent {
  messages = [
    { text: 'Hello!', sender: 'User1' },
    { text: 'Hi there!', sender: 'User2' }
  ];
  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, sender: 'You' });
      this.newMessage = '';
    }
  }
}
