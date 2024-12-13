import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { ConfettiComponent } from './components/confetti/confetti.component';
import { GiftwrapComponent } from './components/giftwrap/giftwrap.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SecondpageComponent } from './components/secondpage/secondpage.component';
import { ThirdpageComponent } from './components/thirdpage/thirdpage.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ConfettiComponent,
    GiftwrapComponent,
    LandingPageComponent,
    SecondpageComponent,
    ThirdpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
