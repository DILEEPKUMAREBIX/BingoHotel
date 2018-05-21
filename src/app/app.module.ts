import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { rootRouterConfig } from './app.routes';
import { AppCommonModule } from "./components/common/app-common.module";
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { AgmCoreModule } from '@agm/core';
import { MatDatepickerModule } from '@angular/material/datepicker'



// import { MapComponent } from './map.component';
// import { MapRoutes } from "./map.routing";
// import { FilterTableComponent } from './filter-table/filter-table.component';
// import { FullscreenTableComponent } from './fullscreen-table/fullscreen-table.component';
// import { PagingTableComponent } from './paging-table/paging-table.component';
// import { TablesRoutes } from "./tables.routing";
import { CommonDirectivesModule } from './directives/common/common-directives.module';

// import { CommonPipesModule } from "../../pipes/common/common-pipes.module";

import { RoutePartsService } from './services/route-parts/route-parts.service';
import { NavigationService } from "./services/navigation/navigation.service";
import { AuthGuard } from './services/auth/auth.guard';
import { HttpClientModule } from '@angular/common/http';
//import { InterceptorModule } from './interceptor/interceptor.module'
// import { AppCalendarComponent } from './views/deals/app-calendar.component';
import { ViewprofileComponent } from './views/viewprofile/viewprofile.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { FullscreenTableComponent } from './fullscreen-table/fullscreen-table.component';
import { PagingTableComponent } from './paging-table/paging-table.component';
import { TablesRoutes } from "./tables.routing";

import { MailComposeComponent } from './views/message/mail-compose.component';
import { SigninComponent } from './views/signin/signin.component';
import { ApiserviceService } from "./apiservice.service";
import { UserprofileService } from "./views/userprofile/userprofile.service";
import { ExplorenearbyService } from "./views/explorenearby/explorenearby.service";
import { UserslistService } from "./views/userslist/userslist.service";
import { ViewprofileService } from "./views/viewprofile/viewprofile.service";
import { EditprofileService } from "./views/editprofile/editprofile.service";

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { ExplorenearbyComponent } from './views/explorenearby/explorenearby.component';
import { PushnotificationComponent } from './views/pushnotification/pushnotification.component';
import { MessagetemplateComponent } from './views/messagetemplate/messagetemplate.component';
import { UsersegmentsComponent } from './views/usersegments/usersegments.component';
import { GeoregionComponent } from './views/georegion/georegion.component';
import { GeotriggerComponent } from './views/geotrigger/geotrigger.component';
// import { AddComponent } from './views/add/add.component';
import { TrackdealComponent } from './views/trackdeal/trackdeal.component';
// import { ViewprofileComponent } from './views/viewprofile/viewprofile.component';
import { AdddealComponent } from './views/adddeal/adddeal.component';
import { MessageComponent } from './views/message/message.component';
import { UserslistComponent } from './views/userslist/userslist.component';
import { MoneyComponent } from './views/money/money.component';
import { UsersComponent } from './views/users/users.component';
import { UsersblockedComponent } from './views/usersblocked/usersblocked.component';
import { UserprofileComponent } from './views/userprofile/userprofile.component';
import { EditprofileComponent } from './views/editprofile/editprofile.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    // CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    FlexLayoutModule,
    NgxDatatableModule,
    ChartsModule,
    FileUploadModule,
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FlexLayoutModule,
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule,
    MatStepperModule,
    FlexLayoutModule,
    QuillModule,
    NgxDatatableModule,
    FileUploadModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBNcjxo_35qnEG17dQvvftWa68eZWepYE0' }),

    CommonDirectivesModule,
    // CommonPipesModule,
    // FlexLayoutModule,
    //  InterceptorModule,
    AppCommonModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  declarations: [AppComponent, ViewprofileComponent, SigninComponent, ExplorenearbyComponent, PushnotificationComponent, MessagetemplateComponent, UsersegmentsComponent, GeoregionComponent, GeotriggerComponent, TrackdealComponent, AdddealComponent, MessageComponent, MessageComponent, MailComposeComponent, UserslistComponent, MoneyComponent, UsersComponent, UsersblockedComponent, UserprofileComponent, EditprofileComponent],
  entryComponents: [MailComposeComponent],
  providers: [
    RoutePartsService,
    NavigationService,
    ApiserviceService,
    UserprofileService,
    ViewprofileService,
    ExplorenearbyService,
    EditprofileService,
    AuthGuard,
    UserslistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
