import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Users } from './users';
import { AuthService } from '../../service/auth-service';
import { authServiceStub } from '../../testing/auth-service.stub';

describe('Users', () => {
    let component: Users;
    let fixture: ComponentFixture<Users>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Users],
            providers: [{ provide: AuthService, useValue: authServiceStub }],
        }).compileComponents();

        fixture = TestBed.createComponent(Users);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
