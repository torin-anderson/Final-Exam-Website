import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <app-header />
    <app-home />
  `,
  styles: [`
    p {background-color: red}
    `],
})
export class AppComponent {
  title = 'finalExamWebsite';
}
