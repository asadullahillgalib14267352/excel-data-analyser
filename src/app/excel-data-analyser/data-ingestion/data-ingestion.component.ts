import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FileData} from "./services/domain/data-ingestion.domain";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-data-ingestion',
  templateUrl: './data-ingestion.component.html',
  styleUrls: ['./data-ingestion.component.css']
})
export class DataIngestionComponent implements OnInit, AfterViewInit {
  fileData: FileData[]=[
    { date: '12/02/2022', fileName: 'kiran',status:'mapped',schedule: '14/12/2021',action: 'Inject Now' },
    { date: '12/02/2022', fileName: 'Galib',status:'mapped',schedule: '14/12/2021',action: 'Inject Now' },
    { date: '12/02/2022', fileName: 'Habib',status:'mapped',schedule: '14/12/2021',action: 'Inject Now' },
    { date: '12/02/2022', fileName: 'Erfan',status:'mapped',schedule: '14/12/2021',action: 'Inject Now' },

  ];
  totalRecords: number = 5;
  displayedColumns: string[] = ['date', 'fileName', 'status', 'schedule','action'];
  dataSource = new MatTableDataSource<FileData>(this.fileData);
  constructor() { }

  ngOnInit(): void {

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public onToggleSidenav = () => {
  }

  navigateToDataMapping(){

  }
  navigateToDataAnalysis(){}
}
