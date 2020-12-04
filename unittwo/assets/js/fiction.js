var allImages = new Array(
	{ url: "assets/img/Fiction/bingo.jpg", text: "Authentic is something that is not false or copied. The origin supported with unquestionable evidence: genuine. The definition of 'Authentic' (2020) Is language used for advertising products considered an authentic expression or purely a market construct? Cultural Criticism and Transformation (1997) Italians are claiming that pizza is their original invention based on historical evidence and that the authentic pizza can only be found in Italy. Thus, all the other versions are copies. However, Japanese are also claiming that they have an authentic pizza invention. These are purely two different versions of pizza and two different authentic stories. Something can be authentic depending on which social context it is in because authenticity is relative to norms. Van Leeuwen (2008) How do we know which one is saying the truth and which version of pizza is true? " },
	{ url: "assets/img/Fiction/nutrition.png", text: "Something so scientific yet comprehensible and has the power to control our biological lives. Grief (2016) " },
	{ url: "assets/img/Fiction/dissect_01.jpg", text: "A method introduced by Hugo Drummond on dissecting an object into its anatomy, form, function, agency, ontology and language can give a better understanding of an object or uncover the abstractness of it and help bring one’s practice into familiar grounds. Drummond (2020) It gives a pre-structured system on how to work with an object and learn more about it; finding out more than you thought you knew about it. It offers multiple poking points which exposes the observer to various perspectives. It allows the reader to enter the imaginary world built by others. But it might also limit one to come up with infinite working fields because once all those six poking points are exhausted it will be up to the observer to take the investigation further or not. There is an end to the methodology applied but there isn’t an end for creativity. Eco (1989) As Eco (1989, p.44) stated in his book The Open Work: “It is to the listener to place himself deliberately in the midst of inexhaustible network of relationships and to choose for himself, so to speak, his own modes of approach, his reference points and his scale, and to endeavor to use as many dimensions as he possibly can at the same time and thus dynamize, multiply, and extend to the utmost degree his perceptual faculties.” " },
	{ url: "assets/img/Fiction/protein_bars_back.jpg", text: "The cover to the story doesn’t match the story itself. The product is advertised as “no added sugar” but it is filled with bunch of artificial sugars (as if that doesn’t count as sugar). Does this mean I am being lied to as a customer? Am I tricked into believing or choosing to believe this story that was written by some designer? " },
	{ url: "assets/img/Fiction/progress_03.gif", text: "Using Adhocism as another method, one can achieve endless possibilities and combinations that appear from working with pre-existing subsystems. Everything can be modified and combined limitlessly with another subsystem to make a new one. Those subsystems within themselves can be broken apart and combined with a larger or a smaller subsystem to become something else. Jenks and Silver (1972) The cycle leads you to an infinite openness. " },
	{ url: "assets/img/Fiction/progress_02.gif", text: "The term the “Quantified Self” is the ideology mentioned by Mark Grief in his book Against Everything: “In exercise one gets a sense of one’s body as a collection of numbers representing capabilities.” Grief (2016)" },
	{ url: "assets/img/Fiction/dissect_02.jpg", text: "“When people use factoids, we feel like we are being manipulated by little bits of truth that have been broken off some larger, truer edifice, as if they were small chunks of cake… A factoid is a chunk of data that has been interpreted so as to appear truthful.”  Morton (2018) " },
	{ url: "assets/img/Fiction/embroidery_01.jpg", text: "In his Minnesota Declaration, Werner Herzog states: “Facts create norms. Fact is something very superficial, and you can only get the accountant’s truth. Facts have the power to form moral behavior and ethical norms.” Herzog (1999) The only reason why we refer to larger networks and practices such as Science, a reliable resource is that we want to build a common ground of knowledge amongst us. Knowledge only becomes intelligible when there is a set baseline or foundation of what everyone knows. It is a way to bridge communication, through facts. This is a very close-minded way of looking at it, but this is clearly presented in our judgements. Things that are far from the built “norms” are accounted as false information, a lie or purely fabrications. " },
	{ url: "assets/img/Fiction/Protein_Bars.jpg", text: "Every designer is the author of its own work, in a mission to tell a story and that story could be altered, manipulated and represented the way the designer wants it to be. The narrative has no option but to get embellished with subjectivity. There is no piece of information out there that is free of subjectivity even it is said to be objective. We have the power to impose our own imagination into a language and those have the power to perceive it as whatever as they want: “Language appears to you in the way you orchestrate it.” Morton (2018) The minute a work is shared, it is vulnerable and is exposed to other authors. It is no longer what it was. As Christopher Talley emphasizes in The Concept of Agency in Objects by Claire Russo, “The meaning of an object is born when object is used towards a purpose by a group.” Russo, C. (2007) " },
	{ url: "assets/img/Fiction/insert.jpg", text: "It can be said that there is a limitation in how far a method can be taken, but it shouldn’t stop one from exploring further. Yes, maybe a dead end can be reached with the methodology but the product itself remains open because as Drummond (2020) said in his practice: “Slightest change to a part of an object and what the object was a part of can alter the object.” New methods could be applied, diverse variations could appear, could infinitely be redefined and represented." },
	


);

var allVideos = new Array(
	"https://player.vimeo.com/video/481775501",
	"https://player.vimeo.com/video/434657986", 
	"https://player.vimeo.com/video/487234013",
);

var allPdfs = new Array(
	"assets/img/Fiction/vacuumcleanerdi.png"
);

// Images
for (var i = 0; i < allImages.length; i++) {
	console.log(i);

	let container = document.createElement('div')
	container.setAttribute('class', 'hoverContainer')

	let image = document.createElement('img')
	image.setAttribute('src', allImages[i].url)
	image.setAttribute('class', 'images')

	let text = document.createElement('div')
	text.textContent = allImages[i].text
	text.setAttribute('class', 'text')

	container.append(image);
	container.append(text)
	$('#content').append(container)

	$(image).load(function () {
		// image is loaded

		var imgWidth = container.offsetWidth
		var imgHeight = container.offsetHeight

		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		var xMin = imgHeight;
		var xMax = windowWidth - imgWidth;

		var yMin = imgHeight;
		var yMax = windowHeight - imgHeight;

		var offset = Math.floor(Math.random() * (yMax - yMin) + yMin);
		var offsetLeft = Math.floor(Math.random() * (xMax - xMin) + xMin);
		$(container).css("top", offset);
		$(container).css("left", offsetLeft);
	});
}

$(".hoverContainer").draggable();

$(".hoverContainer").click(function(){
		$(".text").toggle();
		$(".images").toggle("opacity", 0);

});



// Video
for (var i = 0; i < allVideos.length; i++) {
	console.log(i);

	let video = document.createElement('iframe')
	video.setAttribute('src', allVideos[i])
	video.setAttribute('class', 'videos')
	$("#content").append(video);

	$(video).load(function () {
		// image is loaded

		var imgWidth = video.offsetWidth
		var imgHeight = video.offsetHeight

		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		var xMin = imgHeight;
		var xMax = windowWidth - imgWidth;

		var yMin = imgHeight;
		var yMax = windowHeight - imgHeight;

		var offset = Math.floor(Math.random() * (yMax - yMin) + yMin);
		var offsetLeft = Math.floor(Math.random() * (xMax - xMin) + xMin);
		$(video).css("top", offset);
		$(video).css("left", offsetLeft);
	});
}


$(".videos").draggable();


//PDFS

for (var i = 0; i < allPdfs.length; i++) {
	console.log(i);

	let pdf = document.createElement('img')
	pdf.setAttribute('src', allPdfs[i])
	pdf.setAttribute('class', 'pdf')
	$("#content").append(pdf);

	$(pdf).load(function () {
		// image is loaded

		var imgWidth = pdf.offsetWidth
		var imgHeight = pdf.offsetHeight

		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		var xMin = imgHeight;
		var xMax = windowWidth - imgWidth;

		var yMin = imgHeight;
		var yMax = windowHeight - imgHeight;

		var offset = Math.floor(Math.random() * (yMax - yMin) + yMin);
		var offsetLeft = Math.floor(Math.random() * (xMax - xMin) + xMin);
		$(pdf).css("top", offset);
		$(pdf).css("left", offsetLeft);
	});
}

$(".pdf").draggable();

$(".pdf").click(function(){
	window.open('assets/img/Fiction/triangulate3.pdf');
});













