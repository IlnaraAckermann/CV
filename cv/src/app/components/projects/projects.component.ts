import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  title: string = '';
  imagem: string = '';
  detail: string = '';
  repo: string = '';
  projects: any = this.dataService.projects;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

}
