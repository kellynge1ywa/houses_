import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class Navbar{
  constructor(private router:Router){}

  logo="assets/img/home_logo.png"
  goToHomePage(){
    this.router.navigate([''])
  }

}
