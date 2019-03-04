import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule,
  MatMenuModule, MatCardModule,
  MatSelectModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DetectionService } from './detection.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  exports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule,
    MatMenuModule, MatCardModule,
    MatSelectModule, BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule,
    MatMenuModule, MatCardModule,
    MatSelectModule, BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule
  ],
  providers: [DetectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
