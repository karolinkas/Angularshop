(function(){

	var app = angular.module('store', [ ]);

	app.controller("StoreController", function(){
		this.products = gems;
	});

	app.controller("PanelController", function(){
		 this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};

	});

	var gems = [{
		name: "Tetraeder",
		price: 2.95,
		description: "This is the basic shape of a mineral.",
		canPurchase: true,
		soldOut: false,
	},
	{
		name: "Octaeder",
		price: 5.10,
		description: "This is the second basic shape of a mineral.",
		canPurchase: true,
		soldOut: false,
	}
	]



})();

