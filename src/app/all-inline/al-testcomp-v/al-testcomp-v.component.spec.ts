import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompVComponent } from './al-testcomp-v.component';

describe('AlTestcompVComponent', () => {
  let component: AlTestcompVComponent;
  let fixture: ComponentFixture<AlTestcompVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
