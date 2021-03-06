
	// Declare/define variables 
	let reply, bg, color, key = 1;
	let level = 1;
	let score = '';
	let gotRight = false;
		
	// Array of urls
	let card = ['img/back-of-card.png','img/the-joker-card.jpg', 'img/ace_of_spades.png'];

	
	// HTML content (letting js house and send it rather than place it on the HTMP page itself 
	// (don't want students and general public have easy access to contents)
	
	/* 
		This audio code failed
	
		var audio = new Audio('audio/bonfire-an-jone.mp3');
		audio.play();
	*/


	/* 	Audio html
		Changed from 
		
			<audio controls id="bgAudio">  
			
			to 	
			
			<audio id="bgAudio"> 
		
		since I don't want the audio controls showing on the page
	*/
	
	let str = `	
				<audio id="bgAudio">
					<source src="audio/bonfire-an-jone.mp3" type="audio/mp3">
					Your browser does not support the audio tag.
				</audio>
				
				<audio id="wrongBuzzer">
					<source src="audio/wrong-answer-sound-effect.mp3" type="audio/mp3">
				</audio>				
				
				<audio id="rightDing">
					<source src="audio/good-idea-bell.mp3" type="audio/mp3">
				</audio>								
			  `;

	// Other  html 
		str += `
				<p> 
					<button id="startButton" onclick="start()"> START </button>  				
					<button onclick="levelUp(2)"> 2nd Set </button>  
					<button onclick="levelUp(3)"> 3rd Set </button> 
					<button id="reset" onclick="reloadPage()"> Reset </button>
				</p>

				<h1> Find the Ace of Spades </h1>
				<p> By Mr. B </p>
				
				<div id="rules">				
					<p> Rules: </p>
						<ul>
							<li> Guess which of the three cards is the ace of spades.  The other two are jokers. </li>
							<li> You gain a point for ever spade but lose one for every joker. </li>
							<li> Try the other two sets to get your final score. </li> 
						</ul>
					</p>
					<p> Press <span onclick="start()"> START </span> to begin </p>
				</div>			  
			  `;

	for (let i = 1; i < 4; i++) {
		
		str += '<img id="card' + i + '" onclick="flip(' + i + ')" src="' + card[0] + '">';
		
	}

		str += `<div id="response"> </div>`;
	
	document.getElementById('content').innerHTML = str;
	
	// Shorthands
	let bgAudio = document.getElementById('bgAudio');
	let wrongBuzzer = document.getElementById('wrongBuzzer');
	let rightDing = document.getElementById('rightDing');

	let c1 = document.getElementById('card1');
	let c2 = document.getElementById('card2');
	let c3 = document.getElementById('card3');


	/* This didn't work
	
			bgAudio.autoplay = true;
			bgAudio.load();

		This one either
		
			bgAudio.play();
		
		An explation as to why...
		From: https://gamedev.stackexchange.com/questions/163365/html5-games-play-failed-because-the-user-didnt-interact-with-the-document-fi
	
	
			There is a good reason for this precaution: Users usually don't expect audio from websites. 
			They get really angry when they load a website, and an audio advertisement blares at them at 
			full volume. This is even worse if they opened multiple tabs and are not sure which one is 
			responsible. That's why all browser vendors prevent websites from playing audio unless the user 
			interacts with them. Yes, I understand that you want to use this feature for good and not evil, 
			but if there was a workaround, that workaround could also be used by the advertisers. So be glad 
			that such a workaround does not exist.

			So the only real solution is to find some reason why the player would need to perform some form 
			of interaction after the game HTML document is loaded. A good excuse is some kind of initial 
			screen with a copyright message and other legalese which disappears after the user clicked on it. 
			You can also use this splash screen as a preloader for the assets needed for your login screen. 
			That makes sure the background music is actually loaded when a user with a low bandwidth connection 
			sees it.

			[...]

			A very simple solution is to have a "launch game" button - there's your interaction. Legalese is boring AF and copyright messages a turn off. Make it something fun. – Tim Holt Nov 26 '18 at 2:54 	
	
	*/

	function start() {
		
		bgAudio.play();
		bgAudio.loop = true;
		
		// Display cards
		document.getElementsByTagName('IMG')[0].style.display = 'inline';
		document.getElementsByTagName('IMG')[1].style.display = 'inline';
		document.getElementsByTagName('IMG')[2].style.display = 'inline';
		
		// Hide rules
		document.getElementById('rules').style.display = 'none';
	}
	
	// Moves user to different levels (aka new set of cards, each with a different key)
	function levelUp(level) {
		
		// Reset to false so that the counter resumes accruing
		gotRight = false;
		
		// Reset the cards
		c1.src = card[0];
		c2.src = card[0];
		c3.src = card[0];
	  
		// Reset response
		document.getElementById('response').innerHTML = '';
		// Reset bg
		document.body.style.backgroundColor = 'black'; 
	
		// Set key according to level
		
		if (level == 1) {
		  
			key = 1;

		} else if (level == 2) {
		  
			key = 3;
		  
		} else if (level == 3) {
		  
			key = 1;

		}

	}

	// For brevity
	function visuals (x) {
		
		if (x) {
			
			reply = '<p> YOU GOT IT! &#127773; </p>'; 
			bg = 'yellow'; 
			color = 'black';
			if (!gotRight) { score++ }	
			gotRight = true;
			rightDing.play();
			
		} else {
			
			reply = '<p> OOPS, TRY AGAIN &#128543; </p>';
			bg = 'red';
			if (!gotRight) { score-- }	
			wrongBuzzer.play();
			
		}
		
	}

	// Main function that flips cards accordingly
	function flip(x) {
	  
	  // Chose 1st card
		if (x == 1) {

			// got it right, flip to spade
			if (x == key) {
			 
				c1.src = card[2];
				// Update visuals
				visuals(1);	
		 
			// got it wrong, flip from cardback to joker or vice versa
			} else {

				/*
				
				Couldn't do a comparison like
				
					c1.src == card[0]
				
				because instead of js comparing, say, these
				
					img/back-of-card.png
					vs
``					img/back-of-card.png
	
				it compared 

					file:///C:/Users/pbarinas/Downloads/github-site/img/back-of-card.png
					vs
					img/back-of-card.png
				
				*/
								
				// cardback to joker
				if (c1.src.search('back-of-card') > -1) {
					
					// For troubleshooting
						// console.log(c1.src.search('back-of-card'));
						// console.log(c1.src.search('the-joker-card'));
						// console.log(c1.src);
					
					c1.src = card[1];
								
				// joker to cardback
				} else {
			  
					c1.src = card[0];
			
				}

				visuals(0);	

			}	
			
		// Chose 2nd card    
		} else if (x == 2) {
		
			// got it right, flip to spade
			if (x == key) {
			 
				// set to spade
				c2.src = card[2];
				
				// update visuals
				visuals(1);	
		 
			// got it wrong, flip from cardback to joker or vice versa
			} else {
				
				// cardback to joker
				if (c2.src.search('back-of-card') > -1) {
					
					c2.src = card[1];
								
				// joker to cardback
				} else {
			  
					c2.src = card[0];
			
				}
		
				// update visuals
				visuals(0);	
				
			}
		
		// Chose 3rd card
		} else if (x == 3) {
		
			// got it right, flip to spade
			if (x == key) {
			 
				c3.src = card[2];
				
				// update visuals
				visuals(1);	
		 
			} else {
				
				// cardback to joker
				if (c3.src.search('back-of-card') > -1) {
					
					c3.src = card[1];
								
				// joker to cardback
				} else {
			  
					c3.src = card[0];
			
				}

				// update visuals
				visuals(0);	
		
			}
		
		} // end of if x == 3
	  
		// Send commands to change visuals 
		document.getElementById('response').innerHTML = reply + ' Score: ' + score; 
		document.body.style.backgroundColor = bg; 
		document.body.style.color = color; 

	} // end of flip


	function reloadPage(){
	   window.location.reload();
	}