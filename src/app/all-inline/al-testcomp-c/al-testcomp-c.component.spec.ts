import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AlTestcompCComponent } from './al-testcomp-c.component';

describe('Component: AlTestcompCComponent', () => {
  let component: AlTestcompCComponent;
  let fixture: ComponentFixture<AlTestcompCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlTestcompCComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have the .active class if isActive is set true', () => {
    component.isActive = true;
    fixture.detectChanges();

    const classes: any = fixture.debugElement.query(By.css('div')).classes;
    expect(classes.active).toBeTruthy();
    expect(classes.inactive).toBeFalsy();
  });

  it('Should have the .inactive class if isActive is set false', () => {
    component.isActive = false;
    fixture.detectChanges();

    const classes: any = fixture.debugElement.query(By.css('div')).classes;
    expect(classes.inactive).toBeTruthy();
    expect(classes.active).toBeFalsy();
  });
});
