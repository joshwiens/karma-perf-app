import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompEComponent } from './al-testcomp-e.component';

describe('AlTestcompEComponent', () => {
  let component: AlTestcompEComponent;
  let fixture: ComponentFixture<AlTestcompEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
