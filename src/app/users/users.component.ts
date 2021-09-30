import { Component, OnInit } from '@angular/core';

export interface user {
  last: string;
  first: string;
  action: string;
  status: string;
  clearence: string;
}

const ELEMENT_DATA: user[] = [
  {last: 'Varghese', first: 'Caleb', action: 'waiting', status:'waiting', clearence: 'none'},
  {last: 'Walker', first: 'Tyler', action: 'cleared', status:'cleared', clearence: 'none'},
  {last: 'Roberts', first: 'Kira', action: 'pending', status:'pending', clearence: 'none'},
  {last: 'Dvertola', first: 'Matt', action: 'forms', status:'waiting', clearence: 'none'},
  {last: 'Arnold', first: 'Tom', action: 'cleared', status:'cleared', clearence: 'none'},
  {last: 'Baker', first: 'Kirsten', action: 'cleared', status:'cleared', clearence: 'none'},
  {last: 'Larkin', first: 'Cindy', action: 'pending', status:'waiting', clearence: 'none'},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['last', 'first', 'action', 'status', 'clearence'];
  ngOnInit(): void {}
  dataSource = ELEMENT_DATA;
}
