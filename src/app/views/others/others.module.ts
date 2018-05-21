import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  //MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  //MatListModule,
  //MatCardModule,
  //MatProgressBarModule,
  //MatRadioModule,
  //MatCheckboxModule,
  //MatButtonModule,
  //MatIconModule,
  MatStepperModule
} from '@angular/material';
import {
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatChipsModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDialogModule,
  MatTabsModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatProgressBarModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { CommonPipesModule } from "../../pipes/common/common-pipes.module";
import { CommonDirectivesModule } from "../../directives/common/common-directives.module";


import { AppGalleryComponent } from './app-gallery/app-gallery.component';
import { DialogOverviewExampleDialog } from './dialog-component/dialog.component';
import { AppPricingComponent } from './app-pricing/app-pricing.component';
import { AppUsersComponent } from './app-users/app-users.component';
import { AppBlankComponent } from './app-blank/app-blank.component';
import { OthersRoutes } from "./others.routing";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


//import { FormsRoutes } from "./forms.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatChipsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatProgressBarModule,
    FlexLayoutModule,
    NgxDatatableModule,
    ChartsModule,
    FileUploadModule,
    CommonPipesModule,
    CommonDirectivesModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    MatDialogModule,
    RouterModule.forChild(OthersRoutes)
  ],
  declarations: [AppGalleryComponent, AppPricingComponent, AppUsersComponent, AppBlankComponent, DialogOverviewExampleDialog],
  entryComponents: [DialogOverviewExampleDialog]

})
export class OthersModule { }
