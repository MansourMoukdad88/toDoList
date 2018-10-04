var array = [];
//var deleted = {}

$("ul").on("click","li",function(){

	$(this).toggleClass('completed'); //One line instead of all above by using toggleClass
});
$('ul').on('click','span',function(event){
	$(this).parent().fadeOut(500,function(){
		array.push(this);
	//console.log(array)
		$(this).remove();// this refering to li NOT span because i mention .parent()
	//console.log(this)
	})
	event.stopPropagation(); //  Prevents the event from bubbling up the DOM tree.
});
//console.log(array);


//================= when Clicked push a new ToDo =======
$('input[type=text]').keypress(function(inter){
	if(inter.which === 13){
		var todoText = $(this).val(); 
		$(this).val('');
		/*var d =  new Date();
		document.getElementById("done").innerHTML = d
*/
	
		$('ul').append('<li><span><i onclick="myFunction()" id="done"class="fa fa-check-square" aria-hidden="true"></i></span> ' + todoText+'</li>');
	}
});

function myFunction() {
    alert("Congratualations You completed one of tasks in your ToDo list!");
}
//=================
var removed = function(array){
	var newStr = "";
	for(var i = 0; i < array.length; i++){
	 newStr += array[i]
	}
	return newStr;
}

var result = removed(array);

$('#finished').click(function(){
	$(this).toggleClass('completed')
	//var a=document.getElementById('#finished')
	//console.log(a);
		var todoText1 = array
		// console.log(todoText1[0])
		// console.log(todoText1[0])
		// console.log(todoText1)
		// console.log("in #C" , array )
		// var bala = $(this).val('');
		
		
		$('ol').append('<li><span><i class="fa fa-trash" click="myFunction()" ></i></span>'
		 +todoText1[todoText1.length-1].textContent+ '</li>');
		array = [];
	
});

$(document).ready(function(){
    $('#').click(function(){
     //do something
    });
});




$("ol").on("click","li",function(){

});
$('ol').on('click','span',function(event){
	$(this).parent().fadeOut(500,function(){
	//console.log(array)
		$(this).remove();// this refering to li NOT span because i mention .parent()
	//console.log(this)
	})
	event.stopPropagation(); //  Prevents the event from bubbling up the DOM tree.
});


//=================
var x;
	for(var i = 0; i < array.length; i++){
		x = array[i];
	}




/*
$("#c").on('click', function(){
		$('ol').append('<li><span><i class="fa fa-trash"></i></span> ' + array + '</li>')
});*/

$('.fa-plus').click(function(){
	$('input[type=text]').fadeToggle();
})
/*$('.fa-check').click(function(){
	$('ol').fadeIn();
})*/