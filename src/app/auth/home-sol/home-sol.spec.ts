import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSol } from './home-sol';
import { provideRouter } from '@angular/router';
import { AuthService } from '../../service/auth-service';
import { authServiceStub } from '../../testing/auth-service.stub';

describe('HomeSol', () => {
    let component: HomeSol;
    let fixture: ComponentFixture<HomeSol>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeSol],
            providers: [provideRouter([]), { provide: AuthService, useValue: authServiceStub }],
        }).compileComponents();

        fixture = TestBed.createComponent(HomeSol);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
