import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { RowModel } from './types/row.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private apiService: ApiService) { }
  rows: any;
  displayAddPopUp: boolean;
  displayEditPopUp: boolean;
  rowForEdit: RowModel;
  rowForAdd:RowModel;
  ngOnInit() {
    this.apiService.getAllData().subscribe(res => {
      this.rows = res['result'];
    })
  }

  deleteRow(eventId) {
    this.apiService.deleteRowByEventId(eventId).subscribe(res => {
      this.rows = res['result'];
    })
  }

  editRow(row) {
    this.displayEditPopUp = true;
    this.rowForEdit = new RowModel(row);
  }
  addRow(){
    this.displayAddPopUp = true;
    this.rowForAdd = new RowModel({});
  }

  addUpdateServer(row) {
    this.displayAddPopUp = false;
    this.apiService.addRow(row).subscribe(res => {
       this.rows = res['result'];
     })
  }

  editUpdateServer(row) {
    this.displayEditPopUp = false;
    this.apiService.editRow(row).subscribe(res => {
      this.rows = res['result'];
    })
  }

 

}
