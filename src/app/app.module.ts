import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircularGraphComponent } from './circular-graph/circular-graph.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CircularGraphComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
