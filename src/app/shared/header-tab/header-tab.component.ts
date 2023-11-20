import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-header-tab',
  templateUrl: './header-tab.component.html',
  styleUrls: ['./header-tab.component.scss'],
})
export class HeaderTabComponent  implements OnInit {
@Input() titulo: string = "";

  constructor() { }

  ngOnInit() {}

}
