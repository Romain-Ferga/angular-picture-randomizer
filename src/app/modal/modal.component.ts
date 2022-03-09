import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() modalCloseEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  modalClose(){

    return this.modalCloseEvent.emit(false);

  }

}
