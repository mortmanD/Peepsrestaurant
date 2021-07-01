function Pizza(size, toppings, crust, total, orderNo) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust
    this.total = total;
    this.orderNo = orderNo;


};

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
    $("table").show();
        $(".sec-two").hide();

        $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
        $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
        $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
        $("#total").html(total);

        $("#check-out").click(function() {
            
            $(".table").hide();
            $("#order").hide();
            $("#check-out").hide();
            $(".pay").show();
        });

        $("#no").click(function() {
            $(".alert").show();
            $(".pay").hide();
            $("#pizza-total").html("your total amount is sh" + total + "  thanks for shopping with us");
        });
        $("#yes").click(function() {
            $(".alert-pizza").show();
            $(".delivery-form").hide();
            $("#thanks").html("Thanks you for shopping with us your total amount is sh" + total + " we will deliver right away");
        });
        $(".btn.complete").click(function() {
            var loc = $(".add-info .loc input").val();
            $(".add-info h4").show();
            $(".add-info .loc").hide();
            $(".add-info h4 span").html(loc);
        });
        

    });


    $(document).ready(function() {
        $('.more p').hide();
    
        $(".more img.one").click(function() {
            $(".more p.one").toggle(1200);
            $(".more img.one").toggle(1000);
        });
    
        $(".more p.one").click(function() {
            $(".more img.one").toggle(1200);
            $(".more p.one").toggle(1000);
        });
    
    
        $(".more img.two").click(function() {
            $(".more p.two").toggle(1200);
            $(".more img.two").toggle(1000);
        });
    
        $(".moreo p.two").click(function() {
            $(".more img.two").toggle(1200);
            $(".more p.two").toggle(1000);
        });
    
    
        $(".more img.three").click(function() {
            $(".more p.thre").toggle(1200);
            $(".more img.three").toggle(1000);
        });
    
        $(".more p.three").click(function() {
            $(".more img.three").toggle(1200);
            $(".more p.thre").toggle(1000);
        });
    
    })
    