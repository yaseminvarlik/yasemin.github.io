var allImages = new Array(
	{ url: "assets/img/Fiction/bingo.jpg", text: "Authentic is something that is not false or copied. The origin supported with unquestionable evidence: genuine. The definition of 'Authentic' (2020) Is language used for advertising products considered an authentic expression or purely a market construct? Cultural Criticism and Transformation (1997) " },
	{ url: "assets/img/Fiction/nutritional_fact_chart.png", text: "Something so scientific yet comprehensible and has the power to control our biological lives. Grief (2016) " },
	{ url: "assets/img/Fiction/progress_03.gif", text: "Using Adhocism as another method, one can achieve endless possibilities and combinations that appear from working with pre-existing subsystems. Everything can be modified and combined limitlessly with another subsystem to make a new one. Those subsystems within themselves can be broken apart and combined with a larger or a smaller subsystem to become something else. Jenks and Silver (1972) The cycle leads you to an infinite openness. " },
	{ url: "assets/img/Fiction/progress_02.gif", text: "The term the “Quantified Self” is the ideology mentioned by Mark Grief in his book Against Everything: “In exercise one gets a sense of one’s body as a collection of numbers representing capabilities.” Grief (2016)" },
	{ url: "assets/img/Fiction/dissect_02.jpg", text: "“When people use factoids, we feel like we are being manipulated by little bits of truth that have been broken off some larger, truer edifice, as if they were small chunks of cake… A factoid is a chunk of data that has been interpreted so as to appear truthful.”  Morton (2018) " },
	{ url: "assets/img/Fiction/embroidery_01.jpg", text: "In his Minnesota Declaration, Werner Herzog states: “Facts create norms. Fact is something very superficial, and you can only get the accountant’s truth. Facts have the power to form moral behavior and ethical norms.” Herzog (1999)" },
	{ url: "assets/img/Fiction/Protein_Bars.jpg", text: "As Christopher Talley emphasizes in The Concept of Agency in Objects by Claire Russo, “The meaning of an object is born when object is used towards a purpose by a group.” Russo, C. (2007) " },
	{ url: "assets/img/Fiction/insert.jpg", text: " “Language appears to you in the way you orchestrate it.” Morton (2018) " },
	


);

var allVideos = new Array(
	"https://player.vimeo.com/video/481775501",
	"https://player.vimeo.com/video/434657986", 
	"https://player.vimeo.com/video/487234013",
);

var allPdfs = new Array(
	{url: "assets/img/Fiction/paper.pdf", 
	className: 'research', 
	text: "Research Paper"},

	{url: "assets/img/Fiction/triangulate3.pdf", 
	className: 'triangle', 
	text: "Dialogue"}
);

// allPdfs[0].className ='research'
// allPdfs[1].className ='triangle'

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

	const text = allPdfs[i].text
	const url = allPdfs[i].url
	const className = allPdfs[i].className


	let containerPdf = document.createElement('div')
	containerPdf.setAttribute('class', 'researchPaper')

	// let pdf = document.createElement('img')
	// pdf.setAttribute('src', allPdfs[i].url)
	// pdf.setAttribute('class', 'pdf')

	let textPdf = document.createElement('a')
	textPdf.setAttribute('href', url)
	textPdf.setAttribute('class', className)


	// containerPdf.append(pdf);
	// $(textPdf).append('<span id="add_here">Dialogue</span>');
	containerPdf.append(textPdf)
	$("#content").append(containerPdf);


		var imgWidth = containerPdf.offsetWidth
		var imgHeight = containerPdf.offsetHeight

		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		var xMin = imgHeight;
		var xMax = windowWidth - imgWidth;

		var yMin = imgHeight;
		var yMax = windowHeight - imgHeight;

		var offset = Math.floor(Math.random() * (yMax - yMin) + yMin);
		var offsetLeft = Math.floor(Math.random() * (xMax - xMin) + xMin);
		$(containerPdf).css("top", offset);
		$(containerPdf).css("left", offsetLeft);

}

	$('.research').append("<p>Research Paper</p>")
	$('.triangle').html("<p>Dialogue</p>");

$(".researchPaper").draggable();

// $(".researchPaper").click(function(){
// 	window.open('assets/img/Fiction/triangulate3.pdf');
// });

// $(".researchPaper").mouseenter(function(){
// 	$(".pdf").hide();
// 	$(".textPdf").css("opacity", 1);
// });
// $(".researchPaper").mouseout(function(){
// 	$(".pdf").show();
// 	$(".textPdf").css("opacity", 0);
// });











