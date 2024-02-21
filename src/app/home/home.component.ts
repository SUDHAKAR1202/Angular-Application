import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any = [];
  p: string | number | undefined;


 

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.apiService.sendGetRequest().subscribe((data) => {
      console.log(data);
      this.products = data;
    })

  }

}
