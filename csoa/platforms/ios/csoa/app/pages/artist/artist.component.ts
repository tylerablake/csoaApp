import { Component } from "@angular/core";
import { Router } from "@angular/router";

let artistList = ["Freddy", "Tara", "Shelby"];

@Component({
 selector: "artist",
  templateUrl: "pages/artist/artist.html",
  styleUrls: ["pages/artist/artist-common.css", "pages/artist/artist.css"]
})

export class ArtistComponent {
    public artists: Array<string>;
    public index: number;
    public selectedArtist : number;

    constructor(public router : Router) {
        this.artists = [];

        for (let i = 0; i < artistList.length; i++) {
            this.artists.push(artistList[i]);
        }
        this.selectedArtist = 0; 
        this.index = 0;               
    }

    public selectedIndexChanged(picker) {
        console.log("picker selection: " + picker.selectedIndex);
        this.selectedArtist = picker.selectedIndex;
    }

    public goToArtistPage(){
        var artistName = artistList[this.selectedArtist];
        console.log("Selected Artist: " + artistName);

        try{
            console.log("Attempting to navigate to : /"+artistName );
            this.router.navigate(["/"+artistName]);          

        }
        catch(error){
            if(error != null){
                this.router.navigate(["/artist"]);
            alert("This artist page is not finished yet.");    
            }
        }
        finally{         
        }
        
    }
}