import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  developers: Developer[] = [
    {
      firstname: "Thomas", 
      lastname: "MLUDEK", 
      age: 38, 
      gender: "M", 
      bio: "lorem", 
      skills:[
        {
          name: "Grid friend developer", 
          logo:"logo de thomas", 
          site:"site de thomas"
        }, 
        {
          name: "ReactJS", 
          logo:"logo ReactJS", 
          site:"reactJS.com"
        }
      ]
    },
    {
      firstname: "Jean-Lau", 
      lastname: "le Warrior", 
      age: 39, 
      gender: "M", 
      bio: "Grid Force Forever", 
      skills:[
        {
          name: "Master Grid developer", 
          logo:"logo de Jean-Leau", 
          site:"grid-force.com"
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
