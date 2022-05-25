import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AutoComponent } from './auto/auto.component';
import { ManualComponent } from './manual/manual.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, AutoComponent, ManualComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
