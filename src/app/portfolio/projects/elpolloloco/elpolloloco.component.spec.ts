import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElpollolocoComponent } from './elpolloloco.component';

describe('ElpollolocoComponent', () => {
  let component: ElpollolocoComponent;
  let fixture: ComponentFixture<ElpollolocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElpollolocoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElpollolocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
