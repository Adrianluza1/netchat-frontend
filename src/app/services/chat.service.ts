import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://api.example.com/chats';

  constructor(private http: HttpClient) {}

  getChats(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  sendMessage(chatId: string, message: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${chatId}/messages`, { message });
  }
}
