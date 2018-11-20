import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ExamComponent } from './exam/exam.component';
import { AdsComponent } from './ads/ads.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { NewsComponent } from './news/news.component';
import { PublicationComponent } from './publication/publication.component';
import { BookComponent } from './book/book.component';
import { AnswerComponent } from './answer/answer.component';
import {MatInputModule} from '@angular/material/input';
import { routing } from './app.route';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ExamComponent,
    AdsComponent,
    TutorialComponent,
    NewsComponent,
    PublicationComponent,
    BookComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
