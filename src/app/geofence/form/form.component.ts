import { Component, OnInit, Input } from '@angular/core';
import { MapService } from 'src/app/shared/map.service';
import { NgForm } from '@angular/forms';
import { Map } from 'src/app/shared/map.model';
import { JsonpInterceptor } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = 'angular-material-tab-router';  
  navLinks: any[];
  activeLinkIndex = -1;
 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'addloc',
            link: './addloc',
            index: 0
        }, {
            label: 'viewloc',
            link: './viewloc',
            index: 1
        }, ]
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}

}