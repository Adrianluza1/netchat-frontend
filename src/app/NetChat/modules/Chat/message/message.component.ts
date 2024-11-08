import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  standalone: true,
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() message!: { text: string; sender: string };
}
