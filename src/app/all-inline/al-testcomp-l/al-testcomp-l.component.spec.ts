import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompLComponent } from './al-testcomp-l.component';

describe('AlTestcompLComponent', () => {
  let component: AlTestcompLComponent;
  let fixture: ComponentFixture<AlTestcompLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
