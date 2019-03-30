import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Output() keyupEvent = new EventEmitter<any>();
  @ViewChild('input') input: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onBlur(event: Event) {
    console.log('onBlur', event);
  }

  onFocus(event: Event) {
    console.log('onFocus', event);
  }

  onKeyUp(event: Event) {
    this.keyupEvent.emit(this.input.nativeElement.value);
    console.log('KeyUp - Input', event);
  }

}
