import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'Angular'; }
