import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  isCloseWindow = true;
  constructor(private appService: AppService) {}

  getUsers(): void {
    this.appService.getUsers().subscribe(console.log);
  }

  closeAuth(event: boolean): void {
    console.log('close auth', event);
    this.isCloseWindow = event;
  }

  login(): void {
    this.isCloseWindow = false;
  }

  cart(): void {

  }
}
