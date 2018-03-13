import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }
}
