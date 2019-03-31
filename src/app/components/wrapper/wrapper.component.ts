import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  emitter: string;
  @Input() buttonFlag: boolean;

  constructor() {}

  ngOnInit() {}

  click() {
    console.log('Button clicked!');
  }
}
