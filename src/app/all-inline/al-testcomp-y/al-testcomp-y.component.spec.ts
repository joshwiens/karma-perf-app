import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompYComponent } from './al-testcomp-y.component';

describe('AlTestcompYComponent', () => {
  let component: AlTestcompYComponent;
  let fixture: ComponentFixture<AlTestcompYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
