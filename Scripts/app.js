/* 
File Name: app.js
Author: Tarundeep Singh
Website Adress: http://comp-1073-midterm.azurewebsites.net/
Description: This file is a part of the midterm test for Comp-1073, It spits out text to the html and also displays user input into the console

*/
// setup your IIFE (Immediately Invoked Function Expression)
var travelReport = (function () {

"use strict";
console.log("App Started...")

})();

// fuction containing the paragraph text and takes user input to the console

( function () {
	
	// inserting paragraphs into the html
	
	var IntroParagraph;
	IntroParagraph = document.getElementById("IntroParagraph");
	IntroParagraph.innerHTML = "Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.<br />Greece has 1,400 islands, though only 230 of them are inhabited.<br />And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too."

	var Folegandros;
	Folegandros = document.getElementById("Folegandros");
	Folegandros.innerHTML = "Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets."
	
	var Alonissos;
	Alonissos = document.getElementById("Alonissos");
	Alonissos.innerHTML = "Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy."
	
	var Spetses;
	Spetses = document.getElementById("Spetses");
	Spetses.innerHTML = "This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight."
	
	var Amorgos;
	Amorgos = document.getElementById("Amorgos");
	Amorgos.innerHTML = "Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff."
	
	var Syros;
	Syros = document.getElementById("Syros");
	Syros.innerHTML = "A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways."
	
	var Milos;
	Milos = document.getElementById("Milos");
	Milos.innerHTML = "This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as &#34;the island of colours&#34; it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape."
	
	var Hydra;
	Hydra = document.getElementById("Hydra");
	Hydra.innerHTML = "The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves."
	
	var Ithaca;
	Ithaca = document.getElementById("Ithaca");
	Ithaca.innerHTML = "Most famous for being the home of Odysseus, and a prominent figure in Homer's &#34;The Odyssey,&#34; Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries."
	
	var Gavdos;
	Gavdos = document.getElementById("Gavdos");
	Gavdos.innerHTML = "Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping."
	
	// getting user input into the console
	
	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var email = document.getElementById("email");
	var comments = document.getElementById("comments");
	var button = document.getElementById("button");
	
	button.addEventListener("click", function(event){
		event.preventDefault();
		console.log("First Name:" + firstName.value);
		console.log("Last Name:" + lastName.value);
		console.log("Email:" + email.value);
		console.log("Comments:" + comments.value);
	});
	
	console.log("App Finished...")
})();
