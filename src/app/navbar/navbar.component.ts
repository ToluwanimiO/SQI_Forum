import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() searchText = new EventEmitter<String>()
  constructor() { }

  ngOnInit(): void {
  }
  emitText(e){
    this.searchText.emit(e.target.value)
    // console.log(e.target.value)
  }

}
