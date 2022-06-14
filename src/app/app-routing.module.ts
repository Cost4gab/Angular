import { SobreComponent } from './components/sobre/sobre.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ImagebsComponent } from './components/imagebs/imagebs.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'imagens', component: ImagebsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
