
var array = [];
	// First we select the TAGS,IDs,,, then manipulated by events .  
$("ul").on("click", "li", function() {
	//One line instead of all of if statement by using toggleClass
	$(this).toggleClass('completed'); 
});
$('ul').on('click', 'span', function(event) {
	// this refering to li NOT span because we mention .parent()
	$(this).parent().fadeOut(500,function() {
		array.push(this);
	//console.log(array)
		$(this).remove();
	//console.log(this)
	});
	//  To stop the previous events .
	event.stopPropagation(); 
});

	// When click enter it will store value todoText 
$('input[type=text]').keypress(function(inter) {
	if( inter.which === 13 ) {
		var todoText = $(this).val(); 
		$(this).val('');
		if( todoText !== ''){
		$('ul').append('<li><span><i onclick="notification()" id="done" class="fa fa-check-square" aria-hidden="true"></i></span> '
	     + todoText + '</li>');
		// This will append the input text to our UL 
		}
	}
});

function notification() {
    alert("Congratualations You completed one of tasks in your ToDo list!");
    // This will give notification once the task is completed
}

var removed = function(array) {
	var newStr = "";
	for(var i = 0; i < array.length; i++){
	 newStr += array[i];
	}
	return newStr;
}

var result = removed(array);

$('#finished').click(function() {
	$(this).toggleClass('completed')
		var todoText1 = array
		// console.log(todoText1[0])
		// console.log(todoText1[0])
		// console.log(todoText1)
	$('ol').append('<li><span><i class="fa fa-trash" click="myFunction()" ></i></span>'
	 + todoText1[todoText1.length-1].textContent + '</li>');
	array = [];
});

$('ol').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
	//console.log(array)
		$(this).remove();
	//console.log(this)
	});
	event.stopPropagation();
});

$('.fa-plus').click(function(){
	$('input[type=text]').fadeToggle();
});
