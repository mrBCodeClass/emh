function dropdownRedirect(url) {								
	window.open(url, '_blank');					
}

let emhLogo = 'https://static.wixstatic.com/media/23ea77_d826538b69a84e61b9d002506df335d8~mv2.jpg/v1/fill/w_540,h_410,al_c,lg_1,q_80/hornet-logo-blue-500px.webp';

function mainPage () {
  
let emhProj = ['Jesus V', 'Freitty G', 'Jocelyn', 'Chenay'];
let siteName = ['freitty', 'jesus', 'jocelyn', 'chenay'];
let text = "<h3> Mr. B's Coding Class Projects </h3>";
  text += '<p><img src="' + emhLogo + '"/></p>';
text += '<h5> Hostos Bio Page </h5><select onChange="dropdownRedirect(this.value)"><option>Choose below</option>';

  for (i = 0; i < siteName.length; i++) {
  text += "<option>" + siteName[i] + ".html</option>";
}
text += '</select>';  
  
    document.getElementById('contentArea').innerHTML = text;
 
  
}

mainPage();

