import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RowModel } from '../types/row.model';
@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.scss']
})
export class AddEditFormComponent implements OnInit {

  constructor() { }
  @Input() title;
  @Input() rowData: any = {};
  @Output() updateParentWithRowEvent: EventEmitter<RowModel> = new EventEmitter();
  row: RowModel;

  ngOnInit(): void {
    this.row = new RowModel(this.rowData);
  }

  save() {
    this.updateParentWithRowEvent.emit(this.row);
  }

}
