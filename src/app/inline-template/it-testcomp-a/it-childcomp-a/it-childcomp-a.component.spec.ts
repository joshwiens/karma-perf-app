import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItChildcompAComponent } from './it-childcomp-a.component';

describe('ItChildcompAComponent', () => {
  let component: ItChildcompAComponent;
  let fixture: ComponentFixture<ItChildcompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItChildcompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItChildcompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
