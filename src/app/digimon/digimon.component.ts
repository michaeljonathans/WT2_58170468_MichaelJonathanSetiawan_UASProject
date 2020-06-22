import { Component, OnInit } from "@angular/core";

import { DigimonService } from "./digimon.service";
import { BehaviorSubject } from "rxjs";

@Component({
    selector: "ns-digimons",
    templateUrl: "./digimon.component.html"
})
export class DigimonComponent implements OnInit {
    digimons=[];
    digimons$: BehaviorSubject<Array<any>>;
    idxstart=0;

    constructor(private ds: DigimonService) {
        this.digimons$ = new BehaviorSubject([]);
    }

    ngOnInit(): void {
        this.ds.getDigimons().subscribe((response: any) => {
            this.digimons.push( ... response.results);
            this.digimons$.next(this.digimons);
        });
    }

    loadMore() {
        this.idxstart+=20;

        this.ds.getDigimons(this.idxstart).subscribe((response: any) => {
            this.digimons.push( ... response.results);
            this.digimons$.next(this.digimons);
            }
        );
    }
}
