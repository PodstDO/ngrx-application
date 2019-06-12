import { Component, OnInit } from '@angular/core';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectAuthLoader, selectCurrentUser } from 'src/app/store/selectors/auth.selectors';
import { ICurrentUser } from 'src/app/shared/models/currentUser.interface';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
    selector: 'app-profile-settings',
    templateUrl: 'profile-settings.component.html',
    styleUrls: ['profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
    constructor(
        private fb: FormBuilder,
        private store: Store<IAppState>,
        private storage: AngularFireStorage
    ) { }

    private currentUser$: Observable<ICurrentUser> = this.store.pipe(select(selectCurrentUser));
    private selectedPhoto;
    public profileSettingsForm: FormGroup;
    public profileSettingsButtonOptions: MatProgressButtonOptions = {
        active: false,
        text: 'Save',
        spinnerSize: 20,
        raised: true,
        stroked: false,
        flat: false,
        fab: false,
        buttonColor: 'primary',
        spinnerColor: 'primary',
        fullWidth: false,
        disabled: true,
        mode: 'indeterminate',
    };

    public uploadPhotoButtonOptions: MatProgressButtonOptions = {
        active: false,
        text: 'Upload',
        spinnerSize: 20,
        raised: true,
        stroked: false,
        flat: false,
        fab: false,
        buttonColor: 'primary',
        spinnerColor: 'primary',
        fullWidth: false,
        disabled: false,
        mode: 'indeterminate',
    }

    ngOnInit() {
        this.profileSettingsForm = this.initProfileSettingsForm();
        this.profileSettingsForm.statusChanges.subscribe(validStatus => {
            this.profileSettingsButtonOptions.disabled = validStatus === 'INVALID' ? true : false;
        });
        this.store.pipe(select(selectAuthLoader)).subscribe(loader => {
            this.profileSettingsButtonOptions.active = loader;
        });
        this.currentUser$.subscribe(currentUser => {
            if (!currentUser) {
                return;
            }

            this.profileSettingsForm.patchValue({
                name: currentUser.firstName,
                surname: currentUser.lastName,
                phone: currentUser.phone,
                email: currentUser.email
            });
        });
    }

    initProfileSettingsForm(): FormGroup {
        return this.fb.group(
            {
                file: [null],
                name: ['', Validators.required],
                surname: ['', Validators.required],
                phone: ['', Validators.required],
                email: [{ value: '', disabled: true }, Validators.required],
            }
        );
    }

    onFileChange(event) {
        const [file] = event.target.files;
        if (file) {
            this.selectedPhoto = file;
        }
    }

    uploadPhoto() {
        console.warn(this.selectedPhoto);
    }

    saveSettings(e) {
        e.preventDefault();


    }
}
