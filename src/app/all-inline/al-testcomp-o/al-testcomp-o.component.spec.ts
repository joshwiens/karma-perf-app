import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompOComponent } from './al-testcomp-o.component';

describe('AlTestcompOComponent', () => {
  let component: AlTestcompOComponent;
  let fixture: ComponentFixture<AlTestcompOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
