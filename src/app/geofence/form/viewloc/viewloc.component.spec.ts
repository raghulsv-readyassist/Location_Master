import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlocComponent } from './viewloc.component';

describe('ViewlocComponent', () => {
  let component: ViewlocComponent;
  let fixture: ComponentFixture<ViewlocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
