import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateInventoryComponent } from "./components/create-inventory/create-inventory.component";
import { HomeComponent } from "./components/home/home.component";
import { InventoriesComponent } from "./components/inventories/inventories.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "inventories", component: InventoriesComponent },
  { path: "inventories/create", component: CreateInventoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
