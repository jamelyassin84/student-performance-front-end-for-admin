import {MatDialogModule} from '@angular/material/dialog'
import {EmptyPipe} from './../../@global_packages/pipes/empty.pipe'
import {HttpClientModule} from '@angular/common/http'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatMenuModule} from '@angular/material/menu'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {FuseCardModule} from '@fuse/components/card'
import {FuseAlertModule} from '@fuse/components/alert'
import {MatSelectModule} from '@angular/material/select'
import {NgApexchartsModule} from 'ng-apexcharts'
import {AppHeaderComponent} from 'app/components/app-header/app-header.component'
import {MatRadioModule} from '@angular/material/radio'
import {HasDataPipe} from '@global_packages/pipes/has-data.pipe'
import {ToAveragePerformancePipe} from 'app/app-core/pipes/to-avarage-perfromance.pipe'
import {PredictPipe} from 'app/app-core/pipes/regression.pipe'
import {SVMPredictPipe} from 'app/app-core/pipes/svm.pipe'
import {ToOptimizedRegressionPipe} from 'app/app-core/pipes/optimized-regression.pipe'
import {appStateModules} from './app.state'
import {appEffects} from './app.effects'
import {SortByTopeStudentPipe} from 'app/app-core/pipes/sort-by-top-student.pipe'

const components = [AppHeaderComponent]

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
    MatDialogModule,
    MatButtonModule,
]

const pipes = [
    HasDataPipe,
    EmptyPipe,
    ToAveragePerformancePipe,
    PredictPipe,
    SVMPredictPipe,
    ToOptimizedRegressionPipe,
    SortByTopeStudentPipe,
]

const directives = []

@NgModule({
    declarations: [...components, ...pipes],
    exports: [...modules, ...components, ...pipes],
    imports: [...modules, ...appEffects, ...appStateModules],
})
export class SharedModule {}
