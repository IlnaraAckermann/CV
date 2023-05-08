import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  title:string=""
  school:string=""
  duration:string=""
  conclusion:string=""
  certificate:string=""

  certificates: any = this.dataService.certificates

  constructor(private dataService : DataService){}

  ngOnInit(): void {
    
  }
}
