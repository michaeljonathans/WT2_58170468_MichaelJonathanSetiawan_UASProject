import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DigimonService } from "./digimon.service";

@Component({
    selector: "ns-details",
    templateUrl: "./digimon-detail.component.html"
})
export class DigimonDetailComponent implements OnInit {
    name;
    digimon;

    constructor(
        private route: ActivatedRoute, private ds: DigimonService
    ) { }

    ngOnInit(): void {
        this.name = this.route.snapshot.params.name;
        this.ds.getDigimon(this.name).subscribe(
            response => {
                this.digimon = response;
            }
        )
    }
}
