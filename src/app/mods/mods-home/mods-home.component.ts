import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;

  items: any = [
    {
      title: 'Why is the sky blue?',
      content: 'Because it is',
    },
    {
      title: 'Why does an orange taste like an orage?',
      content: 'Because it is an orage',
    },
    {
      title: 'What color is that cat?',
      content: 'Check google for the answer',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
