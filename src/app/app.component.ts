import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';
  responses = [
    'Hi! You can contact us via contactchatbot@chat.com',
    'Sure! Our customer service team is available 24/7.',
    'Thank you for contacting us. We will get back to you shortly.'
  ];
  responseIndex = -1;
  loading = false; 
  config = {
    title: 'Chat Bot',
    subTitle: 'Welcome!',
  };
  
  setData(message: string) {
    this.loading = true;
    setTimeout(() => {

      this.responseIndex = (this.responseIndex + 1) % this.responses.length;
      this.loading = false; 
    }, 1000); 
  }
  
  onMessageInput(message: string) {
    this.setData(message);
  }
}
