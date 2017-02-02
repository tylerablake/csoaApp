"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.goToListPage = function () {
        this.router.navigate(["/list"]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            templateUrl: "pages/home/home.html",
            styleUrls: ["pages/home/home-common.css", "pages/home/home.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBUXpDO0lBRUksdUJBQW9CLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO0lBRW5DLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFkTDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO1NBQ2pFLENBQUM7O3FCQUFBO0lBV0Ysb0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLHFCQUFhLGdCQVN6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImhvbWVcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvaG9tZS9ob21lLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9ob21lL2hvbWUtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2hvbWUvaG9tZS5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ29Ub0xpc3RQYWdlKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKTtcbiAgICB9XG59Il19