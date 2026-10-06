import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HomeTick } from './home-tick';
import { AuthService } from '../../service/auth-service';
import { authServiceStub } from '../../testing/auth-service.stub';

describe('HomeTick', () => {
    let component: HomeTick;
    let fixture: ComponentFixture<HomeTick>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeTick],
            providers: [
                provideRouter([]),
                { provide: AuthService, useValue: authServiceStub },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(HomeTick);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
