import { Injectable } from '@angular/core';
import * as jsonData from '../../assets/data/data.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: any = jsonData;
  skills: any = this.data.skills;
  projects: any = this.data.projects;
  certificates: any = this.data.certificates;

  constructor() {
  }
}
