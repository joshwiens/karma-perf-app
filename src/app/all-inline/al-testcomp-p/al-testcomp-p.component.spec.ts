import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompPComponent } from './al-testcomp-p.component';

describe('AlTestcompPComponent', () => {
  let component: AlTestcompPComponent;
  let fixture: ComponentFixture<AlTestcompPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
