import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact-create",
  templateUrl: "./contact-create.component.html",
  styleUrls: ["./contact-create.component.css"]
})
export class ContactCreateComponent implements OnInit {
  contact: { id; name; description; email } = {
    id: null,
    name: "",
    description: "",
    email: ""
  };

  constructor(public dataService: DataService, private router: Router) {}

  ngOnInit() {}

  createContact() {
    console.log(this.contact);
    this.dataService.createContact(this.contact);
    this.contact = { id: null, name: "", description: "", email: "" };
    this.router.navigate(["/contact-list"]);
  }
}
