import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { IsTestcompEComponent } from './is-testcomp-e.component';

describe('Component: IsTestcompEComponent', () => {
  let component: IsTestcompEComponent;
  let fixture: ComponentFixture<IsTestcompEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTestcompEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTestcompEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should correctly render the @Input value', () => {
    expect(fixture.debugElement.children[0].nativeElement.innerHTML).toBe('');
    component.testMessage = 'input text';
    fixture.detectChanges();
    expect(fixture.debugElement.children[0].nativeElement.innerHTML).toBe('input text');
  });
});
