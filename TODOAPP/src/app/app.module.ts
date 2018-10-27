import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
import { MyfilterPipe } from './myfilter.pipe';

const appRoutes: Routes = [
  {
    path: 'Chart1',
    component: ItemsComponent,
    data: { title: 'Chart1' }
  },
  {
    path: 'items',
    component: ItemsComponent,
    data: { title: 'items Details' }
  },

];


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    MyfilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
