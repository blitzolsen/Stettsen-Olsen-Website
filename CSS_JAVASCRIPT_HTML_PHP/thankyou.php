<html>
	<head>
        <title>Order Review</title>
        <script type="text/javascript" src="week07.js"></script>
        <link rel="stylesheet" type="text/css" href="week07.css" />
	</head>
	<body onload="onLoad()">
        <?php
            echo "<div id=\"site_heading\">
            <h1 id=\"welcome\">Fresh Water Fish Store</h1>
            </div>";
            if(isset($_POST["confirm"])) {
                echo "<h2>Thank you for your purchase!</h2>";
            }
            else {
                echo "<h2>Your order has been cancelled.</h2>";
            }
            $first_name = $_POST["first_name"];
            echo "<h3>Cart</h3>";
            echo "<p>";
            session_start();
            $cart = $_SESSION['cart'];
            //echo $_POST["cart_items3"]."<br>";
            echo $cart."<br>";
            echo "Tax: ".$_POST["tax2"]."<br>";
            echo "Shipping: ".$_POST["shipping2"]."<br>";
            echo "Total: ".$_POST["grand_total2"]."<br>";
            echo "</p>";

            echo "<h4>Billing and Shipping Information</h4>";
            echo "<p>";
            $last_name = $_POST["last_name"];
            echo $first_name." ".$last_name."<br>";
            $phone_number = $_POST["phone_number"];
            echo $phone_number."<br>";
            $address = $_SESSION['address'];
            $address_city = $_POST["address_city"];
            $address_state = $_POST["address_state"];
            $address_zip = $_POST["address_zip"];
            echo $address."<br>".$address_city.", ".$address_state." ".$address_zip;
            $card = ($_POST["card_number"]);
            echo "<br>Card Number: ";
            $card_month = $_POST["card_month"];
            $card_year = $_POST["card_year"];
            echo str_repeat('*', strlen($card) - 4) . substr($card, -4);
            echo "<br>".$card_month." ".$card_year;
            echo "</p>";
		?>
	</body>
</html>