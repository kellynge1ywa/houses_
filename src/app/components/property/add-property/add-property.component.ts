import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Navbar } from '../../navbar/navbar.component';

@Component({
  selector: 'add-property',
  standalone: true,
  imports: [CommonModule,RouterModule,Navbar],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddProperty {

}
