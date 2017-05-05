import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AlTestcompEComponent } from './al-testcomp-e.component';

describe('Component: AlTestcompEComponent', () => {
  let component: AlTestcompEComponent;
  let fixture: ComponentFixture<AlTestcompEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTestcompEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTestcompEComponent);
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
