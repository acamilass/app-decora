import { Component, OnInit } from '@angular/core';
import { ServeService } from '../shared/helpers/serve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(public serve: ServeService, public router: Router) {

   }

  ngOnInit() {
    this.serve.getUser();
  }

  logoff() {
    this.serve.logout();
    this.router.navigate(['/login']);
  }

}
