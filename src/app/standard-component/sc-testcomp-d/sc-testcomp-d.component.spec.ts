import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { customMatchers } from '../../shared/utils/custom-matchers';

import { ScTestcompDComponent } from './sc-testcomp-d.component';

describe('Component: ScTestcompDComponent', () => {
  let component: ScTestcompDComponent;
  let fixture: ComponentFixture<ScTestcompDComponent>;

  beforeEach(async(() => {
    jasmine.addMatchers(customMatchers);

    TestBed.configureTestingModule({
      declarations: [ ScTestcompDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScTestcompDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should correctly set the background style', () => {
      expect(fixture.debugElement.children[0].nativeElement).toHaveCssStyle({ 'background-color': 'red'});
  });
});
