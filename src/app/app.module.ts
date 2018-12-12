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
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
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
    HttpClientModule,
    MatListModule,
    routing,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
