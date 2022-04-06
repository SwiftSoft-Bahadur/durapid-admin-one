import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/sharedSer/user/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  r_navbar: boolean = true
  constructor(private userSer: UserService) { }

  ngOnInit(): void {
    this.userSer.getAllUsers().subscribe((res)=>{
      console.log(res);
      
    })
  }

  toggle() {
    this.r_navbar = !this.r_navbar;
  }

}
