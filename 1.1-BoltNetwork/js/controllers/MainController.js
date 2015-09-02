app.controller('MainController',['$scope', function($scope){
	$scope.programs = [{
		series: "Sherlock",
  	seriesImg: "img/empty-hearse.jpg",
  	genre: "Crime drama",
  	season: 3,
  	episode: "The Empty Hearse",
  	description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
  	datetime: new Date(2014, 11, 06, 21, 0, 0, 0)
	}, {
		series: "Sherlock",
  	seriesImg: "img/sign-of-three.jpg",
  	genre: "Crime drama",
  	season: 3,
  	episode: "The Sign of Three",
  	description: "It is John and Mary's wedding day and Sherlock is daunted by the task of delivering a Best Man's speech. As part of the speech, he recounts cases they have worked on including a soldier being stalked and somehow stabbed in a locked shower, a ghost dating women he dubs 'The Mayfly Man', the last being part of John's disastrous stag night, among others.",
  	datetime: new Date(2014,11,13,21,10,0,0)
	}, {
		series: "Sherlock",
  	seriesImg: "img/his-last-vow.jpg",
  	genre: "Crime drama",
  	season: 3,
  	episode: "His Last Vow",
  	description: "Stolen letters lead Sherlock into conflict with Charles Augustus Magnussen, \"the Napoleon of blackmail\" who knows the personal weakness of every person of importance in the Western world. During the investigation Sherlock is shot and nearly killed by Mary, who is being blackmailed by Magnussen.",
  	datetime: new Date(2014,11,20,21,05,0,0)
	 }];
}]);