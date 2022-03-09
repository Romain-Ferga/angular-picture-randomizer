import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() showModal:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(){

    this.showModal = true;

  }

  closeModal(){

    this.showModal = false;

  }

}
