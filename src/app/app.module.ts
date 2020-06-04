import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MatDialogModule, MatInputModule } from '@angular/material';
import { HttpInterceptorService } from './http-config/http-interceptor.service';
import { ErrorDialogComponent } from './shared/components/error-dialog/error-dialog.component';
import { ErrorHandlingService } from './http-config/error-handling.service';
import { SearchComponent } from './components/search/search.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorDialogComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    ErrorHandlingService,
    DataService
  ],
  entryComponents: [ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
