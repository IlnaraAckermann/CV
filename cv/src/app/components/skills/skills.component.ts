import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  name: string = ""
  icon: string= ""
  percent:number = 0
  skills: any = this.dataService.skills

  constructor(private dataService : DataService){}

  ngOnInit(): void {
  }
}

