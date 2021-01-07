var stripe = Stripe('pk_test_51I6yl2F5uJFec6fvNwc1l8AB9ca4GtV0dI9uojppdObsBc9GquBNjg6M6su4FvpCEyMnRL7HmjTIeEWtMB6p6vhF00CguWcTF9');
var sk_token = "sk_test_51I6yl2F5uJFec6fvprw6NwQw8vxkAhw4S8Mrxy00RDgd3aYrKrcarpgBfz5uORnc9rOz8hmFOELy3CbTJYCmb0OA002i46dFYi";
var elements = stripe.elements();
var amount = 1000;

// Custom styling can be passed to options when creating an Element.
var style = {
    base: {
      // Add your base input styles here. For example:
      fontSize: '16px',
      color: '#32325d',
    },
  };
  
  // Create an instance of the card Element.
  var card = elements.create('card', {style: style});
  
  // Add an instance of the card Element into the `card-element` <div>.
  card.mount('#card-element');


  var form = document.getElementById('payment-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    stripe.createToken(card).then(function(result) {
      if (result.error) {
        // Inform the customer that there was an error.
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        // Send the token to your server.
        sendPurchaseRequest(result.token);
      }
    });
  });


  function sendPurchaseRequest(token) {
   var settings = {
    "url": "https://api.stripe.com/v1/charges",
    "method": "POST",
    "headers": {
      "Authorization": `Bearer ${sk_token}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
      "amount": amount,
      "currency": "usd",
      "description": "Eato Food Purchase",
      "source": token.id
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  
  });
}