angular.module('myApp',[]).controller('clientsCtrl',function($scope){
	$scope.clients =[
		{   location :'Raymonds, Civil Lines, Allahabad',
			msg : "Congratulations to Raymond's civil lines Allahabad branch on being the first of many on joining the revolutionary wave of Green Amigos. Their valiant contributions in our humble efforts to save the environment are truly appreciated and something to be proud of.",
			img : 'raymond', 
			key1 : 'Duplex : ',
			key2 : 'Old corrugated containers : ',
			value1 : '24.29 kg',
			value2 : '79.47 kg'
		},

		{ location : 'Maharaja Footwear KP Kakkar Road,South Malaka ,Allahabad' , 
		  msg :"Great Job Maharaja Footwear, Allahabad! We thank you for joining us in our stand to protect the environment. The city is proud of you.",
		  img : 'maharaja',
		  key1 : 'Recyclable Material : ',
		  key2 : '',
		  value1 : '150 kg',
		  value2 : ''
		},
		{ location : 'Anant Bazaar,Naini ,Allahabad' , 
		  msg :"Great Job Anant Bazaar, Allahabad! We thank you for joining us in our stand to protect the environment. The city is proud of you.",
		  img : 'anant_bazaar',
		  key1 : 'Recyclable Material : ',
		  key2 : '',
		  value1 : '22 kg',
		  value2 : ''
		},
		{ location : 'Chaddha electric works' , 
		  msg :"Great Job Chaddha electric works, Allahabad! We thank you for joining us in our stand to protect the environment. The city is proud of you.",
		  img : 'chaddha_electric_works',
		  key1 : 'Recyclable Material : ',
		  key2 : '',
		  value1 : '91 kg',
		  value2 : ''
		}
	];
});