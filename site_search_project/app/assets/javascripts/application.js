// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// $(function() {

//   $('body').on('mouseenter', function(e){
//     e.preventDefault;
//     console.log("clicked!");
//     $('#full-width-img').fadeIn('slow', function(){
//       $(this).delay(5000);
//     })
//   });

// });
	$(function(){
  	$('#myForm').hide()
  	// $('#newBookmark').click(function(e) {
			// e.preventDefault();
		$('#newBookmark').on('click',function(e) {
    	e.preventDefault();
    $('#myForm').show();
});


    // var html = 
    				// 		'<%= form_for([@user, @bookmark], html:{class:"form-horizontal", role:"form"}) do |f| %>' +
    				// 		'<%=render partial: "bookmarks/errors", locals:{instance:@bookmark} %>' +
								// '<div class="form-group">' +
								// 	'<%= f.label :name, class:"col-md-2" %><div class="col-sm-7"><%=f.text_field :name, class:"form-control" %>' +
								// 	'</div>' +
								// '</div>' +
								// '<div class="form-group">' +
								// 	'<%= f.label :url, class:"col-md-2" %>' +
								// 	'<div class="col-sm-7">' +
								// 		'<%=f.text_field :url, class:"form-control" %>' +
								// 	'</div>' +
								// '</div>' +
								// '<div class="form-group">' +
								//     '<%= f.collection_check_boxes(:category_bookmark_ids, @categorybookmarks, :id, :name) do |b| %>' +
								//         '<span>' +
								//             '<%= b.check_box %>' +
								//             '<%= b.label %>' +
								//         '</span>' +
								//     '<% end %>' +
								//   '</div>' +
								// '<div class="actions col-sm-offset-2">' +
								// 	'<%= f.submit class:"btn btn-primary" %>' +
								// 	'<%= link_to "Cancel", user_bookmarks_path(current_user), class:"btn btn-default" %>' +
								// '</div>' +
								// '<% end %>' 





    						// '<br><form id="newWineform" action="javascript:void(0)">' +
          //      '<div class="form-group">' + 
          //      '<label for="name">Name: </label><input type="text" class="form-control" name="name" id="varietal" autofocus>' +
          //      '</div>' +
          //      '<div class="form-group">' +
          //      '<label for="url">URL: </label>' +
          //      '<input type="number" class="form-control" name="url" id="url" autofocus>' +
          //      '</div>' +
          //      '<label for="anything">Anything: </label>' +
          //      '<input type="text" class="form-control" name="anything" id="anything" autofocus>' +
          //      '</div>' +
          //      '<br><input type="submit" value="Search" class="btn btn-default btn-xl page-scroll">' +
          //      '</form>';

    // $('#searchResults').after(html);

  //   $('#newWineform').submit(function(e) {
  //     e.preventDefault();
// })
	
		$('#searchButton').click(function(e){
			$('#searchResults').remove()
		});

})



