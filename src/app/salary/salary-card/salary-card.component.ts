import { Component, Input, OnInit } from "@angular/core";
import { Salary } from "../salary.model";
import { ProcessingDateService } from "../../processing-date/processing-date.service";

@Component({
    selector: "salary-card",
    templateUrl: "./salary-card.component.html",
    styleUrls: ["./salary-card.component.css"]
})
export class SalaryCardComponent implements OnInit{
    @Input() public salary = {} as Salary;

    public constructor(
        protected readonly processingDateService: ProcessingDateService
    ){}

    public ngOnInit(): void {
        console.log(this.salary);
    }
}
