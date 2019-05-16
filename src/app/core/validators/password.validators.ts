import { Validators } from '@angular/forms';

export const passwordValidators = [Validators.minLength(6), Validators.maxLength(14), Validators.required];

export function passwordMatchValidator(control) {
    const password: string = control.get('password').value;
    const confirmPassword: string = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
        control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
}
