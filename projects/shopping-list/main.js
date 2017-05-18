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
    itemInput.val("")

    var list = $("<li id=" + itemToBuy + ">" + itemToBuy + "<button class='deleteBtn' type='button' onclick='deleteItem(" + itemToBuy + ")" + "'>X</button>" + "</li>");
    items.append(list);
 
};

function deleteItem(id) {
    $(id).remove();
}

