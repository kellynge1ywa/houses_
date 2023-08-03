import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { PropertyServicesService } from 'src/app/services/property-services.service';
import { propertyInterface } from 'src/app/interfaces/propertyInterface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,Navbar],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // activatedRoute:ActivatedRoute=Inject(ActivatedRoute)
  propertyId!:number;
  AllProperty!:propertyInterface | undefined;
  propertyDetails!: propertyInterface | undefined

  constructor(private activatedRoute:ActivatedRoute,private details:PropertyServicesService){}

  ngOnInit(): void {
    this.propertyId=this.activatedRoute.snapshot.params['Id']
    // console.log(this.activatedRoute.snapshot.params['Id']);
    this.propertyDetails=this.details.getPropertyById(this.propertyId)
    // console.log(this.propertyDetails);
      
  }


}
