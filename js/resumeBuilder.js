
var bio = {
	"name": "Amnah Samkari",
	"role": "Front-End Devolper",
	"contacts": {
		"mobile": "0555717600", 
		"email": "amnah.samkari@gmail.com", 
		"github":"amnah95", "twitter":"@Amnah_95",
		"location":"Saudi Arabia, Makkah"
	},
	"biopic": "images/fry.jpg",
	"welcomeMessage": "Hello Everyone, wondering who is Amnah Samkari? will, here you go, have a look ..",
	"skills": [
	"Comnucation", 
	"Presentation skills", 
	"Web Devolpment"
	],
	"displaySkills": function () {
		if (bio.skills.length > 0) {
			$(".biopic").after(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkills);
			}
		}
	},
	"display": function () {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").prepend(formattedName, formattedRole);
		$("#topContacts:last, #footerContacts:last").append(formattedMobile);
		$("#topContacts:last, #footerContacts:last").append(formattedEmail);
		$("#topContacts:last, #footerContacts:last").append(formattedGitHub);
		$("#topContacts:last, #footerContacts:last").append(formattedTwitter);
		$("#topContacts:last, #footerContacts:last").append(formattedLocation);
		$("#topContacts").after(formattedBioPic);
		bio.displaySkills();
		$(".biopic").after(formattedWelcomeMsg);
		$("#mapDiv").append(googleMap);
	}
};


var work = { 
	"jobs": [ 
		{
			"employer":"EngDay18",
			"title": "Head of Sponsores Committee",
			"location":"Jeddah",
			"dates":"Feb 2017 - Feb 2018", 
			"description":"Markting the event for companies"
		},
		{
			"employer":"EngDay18",
			"title":"Head of Sponsores Committee",
			"location":"Jeddah",
			"dates":"Feb 2017 - Feb 2018",
			"description":"Dealing with companies' Represntitives "
		}
	],
	"display": function () {
		for (var i = 0; i < work.jobs.length; i++) {
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedWork = formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation +  formattedWorkDescription;
			$(".work-entry:last").append(formattedWork);
		}
	}
};

var projects = {
	"projects": [
		{
			"title":"Animal Card",
			"dates":"Nov 2017", "description":"Create an animal card using HTML and CSS",
			"images": ["images/wolf5.jpg"]
		},
		{
			"title": "Blog",
			"dates": "Dec 2017",
			"description": "Creat a responsive blog",
			"images": ["images/blog-featured.jpg"]
		}
	],
	"display": function () {
		for (var i = 0 ; i < projects.projects.length; i++) {
			$ ("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$ (".project-entry:last").append(formattedTitle);
			$ (".project-entry:last").append(formattedDates);
			$ (".project-entry:last").append(formattedDescription);
			for (var j = 0; j < projects.projects[i].images.length; j++) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]); 
				$ (".project-entry:last").append(formattedImage);
			}	
		}
	}
};


var education = {
	"schools": [
		{
			"name":"1st High School",
			"location":"Makkah",
			"degree":"High School",
			"dates":"2010-2013",
			"majors":["Natrual Science"]
		},
		{
			"name":"KAU",
			"location":"Jeddah",
			"degree":"Bachelors",
			"dates":"2013-2018",
			"majors":["ECE"]
		}
	],
	"onlineCourses": [
		{
			"title":"FEND",
			"school":"Udacity",
			"dates":"Nov 2017 - Feb 2018",
			"url":"www.udacity.com"		
		}
	],
	"display": function () {
		for (var i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			$(".education-entry:last").append(formattedName + formattedDegree);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedDates);
			for (var j = 0; j < education.schools[i].majors.length; j++) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
		$(".education-entry:last").append(HTMLonlineClasses);
		for (var k = 0; k < education.onlineCourses.length; k++) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);
			$(".education-entry:last").append(formattedTitle+formattedSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedURL);
		}
	}
};



bio.display();
work.display();
projects.display();
education.display();

