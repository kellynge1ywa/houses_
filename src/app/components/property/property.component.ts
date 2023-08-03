import { Component, Input ,Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { propertyInterface } from 'src/app/interfaces/propertyInterface';
import { PropertyServicesService } from 'src/app/services/property-services.service';

@Component({
  selector: 'property',
  standalone: true,
  imports: [CommonModule,Navbar,RouterModule,RouterLink],
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class Property implements OnInit{
  @Input() propertyList!:propertyInterface;

  AllProperty:propertyInterface[]=[]

  constructor(private router:Router, private propertyService:PropertyServicesService){}

  ngOnInit(): void {
      this.AllProperty= this.propertyService.getAllProperty();
      
  }
  

  goToAddProperty(){
    this.router.navigate(['property/addProperty'])
  }
  goToDetails(property_Id:number){
    // console.log(property_Id);

  }
  
  


  


  // goToDetailsPage(){
  //   this.router.navigate(['property/details'])
  // }

}
