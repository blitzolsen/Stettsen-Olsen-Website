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
            $first_name = $_POST["first_name"];
            echo "<h2>Hello ".$first_name."! Please review your order.<h2>";

            echo "<h3>Cart</h3>";
            echo "<p>";
            session_start();
            $_SESSION['cart'] = $_POST["cart_items2"];
            //$cart_items3 = $_POST["cart_items2"];
            echo $_POST["cart_items2"]."<br>";
            $tax = $_POST["tax2"];
            echo "Tax: ".$_POST["tax2"]."<br>";
            $shipping = $_POST["shipping2"];
            echo "Shipping: ".$_POST["shipping2"]."<br>";
            $total = $_POST["grand_total2"];
            echo "Total: ".$_POST["grand_total2"]."<br>";
            echo "</p>";

            echo "<h4>Billing and Shipping Information</h4>";
            echo "<p>";
            $last_name = $_POST["last_name"];
            echo $first_name." ".$last_name."<br>";
            $phone_number = $_POST["phone_number"];
            echo $phone_number."<br>";
            $_SESSION['address'] = $_POST["address"];
            $address = $_POST["address"];
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

            echo "<form action='thankyou.php' id='review' method='post'>";
            echo "<input type='hidden' name='first_name' value=$first_name>";
            echo "<input type='hidden' name='last_name' value=$last_name>";
            echo "<input type='hidden' name='phone_number' value=$phone_number>";
            //echo "<input type='hidden' name='address' value=$address>";
            echo "<input type='hidden' name='address_city' value=$address_city>";
            echo "<input type='hidden' name='address_state' value=$address_state>";
            echo "<input type='hidden' name='address_zip' value=$address_zip>";
            echo "<input type='hidden' name='card_number' value=$card>";
            echo "<input type='hidden' name='card_month' value=$card_month>";
            echo "<input type='hidden' name='card_year' value=$card_year>";
            echo "<input type='hidden' name='tax2' value=$tax>";
            echo "<input type='hidden' name='shipping2' value=$shipping>";
            echo "<input type='hidden' name='grand_total2' value=$total>";
            //echo "<input type='hidden' name='cart_items3' value=$cart_items3>";
            echo "<input type='submit' name='confirm' value='Confirm'/>";
            echo "<input type='submit' name='cancel' value='Cancel'/>";
            echo "</form>";
            
		?>
	</body>
</html>