import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-with-actions',
  templateUrl: './table-with-actions.component.html',
  styleUrls: ['./table-with-actions.component.css']
})
export class TableWithActionsComponent {

  @Input() dataSource!: MatTableDataSource<any>;  
  @Input() displayedColumns!: any[];
  @Input() actionButtons!: any[];

  tablesToDisplay : any[] = []


  constructor() {
    console.log('Constructor');
    // const children = this.displayedColumns.concat(['actions']);
    // this.tablesToDisplay = [this.displayedColumns, 'actions'];
    console.log("Tables",  this.displayedColumns);
  }

 
  ngOnChanges(): void {
    console.log('ngOnChanges');
    this.tablesToDisplay = this.displayedColumns.concat(['actions']);
    // this.tablesToDisplay = [this.displayedColumns, 'actions'];
    console.log("Tables", this.tablesToDisplay );
  }

 

}
