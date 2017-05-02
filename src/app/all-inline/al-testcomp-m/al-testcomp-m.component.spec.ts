import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompMComponent } from './al-testcomp-m.component';

describe('AlTestcompMComponent', () => {
  let component: AlTestcompMComponent;
  let fixture: ComponentFixture<AlTestcompMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
