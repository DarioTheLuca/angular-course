import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wronglogin',
  templateUrl: './wronglogin.component.html',
  styleUrls: ['./wronglogin.component.css']
})
export class WrongloginComponent implements OnInit {
  [x: string]: any;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goLoginPage=()=>{
    this.route.navigate(['login'])
  }

}
