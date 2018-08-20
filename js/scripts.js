// business logic

function ToDo(item, description) {
  this.item = item;
  this.description = description;
}

//user interface logic

$(document).ready(function() {

  $("form.todo-list").submit(function(event) {
    event.preventDefault();
    var itemInput = $("input.item").val();
    var descriptionInput = $("input.description").val();
    var newItem = new ToDo(itemInput, descriptionInput);

    $("ul.list").append('<div><li><input type="checkbox">' + newItem.item + '</li>' + '<p>' + newItem.description + '</p><button>delete item</button></div>');


    $("input.item").val("");
    $("input.description").val("");

    $("button").last().click(function(){
      $(this).siblings().hide();
      $(this).hide();
    });
  });
});
