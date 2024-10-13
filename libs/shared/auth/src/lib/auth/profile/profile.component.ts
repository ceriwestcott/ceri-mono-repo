import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserProfile } from '@ceri-web-app/models';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  private itemDoc?: AngularFirestoreDocument<UserProfile>;
  userProfile$?: Observable<UserProfile | undefined>;

  afsService = inject(AngularFirestore);
  afaService = inject(AngularFireAuth);
  route = inject(ActivatedRoute);
  uid = '';
  profileForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    phone: new FormControl<string>('', Validators.required),
    address: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', Validators.required),
  });

  constructor() {
    this.uid = this.route.snapshot.paramMap.get('id') ?? '';
  }

  ngOnInit(): void {
    this.itemDoc = this.afsService.doc<UserProfile>(`users/${this.uid}`);

    this.userProfile$ = this.itemDoc.valueChanges().pipe(
      tap((userProfile) => {
        if (userProfile) {
          this.profileForm.patchValue({
            name: userProfile.name || '',
            phone: userProfile.phone || '',
            address: userProfile.address || '',
            email: userProfile.email || '',
          });
        }
      })
    );
  }

  onSubmit() {
    if (!this.profileForm.invalid) {
      const userProfile: UserProfile = {
        name: this.profileForm.value.name!,
        phone: this.profileForm.value.phone!,
        address: this.profileForm.value.address!,
        email: this.profileForm.value.email!,
        uid: this.uid,
      };

      this.afsService.doc<UserProfile>(`users/${this.uid}`).update(userProfile);
    }
  }
}
