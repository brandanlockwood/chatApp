import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { User } from './user.service';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [

    LoginPageComponent,
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChatService, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
