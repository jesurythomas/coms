import { Component, OnInit } from '@angular/core';
import { Tabs } from './tab-data';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  tabsData: any = [];

  constructor() {}

  ngOnInit(): void {
    this.tabsData = Tabs;
  }
}
