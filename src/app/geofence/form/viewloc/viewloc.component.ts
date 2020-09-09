import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/shared/map.service';
import { Map } from 'src/app/shared/map.model';

@Component({
  selector: 'app-viewloc',
  templateUrl: './viewloc.component.html',
  styleUrls: ['./viewloc.component.css']
})
export class ViewlocComponent implements OnInit {
  constructor(public service: MapService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(map:Map) {
    
  }

  // onDelete(id: number) {
  //   if (confirm('Are you sure to delete this record?')) {
  //     this.service.deleteloc(id).subscribe(res => {
  //       this.service.refreshList();
        
  //     });
  //   }
  // }

}