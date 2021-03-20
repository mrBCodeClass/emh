

	function transl(x) {

		let text;
		let spa;
		let b = document.getElementById('translButton');
		let t = document.getElementById('box2');	

		// Change to spanish
		if (b.innerHTML == 'Traducir') {
			
			if (x == 1) {
				 
				text = `<p> Esta clase le ense&ntilde;a a los estudiantes los fundamentos de la programaci&oacute;n de computadoras usando lenguajes de  web, como HTML, CSS y JS. Los estudiantes aprenden a implementar y profundizar sus conocimientos matem&aacute;ticos a trav&eacute;s de t&eacute;cnicas de programaci&oacute;n y proyectos web prácticos.</p>
						<p> La programaci&oacute;n es ya parte esencial del porvenir y por ende un habilidad que a todo estudiante le beneficia dominar en esta era digital. Esta clase es uno de los programas que ofrece EMH Charter para ayudar a los estudiantes a poner en pr&aacute;ctica sus conocimientos matem&aacute;ticos y prepararlos para el mercado laboral tan influenciado por la tecnología. </p>
						`;

			} else if (x == 2) {

				text = `<p> Saludos, </p>
						<p> Soy el Sr. Barinas, tambi&eacute;n conocido como Mr. B, y me considero un profesor de STEM que disfruta ense&ntilde;anar una amplia gama de materias, desde &aacute;gebra hasta biolog&iacute;a, la inform&aacute;tica y mucho m&aacute;s. Y como pueden ver tengo un gran inter&eacute;s en ense&ntilde;ar a los estudiantes a programar. </p>
						<p> Escrib&iacute; este sitio con JS "vainilla", es decir, desde cero. Sin software de apoyo o atajos.  Todo a trav&eacute;s de trabajo duro, que es lo que busco inculcar en mis estudiantes.</p>
						<p> Quiero que mis alumnos obtengan una comprensi&oacute;n profunda e intuitiva de los principios de inform&aacute;tica. Los estudiantes deben aprenden sin trucos o programas auxiliares que a menudo terminan como "muletas", dificultando su comprensi&oacute;n completa de los lenguajes de programaci&oacute;n. </p>
						<p> Mi filosof&iacute;a es que los estudiantes deben escribir un c&oacute;digo limpio y altamente legible que proporcione una plataforma de usuario din&aacute;mica e intuitiva. </p>
						<p> En resumen, mi objetivo es introducir a mis estudiantes a la programaci&oacute;n y capacitarlos para que exploren toda una amplia vertiente de idiomas de programaci&oacute;n que puedan abrirles a oportunidades profesionales en el futuro.  </p>
						`;
				
				 
			}
				
			// console.log(text);
			
			// couldn't get it to work with getElementsByClassName
			// document.getElementsByClassName('box2').innerHTML = text; 

			// DIDN'T WORK
				// document.getElementById('box2').style.backgroundColor = 'red';
				// document.getElementsByTagName('P').style.backgroundColor = 'red';
				// document.getElementById('box2').style.fontColor = 'black';	
			
			t.innerHTML = text;	
			b.innerHTML = 'Translate';
			// document.getElementById('box2').style.backgroundColor = '#5993f0';	
		
		// Change to English
		} else {
			
			b.innerHTML = 'Traducir';

			if (x == 1) {
									
				text = `
				
					<p> 
						This class teaches student the foundations of computer programming using web development languages, such as HTML, CSS and JS.
						The students learn to implement and deepen their math knowledge through programing techniques and hands-on web projects.  
					</p>
					<p>
						Coding is the wave of the future and an important skill set to master in our new digital area.  
						This class is one of the programs EMH Charter provides to help students put their mathematical knowledge into practice and prepare them for today's technology-driven workplace.
					</p>			
				
				`;
			
			} else if (x == 2) {
				
				text = `
				
					<p> Welcome, </p>
					<p> My name is Mr. Barinas, aka Mr. B, and I regard myself as a STEM teacher who enjoys teaching a wide array of subjects from algebra to biology, computer language and anything in between.  I have a keen interest in teaching students how to code. </p>
					<p> I wrote this site with straight up "vanilla" JS, meaning from the ground up. No frameworks, no templates, just mastering every little detail through hard work, which is what I seek to instill in my students.  </p>
					<p> I want my students to gain a deep and intuitive understanding of coding principles.  Students learn without the gimmicks and auxiliary programs that often end up as "crutches", hindering their full grasp of the coding languages.
					 My philosophy is that students should write clean, highly legible code that provides a dynamic and self-intuititve interface. </p>
					<p> My goal is to introduce students to coding and empower them to explore a whole arrange of languages that can open career opportunities in technology.  Coding is the wave of the future and an important skill set to master in our new digital area.  This class is one of the programs EMH Charter provides where students put their mathematical knowledge into practice and are better prepared for today's technology-driven workplace.</p>

				`;				
				
			}
			
			t.innerHTML = text;	
			
		}
		 
	}