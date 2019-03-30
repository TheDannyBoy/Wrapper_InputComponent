import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  emitter: string;
  buttonFlag = false;

  constructor() {}

  ngOnInit() {}

  keyUp(value: string) {
    console.log('keyUp - Wrapper', value, value.length);
    this.buttonFlag = value.length > 9 ? true : false;
  }

  click() {
    console.log('Button clicked!');
  }
}
