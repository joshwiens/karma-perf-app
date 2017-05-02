import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompBComponent } from './al-testcomp-b.component';

describe('AlTestcompBComponent', () => {
  let component: AlTestcompBComponent;
  let fixture: ComponentFixture<AlTestcompBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});