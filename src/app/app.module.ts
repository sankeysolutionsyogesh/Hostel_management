import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Firebase library
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment.development';
import { LayoutModule } from '@angular/cdk/layout';

// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatTableModule } from '@angular/material/table';
// import { MatIconModule } from '@angular/material/icon';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatDialogModule } from '@angular/material/dialog';
// import { NgIf } from '@angular/common';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import { MatCardModule } from '@angular/material/card';
// import { MatListModule } from '@angular/material/list';
// import { MatDividerModule } from '@angular/material/divider';
// import { DatePipe } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentModule } from './student/student.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    StudentModule,
    AdminModule,
    LayoutModule
    // AuthModule,
    // BrowserAnimationsModule,
    // AngularFireAuthModule,
    // MatSlideToggleModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // MatDatepickerModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // MatTableModule,
    // MatNativeDateModule,
    // MatIconModule,
    // MatSnackBarModule,
    // MatDialogModule,
    // NgIf,
    // FormsModule,
    // HttpClientModule,
    // MatToolbarModule,
    // ReactiveFormsModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // CKEditorModule,
    // MatCardModule,
    // MatDividerModule,
    // MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
