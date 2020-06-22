import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class DigimonService {
    baseUrl = `https://digimon-api.herokuapp.com/api/digimon`;

    constructor(private http: HttpClient) {

    }

    getDigimons(idxstart=0) {
        if(idxstart) {
            return this.http.get(`${this.baseUrl}/digimon?offset=${idxstart}`);
        }
        else {
            return this.http.get(`${this.baseUrl}/digimon`);
        }
    }

    getDigimon(name: string) {
        return this.http.get(`${this.baseUrl}/digimon/name/${name}`);
    }
}
