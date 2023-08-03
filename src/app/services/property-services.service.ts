import { Injectable } from '@angular/core';
import { propertyInterface } from '../interfaces/propertyInterface';

@Injectable({
  providedIn: 'root'
})
export class PropertyServicesService {

  constructor() { }
  AllProperty:propertyInterface[]=[
    {
    Id:1,
    Image:'assets/img/house1.jpg',
    Title:'LakeView ',
    Location:"Kitale",
    PropertyType:'2 Bedrooms',
    Price:'Ksh.20,000',
    AvailableUnits:10,
    Wifi:true,
    Parking:true

  },
  {
    Id:2,
    Image:'assets/img/house2.jpg',
    Title:'Mountain View ',
    Location:"Nairobi",
    PropertyType:'3 Bedrooms',
    Price:'Ksh.33,000',
    AvailableUnits:9,
    Wifi:true,
    Parking:true

  },
  {
    Id:3,
    Image:'assets/img/house3.jpg',
    Title:'Ocean ',
    Location:"Eldoret",
    PropertyType:'2 Bedrooms',
    Price:'Ksh.20,000',
    AvailableUnits:8,
    Wifi:true,
    Parking:true

  },
  {
    Id:4,
    Image:'assets/img/house5.jpg',
    Title:'Hillside ',
    Location:"Kitale",
    PropertyType:'2 Bedrooms',
    Price:'Ksh.20,000',
    AvailableUnits:10,
    Wifi:true,
    Parking:true

  },
  {
    Id:5,
    Image:'assets/img/house8.jpg',
    Title:'Oracle',
    Location:"Nakuru",
    PropertyType:'2 Bedrooms',
    Price:'Ksh.20,000',
    AvailableUnits:5,
    Wifi:true,
    Parking:true

  },
  {
    Id:6,
    Image:'assets/img/house7.jpg',
    Title:'BluWell ',
    Location:"Nairobi",
    PropertyType:'2 Bedrooms',
    Price:'Ksh.25,000',
    AvailableUnits:10,
    Wifi:true,
    Parking:true

  },
  {
    Id:7,
    Image:'assets/img/house6.jpg',
    Title:'Oval House ',
    Location:"Kitale",
    PropertyType:'3 Bedrooms',
    Price:'Ksh.35,000',
    AvailableUnits:10,
    Wifi:true,
    Parking:true

  },
  {
    Id:8,
    Image:'assets/img/house4.jpg',
    Title:'LakeView ',
    Location:"Kitale",
    PropertyType:'2 Bedrooms',
    Price:'Ksh.20,000',
    AvailableUnits:10,
    Wifi:true,
    Parking:true

  }
  
]

getAllProperty():propertyInterface[]{
  return this.AllProperty
}

getPropertyById(Id:number): propertyInterface | undefined {
  let property= this.AllProperty.find(propertyInterface=>propertyInterface.Id==Id)
  return property
  // for(let property of this.AllProperty){
  //   if(property.Id==Id){
  //     console.log(property);

  //   }
  // }
  // console.log(Id);
  
}


}
