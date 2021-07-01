function Pizza(size, toppings, crust, total, orderNo) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust
    this.total = total;
    this.orderNo = orderNo;


}
$('#order').click(function() {
    var sizeOfPizza = $(".size option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    var order = 1;
    var grandTotal = 0;

    let totalpizza = [];
    grandTotal = total + pizza;
    $.each($("input[name='pizza']:selected"), function() {
        pizzaselected.push($(this).val());
        $("#add-pizza").append(newRow);
    });



})