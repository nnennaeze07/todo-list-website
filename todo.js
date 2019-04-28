//Check off Todos by Clicking
$("ul").on("click","li",(function(){
	$(this).toggleClass("completed");
}));

//Click oon X to delete todo
$("ul").on("click","span",(function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();

}));

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newtodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+newtodo+"</li>");
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});