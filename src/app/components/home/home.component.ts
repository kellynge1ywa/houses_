import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule,RouterModule,Navbar],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home {

  constructor(private router:Router){}
  goToPropertyPage(){
    this.router.navigate(['property'])
  }

}
