import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftwrapComponent } from './giftwrap.component';

describe('GiftwrapComponent', () => {
  let component: GiftwrapComponent;
  let fixture: ComponentFixture<GiftwrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiftwrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftwrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
