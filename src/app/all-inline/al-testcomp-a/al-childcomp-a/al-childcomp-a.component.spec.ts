import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlChildcompAComponent } from './al-childcomp-a.component';

describe('AlChildcompAComponent', () => {
  let component: AlChildcompAComponent;
  let fixture: ComponentFixture<AlChildcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlChildcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlChildcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
