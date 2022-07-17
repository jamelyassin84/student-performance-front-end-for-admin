import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { MatSelectModule } from '@angular/material/select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppHeaderComponent } from 'app/components/app-header/app-header.component';
import { MatRadioModule } from '@angular/material/radio';

const components = [AppHeaderComponent];

const modules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FuseCardModule,
    FuseAlertModule,
    MatSelectModule,
    NgApexchartsModule,
    MatMenuModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
];

const pipes = [];

const directives = [];

@NgModule({
    declarations: [...components],
    imports: [...modules],
    exports: [...modules, ...components],
})
export class SharedModule {}
