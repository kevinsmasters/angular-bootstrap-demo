import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ContactCreateComponent } from "./contact-create/contact-create.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ComponentsComponent } from "./components/components.component";
import { ChartsComponent } from "./charts/charts.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactCreateComponent,
    ContactListComponent,
    HeaderComponent,
    FooterComponent,
    ComponentsComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
