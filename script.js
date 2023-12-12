/*var audio = document.getElementById("myAudio");

window.onload = function() {
	audio.play();
}*/

/*var audio = document.createElement("AUDIO")
audio.src = "cup.mp3"
*/
document.addEventListener("click", function () {
    document.getElementById('myAudio').play()
})

go();
window.addEventListener('resize', go);


function go(){
  x=window.innerWidth;
  y=window.innerHeight;

  const btnwidth = 100;
  const btnheight = 50;

const maxwidth = window.innerWidth - btnwidth;
const maxheight = window.innerHeight - btnheight;

window.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('no');
	
	btn.addEventListener('mouseover', () => {

		/*document.getElementById("myAudio").play();*/
		btn.style.position = 'absolute';
		btn.style.left=Math.floor(Math.random() * (maxwidth+1)) - (maxwidth/2) + 'px';
		btn.style.top=Math.floor(Math.random() * (maxheight+1)) - (maxheight/2) + 'px';
		
		/*btn.style.left=0+'px';
		btn.style.top=0+'px';
		x=Math.floor(Math.random() * (maxwidth+1)) + 'px';
		y=Math.floor(Math.random() * (maxheight+1)) + 'px';
		console.log(x);
		console.log(y);*/
	})

	btn.addEventListener('click', () => {
	
		btn.style.left=Math.floor(Math.random() * (maxwidth+1)) + 'px';
		btn.style.top=Math.floor(Math.random() * (maxheight+1)) + 'px';
	})

});
}



