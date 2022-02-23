import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

@NgModule({
  declarations: [AppComponent, NopagefoundComponent],
  imports: [BrowserModule, RouterModule, PagesModule, AuthModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
