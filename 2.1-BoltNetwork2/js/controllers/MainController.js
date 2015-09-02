app.controller('MainController', ['$scope', function($scope) {
  $scope.programs = [{
	  	series: "Sherlock",
	  	series_img: "img/sherlock.jpg",
	  	genre: "Crime drama",
	  	season: 3,
	  	episode: "The Empty Hearse",
	  	description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
	  	datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
	}, {
  	series: "Flash",
  	series_img: "img/flash.jpg",
  	genre: "Superhero fiction",
  	season: 1,
  	episode: "Going Rogue",
  	description: "Dr. Wells begins testing Barry's powers by forcing him to perform multiple tasks at superspeed. Felicity Smoak arrives to check on Barry, after learning that he woke from his coma. To combat the \"Streak\", Snart acquires stolen tech from S.T.A.R. Labs, which includes a cryonic gun. Felicity helps the team locate Snart, who sets a trap for Barry.",
  	datetime: new Date(2014, 09, 28, 17, 0, 0, 0)
	}, {
  	series: "Castle",
  	series_img: "img/castle.jpg",
  	genre: "Comedy-drama",
  	season: 7,
  	episode: "Clear and Present Danger",
  	description: "Pool shark Will Fairwick gets impaled inside his apartment. Billiards club owner Fats Shepherd says Will made a deal with the devil and Will believed his end was near. Video footage shows Will's apartment door opening and closing by itself moments after his murder, causing the detectives to wonder if Will was correct.",
  	datetime: new Date(2014, 09, 13, 19, 0, 0, 0)
	}];
}]);