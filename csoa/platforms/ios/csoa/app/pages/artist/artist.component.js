"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var artistList = ["Freddy", "Tara", "Shelby"];
var ArtistComponent = (function () {
    function ArtistComponent(router) {
        this.router = router;
        this.artists = [];
        for (var i = 0; i < artistList.length; i++) {
            this.artists.push(artistList[i]);
        }
        this.selectedArtist = 0;
        this.index = 0;
    }
    ArtistComponent.prototype.selectedIndexChanged = function (picker) {
        console.log("picker selection: " + picker.selectedIndex);
        this.selectedArtist = picker.selectedIndex;
    };
    ArtistComponent.prototype.goToArtistPage = function () {
        var artistName = artistList[this.selectedArtist];
        console.log("Selected Artist: " + artistName);
        try {
            console.log("Attempting to navigate to : /" + artistName);
            this.router.navigate(["/" + artistName]);
        }
        catch (error) {
            if (error != null) {
                this.router.navigate(["/artist"]);
                alert("This artist page is not finished yet.");
            }
        }
        finally {
        }
    };
    ArtistComponent = __decorate([
        core_1.Component({
            selector: "artist",
            templateUrl: "pages/artist/artist.html",
            styleUrls: ["pages/artist/artist-common.css", "pages/artist/artist.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ArtistComponent);
    return ArtistComponent;
}());
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFydGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV6QyxJQUFJLFVBQVUsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFROUM7SUFLSSx5QkFBbUIsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFTSw4Q0FBb0IsR0FBM0IsVUFBNEIsTUFBTTtRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDL0MsQ0FBQztJQUVNLHdDQUFjLEdBQXJCO1FBQ0ksSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBRTlDLElBQUcsQ0FBQztZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEdBQUMsVUFBVSxDQUFFLENBQUM7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUUzQyxDQUNBO1FBQUEsS0FBSyxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztZQUNULEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7WUFDL0MsQ0FBQztRQUNMLENBQUM7Z0JBQ00sQ0FBQztRQUNSLENBQUM7SUFFTCxDQUFDO0lBNUNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxRQUFRO1lBQ2pCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7U0FDekUsQ0FBQzs7dUJBQUE7SUF5Q0Ysc0JBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLHVCQUFlLGtCQXVDM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmxldCBhcnRpc3RMaXN0ID0gW1wiRnJlZGR5XCIsIFwiVGFyYVwiLCBcIlNoZWxieVwiXTtcblxuQENvbXBvbmVudCh7XG4gc2VsZWN0b3I6IFwiYXJ0aXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2FydGlzdC9hcnRpc3QuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2FydGlzdC9hcnRpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2FydGlzdC9hcnRpc3QuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgQXJ0aXN0Q29tcG9uZW50IHtcbiAgICBwdWJsaWMgYXJ0aXN0czogQXJyYXk8c3RyaW5nPjtcbiAgICBwdWJsaWMgaW5kZXg6IG51bWJlcjtcbiAgICBwdWJsaWMgc2VsZWN0ZWRBcnRpc3QgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyIDogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuYXJ0aXN0cyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJ0aXN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hcnRpc3RzLnB1c2goYXJ0aXN0TGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEFydGlzdCA9IDA7IFxuICAgICAgICB0aGlzLmluZGV4ID0gMDsgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRJbmRleENoYW5nZWQocGlja2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGlja2VyIHNlbGVjdGlvbjogXCIgKyBwaWNrZXIuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBcnRpc3QgPSBwaWNrZXIuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29Ub0FydGlzdFBhZ2UoKXtcbiAgICAgICAgdmFyIGFydGlzdE5hbWUgPSBhcnRpc3RMaXN0W3RoaXMuc2VsZWN0ZWRBcnRpc3RdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIEFydGlzdDogXCIgKyBhcnRpc3ROYW1lKTtcblxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF0dGVtcHRpbmcgdG8gbmF2aWdhdGUgdG8gOiAvXCIrYXJ0aXN0TmFtZSApO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiK2FydGlzdE5hbWVdKTsgICAgICAgICAgXG5cbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICBpZihlcnJvciAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYXJ0aXN0XCJdKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiVGhpcyBhcnRpc3QgcGFnZSBpcyBub3QgZmluaXNoZWQgeWV0LlwiKTsgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseXsgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59Il19