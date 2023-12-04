import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users = [
    {
      id: 1,
      first_name: 'Justine',
      last_name: 'Imasiku',
      email: 'justine@gmail.com',
      cohort: '2024',
    },

    {
      id: 2,
      first_name: 'TheOnly',
      last_name: 'Ben',
      email: 'codeur@gmail.com',
      cohort: '2024',
    },

    {
      id: 3,
      first_name: 'Paulo',
      last_name: 'Ouana',
      email: 'paulo@gmail.com',
      cohort: '2024',
    },

    {
      id: 4,
      first_name: 'Samson',
      last_name: 'Bruno',
      email: 'samson@gmail.com',
      cohort: '2024',
    },
  ];

  viewUser: any;

  deleteUser(user: any): void {
    this.users = this.users.filter((u) => u.id !== user.id);
  }

  ngOnInit(): void {}
}