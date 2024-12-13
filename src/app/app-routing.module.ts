import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftwrapComponent } from './components/giftwrap/giftwrap.component';
import { SecondpageComponent } from './components/secondpage/secondpage.component';
import { ThirdpageComponent } from './components/thirdpage/thirdpage.component';

const routes: Routes = [
  // { path: '*', redirectTo: '', pathMatch: 'full' },
  { path: '', component: GiftwrapComponent },
  { path: 'second-page', component: SecondpageComponent },
  { path: 'third-page', component: ThirdpageComponent },
  // { path: '**', component: GiftwrapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
