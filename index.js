function dropdownRedirect(url) {								
	window.open(url, '_blank');					
}

// logo url shorthand
let emhLogo = 'https://static.wixstatic.com/media/23ea77_d826538b69a84e61b9d002506df335d8~mv2.jpg/v1/fill/w_540,h_410,al_c,lg_1,q_80/hornet-logo-blue-500px.webp';

// contentArea data "the meat and potatoes"
function mainPage (x) {
    
	let emhProj = ['Freitty G', 'Jesus V', 'Jocelyn S', 'Chenay C'];
	let siteName = ['freitty', 'jesus', 'jocelyn', 'chenay'];

	// HEADER AREA

	let text = "<h3> Mr. B's Coding Class Projects </h3>";	
	text += '<p><img src="' + emhLogo + '"/></p>';
	text += `<p><span><a class="headerLink" href="https://www.emhcharter.org/"> EMH Charter </a></span>
			    <span><a class="headerLink" href="class.html"> Class </a></span> 
			    <span><a class="headerLink" href="mrb.html"> Mr. B </a></span> 		
			 </p>
			`;

	// PROJECT AREA 

								// **** tip calculator

	text += '<h4> Tip Calculator </h4><select onChange="dropdownRedirect(this.value)"><option> Choose project </option>' + 
			'<option value="tip/freitty.html">' + emhProj[0] + '</option>';
	

	text += '</select>';  

								// **** celeb table

	text += '<h4> Hostos Bio Page </h4><select onChange="dropdownRedirect(this.value)"><option> Choose project </option>';

	  for (i = 0; i < siteName.length; i++) {
	  text += '<option value="celeb/' + siteName[i] + '.html">' + emhProj[i] + '</option>';
	}

	text += '</select>';  

	// display it	
	document.getElementById('contentArea').innerHTML = text;
	 
	  
}

	

mainPage();
