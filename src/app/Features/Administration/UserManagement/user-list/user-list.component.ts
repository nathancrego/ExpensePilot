import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/users.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  id: number | null = null;
  users$?: Observable<User[]>
  constructor(private userService: UsersService) { }


  ngOnInit(): void {
    this.users$ = this.userService.getAllUsers();
  }

}
