import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompQComponent } from './al-testcomp-q.component';

describe('AlTestcompQComponent', () => {
  let component: AlTestcompQComponent;
  let fixture: ComponentFixture<AlTestcompQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
