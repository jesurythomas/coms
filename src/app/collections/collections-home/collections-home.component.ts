import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data: any = [
    {
      name: 'James',
      age: 24,
      profession: 'Designer',
      employed: 'Yes',
    },
    {
      name: 'Jill',
      age: 26,
      profession: 'Engineer',
      employed: 'No',
    },
    {
      name: 'Ray',
      age: 28,
      profession: 'Professor',
      employed: 'No',
    },
  ];
  headers: any = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'age',
      label: 'Age',
    },
    {
      key: 'profession',
      label: 'Profession',
    },
    {
      key: 'employed',
      label: 'Employed',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
