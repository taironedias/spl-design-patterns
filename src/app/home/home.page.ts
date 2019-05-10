import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigSubjectService } from '../services/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private config;

  constructor(public router: Router,
              private configService: ConfigSubjectService) {}

  ngOnInit() {
    this.configService.getInitConfig()
      .subscribe(data => this.config = data);
  }

  teacherUser() {
    this.router.navigate(['login']);
  }

  studantUser() {
    this.router.navigate([this.config.access]);
  }
}
