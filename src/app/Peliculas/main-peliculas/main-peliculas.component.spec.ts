import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPeliculasComponent } from './main-peliculas.component';

describe('MainPeliculasComponent', () => {
  let component: MainPeliculasComponent;
  let fixture: ComponentFixture<MainPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
