import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './Components/header/header.component';
import { CardComponent } from './Components/card/card.component';
import { HomeComponent } from './Components/HomePage/home/home.component';
import { ApiComponent } from './Components/HomePage/api/api.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { TruncatePipe } from './truncate.pipe';
import { CategoryComponent } from './Components/HomePage/categorys/category/category.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    HomeComponent,
    ApiComponent,
    TruncatePipe,
    CategoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
