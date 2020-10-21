import { ROUTING } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';

import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { PremierService } from './premier.service';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FilsComponent,
    CvComponent,
    ItemCvComponent,
    DetailCvComponent,
    ListeCvComponent,
    StyleComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailComponent,
    AddCvComponent,
    DeleteCvComponent,
    ErrorComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ROUTING],
  providers: [PremierService],
  bootstrap: [AppComponent],
})
export class AppModule {}
