import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LoginEingabeComponent } from './login-eingabe/login-eingabe.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginButtonComponent } from './login-eingabe/login-button/login-button.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
//import { ReactiveFormsModule } from '@angular/forms';import { MatFormFieldModule} from '@angular/material/form-field';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from './menu/menu.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { InterestsComponent } from './interests/interests.component';
import { MatchingHistoryComponent } from './matching-history/matching-history.component';
import { ChatComponent } from './chat/chat.component';
import { NatchingResultsComponent } from './natching-results/natching-results.component';
import {MatChipsModule} from '@angular/material/chips';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const meineRouten: Routes = [
  {path: '', component: LoginEingabeComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'login', component: LoginEingabeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'createRoom', component: CreateRoomComponent},
  {path: 'joinRoom', component: JoinRoomComponent},
  {path: 'interests', component: InterestsComponent},
  {path: 'matchingHistory', component: MatchingHistoryComponent},
  {path: 'natchingresults', component: NatchingResultsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginEingabeComponent,
    LoginButtonComponent,
    SignupPageComponent,
    MenuComponent,
    CreateRoomComponent,
    JoinRoomComponent,
    InterestsComponent,
    ChatComponent,
    NatchingResultsComponent,
  ],

  imports: [
    RouterModule.forRoot(meineRouten),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatChipsModule,
    FormsModule, ReactiveFormsModule,

//    ReactiveFormsModule
],
exports: [
  RouterModule,
],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
