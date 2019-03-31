import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'input';
  buttonDisabled = false;

  ngOnInit() {}

  keyUp(value: string) {
    console.log('keyUp - Wrapper', value, value.length);
    this.buttonDisabled = value.length > 9 ? true : false;
  }
}
