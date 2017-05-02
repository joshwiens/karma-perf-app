import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTestcompXComponent } from './al-testcomp-x.component';

describe('AlTestcompXComponent', () => {
  let component: AlTestcompXComponent;
  let fixture: ComponentFixture<AlTestcompXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
