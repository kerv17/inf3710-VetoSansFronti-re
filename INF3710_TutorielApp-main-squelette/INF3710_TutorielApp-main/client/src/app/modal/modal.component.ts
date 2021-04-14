import { Output,EventEmitter } from '@angular/core';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() isVisibleEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  close():void{
    this.isVisibleEvent.emit(false);
  }

}
