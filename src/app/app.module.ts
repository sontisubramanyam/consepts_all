import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent} from './home/home.component';
import { RegisterComponent} from './register/register.component';
import { DashboardoverviewComponent } from './dashboardoverview/dashboardoverview.component';
import { LoginComponent } from './login/login.component';
import { setGenderPipe } from './custom_pipe/serGender.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { fakeBackendProvider, JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule} from '@angular/flex-layout';
import { ConfirmDialogService } from './_confirm-dialog/confirm-dialog/confirm-dialog.service'

import { MustMatchDirective } from './_helpers/must-match.directive';
import { MainuserComponent } from './component_intereaction/mainuser/mainuser.component';
import { SubuserComponent } from './component_intereaction/subuser/subuser.component';
import { MaindataComponent } from './custom_pipe/maindata/maindata.component';
import { ConfirmDialogComponent } from './_confirm-dialog/confirm-dialog/confirm-dialog.component';
import { LoaderComponent } from './_loader-service/loader/loader.component';
import { LoaderService} from './_loader-service/-loader.service';
import { Ng2SearchPipeModule} from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardoverviewComponent,
    MustMatchDirective,
    MainuserComponent,
    SubuserComponent,
    MaindataComponent,
    setGenderPipe,
    ConfirmDialogComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    NgbModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule
  ],
  providers: [  // provider used to create fake backend
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ConfirmDialogService,NgbActiveModal,
    fakeBackendProvider,
    LoaderService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmDialogComponent ],

})
export class AppModule { }
