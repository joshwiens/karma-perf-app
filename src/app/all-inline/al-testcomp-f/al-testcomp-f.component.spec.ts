import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompFComponent } from './al-testcomp-f.component';

describe('AlTestcompFComponent', () => {
  let component: AlTestcompFComponent;
  let fixture: ComponentFixture<AlTestcompFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
