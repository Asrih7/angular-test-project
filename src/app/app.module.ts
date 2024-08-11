import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { NgChatbotAngularModule } from 'ng-chatbot-angular';
import { CreditCardFormModule } from 'ng-payment-card-form';



@NgModule({
    declarations: [
        AppComponent,
        TestComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgChatbotAngularModule,
        CreditCardFormModule
        ],
    providers: [],
    bootstrap: [AppComponent],
    
})
export class AppModule {}
