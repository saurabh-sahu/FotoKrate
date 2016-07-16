var set = [
  'gallery/1.jpg','gallery/2.jpg','gallery/3.jpg', 'gallery/31.jpg', 'gallery/30.jpg', 'gallery/29.jpg', 'gallery/28.jpg', 'gallery/25.jpg', 'gallery/1.jpg', 'gallery/2.jpg', 'gallery/3.jpg', 'gallery/4.jpg', 'gallery/5.jpg', 'gallery/6.jpg', 'gallery/7.jpg', 'gallery/8.jpg', 'gallery/9.jpg', 'gallery/10.jpg',  'gallery/11.jpg', 'gallery/12.jpg', 'gallery/13.jpg', 'gallery/14.jpg', 'gallery/15.jpg', 'gallery/16.jpg', 'gallery/17.jpg', 'gallery/18.jpg', 'gallery/19.jpg', 'gallery/20.jpg',  'gallery/21.jpg', 'gallery/22.jpg', 'gallery/23.jpg', 'gallery/24.jpg', 'gallery/26.jpg', 'gallery/27.jpg'
];

var caption = [
  'Newspaper Overlay', 'Weaving', 'Morphing', 'Raining Effect', 'Exposure', 'Photo Frame', 'Typography', 'Polarid Effect','Abstract', 'Color Splash', 'Colorising', '3D-Illusion', 'Alphabetical Tiles', 'Poster Effect', 'Typography', 'Painting Effect', 'RoadMap Effect', 'Weaving', 'Vertical Slider', 'Illusion', 'Pencil Sketch', 'Film Strip', 'Wood Carving', 'Pan Cake', 'Puzzle Effect', 'Security Camera View', 'Typography', 'Typography',  'Colored Collage', 'Card Making', 'Egg Case', 'Eye Coloring', 'Blur Effect', 'Color Grid'
];
counter = 0; // start at 0
total_images = set.length;
max=24;
loop();
function load_more(){
max=max+4;
loop();
top_about = 2800 + (max-24)/4 * 280 ;
abt = 2850+(max-24)/4 * 280;
cnt = 3600+(max-24)/4 * 280;
document.getElementById('about').style.top= top_about+"px";
	if(max == total_images){
	abt = abt - 50;
	cnt = cnt - 50;
	document.getElementById('load_more').style.display= "none";
	document.getElementById('about').style.height= "1380px";
	}
}
function loop() {
  // create a new image
  var temp = new Image();
	
  // set the event listener before the src change
  temp.addEventListener('load', function() {
    // increase the counter
    counter++;
    document.body.appendChild(temp);
    temp.classList.add('loaded');
    // if the counter has not reached its limit
    if (counter !== max) {
      // call my parents
      loop();
    }
  });
  // set the src based on an array of images
  temp.src = set[counter];
  temp.id = counter;
  temp.onclick = function (){
	image(this.id);
	};
}


function image(x){
x++;
if( x > max ){ x = 1; }else if( x < 1 ){ x = max+1;}

next = x ;
prev = x-2 ;
var section = document.getElementById('fire');
section.style.display = 'block';
section.innerHTML='<div>'+
					  '<span onclick="xit()" class="ex"></span>'+
					  '<img src="'+ set[x-1] + '" onclick="image(0)">'+
					  '<a href="#" onclick="image('+ prev +')">&#171;</a>'+
					  '<a href="#" onclick="image('+ next +')" class="r">&#187;</a>'+
					  '<p> '+ caption[x-1] + '</p>'+
				   '</div>';
}
function xit() {
    var section = document.getElementById('fire');
    section.style.display="none";
}