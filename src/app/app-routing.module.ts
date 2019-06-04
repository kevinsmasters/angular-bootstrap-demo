import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactCreateComponent } from "./contact-create/contact-create.component";
import { HomeComponent } from "./home/home.component";
import { ComponentsComponent } from "./components/components.component";
import { ChartsComponent } from "./charts/charts.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "components", component: ComponentsComponent },
  { path: "charts", component: ChartsComponent },
  { path: "contact-create", component: ContactCreateComponent },
  { path: "contact-list", component: ContactListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
