import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/sharedSer/user/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  usersRef: any[] = [];
  constructor(private userSer: UserService) { }

  ngOnInit(): void {
    console.log(this.userSer.getAllUsers());
    this.userSer.getAllUsers().subscribe((res) => this.usersRef = res)

  }

}
