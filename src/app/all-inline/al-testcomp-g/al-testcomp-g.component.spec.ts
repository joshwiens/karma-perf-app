import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompGComponent } from './al-testcomp-g.component';

describe('AlTestcompGComponent', () => {
  let component: AlTestcompGComponent;
  let fixture: ComponentFixture<AlTestcompGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
