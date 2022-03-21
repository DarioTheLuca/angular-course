import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticoliComponent } from './articoli/articoli.component';
import { ClientiComponent } from './clienti/clienti.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { SecondloginComponent } from './secondlogin/secondlogin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Welcome2Component } from './welcome2/welcome2.component';
import { WrongloginComponent } from './wronglogin/wronglogin.component';

const routes: Routes = [
  { path:'' , component :LoginComponent},
  { path:'index' , component :LoginComponent},
  { path:'home' , component :LoginComponent},
  { path:'login' , component :LoginComponent},
  { path:'secondlogin/:userName' , component :SecondloginComponent},
  { path:'welcome/:username/:nome/:cognome' , component :WelcomeComponent},
  { path:'welcome2' , component :Welcome2Component},
  { path:'wronglogin' , component :WrongloginComponent},
  { path:'articoli' , component :ArticoliComponent},
  { path:'prodotti' , component :ProdottiComponent},
  { path:'clienti' , component :ClientiComponent},
  { path:'**' , component :ErrorComponent} // deve essere messo alla fine
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
