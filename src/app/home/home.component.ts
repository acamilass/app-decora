import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { User, databaseUser } from '../data-model';
import { DbService } from '../shared/helpers/db.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataSource: MatTableDataSource<User>;
  displayedColumns = ['Id', 'name', 'email', 'admin'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dbServe: DbService,
    private toastr: ToastrService, 
    private vcr: ViewContainerRef
  ) { }

  ngOnInit() {
    this.dbServe.initDatabase(databaseUser);
    this.dbServe
      .getAll(databaseUser)
      .then(results => {
        this.dataSource = new MatTableDataSource(results);
        this.dataSource.paginator = this.paginator;
      })
      .catch(error => this.toastr.warning(error));
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
