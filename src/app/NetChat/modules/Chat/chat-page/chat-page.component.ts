import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  standalone: true,
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent {
  constructor(private router: Router) {}

  enterChatRoom() {
    this.router.navigate(['/chat/chat-room']);
  }
}
