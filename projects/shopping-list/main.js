var itemInput = $("#itemInput");


$("#addBtn").click(addItem);
$("#itemInput").keydown(function (enter) {
    if (enter.keyCode == 13) {
        addItem();
    }
});

function addItem() {
    if (itemInput.val() === "") {
        return;
    }

    var items = $("ul#items");

    var itemToBuy = itemInput.val();
    var itemId = itemToBuy.replace(/\s/g, '');

    itemInput.val("")

    //    li id can't have spaces'
  
    var list = $("<li id=" + itemId + ">" + itemToBuy + "<button class='deleteBtn' type='button' onclick='deleteItem(" + itemId + ")" + "'>X</button>" + "</li>");
    items.append(list);

};

function deleteItem(id) {
    $(id).remove();
}
