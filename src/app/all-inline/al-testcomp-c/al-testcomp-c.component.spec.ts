import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompCComponent } from './al-testcomp-c.component';

describe('AlTestcompCComponent', () => {
  let component: AlTestcompCComponent;
  let fixture: ComponentFixture<AlTestcompCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
