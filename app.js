(function(){

	var app = angular.module('store', [ ]);

	app.controller("StoreController", function(){
		this.products =[
		{
			name: "Tetraeder",
			price: 2.95,
			description: "This is the basic shape of a mineral.",
			canPurchase: true,
			soldOut: false,
			reviews: [
				{
					stars:5,
					body: "I love this product!", 
					author: "joe@thomas.com"
				},
				{
					stars:3,
					body: "I like this product!", 
					author: "me@steffi.com"
				}
			]
		},
		{
			name: "Octaeder",
			price: 5.10,
			description: "This is the second basic shape of a mineral.",
			canPurchase: true,
			soldOut: false,
			reviews: [
				{
					stars:5,
					body: "I love this product!", 
					author: "joe@thomas.com"
				},
				{
					stars:3,
					body: "I like this product!", 
					author: "me@steffi.com"
				}
		]
	}
	]

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




})();

