// Mock data for order items 
const orderItems = [
     { name: 'Pizza', price: 10.99 }, 
     { name: 'Burger', price: 8.99 },
      { name: 'Fries', price: 4.99 } ];
       // Function to display order summary 
       function displayOrderSummary() { 
        const orderList = 
        document.getElementById('order-list'); 
        let totalPrice = 0;
         orderItems.forEach(item => { 
            const listItem = 
            document.createElement('li'); 
            listItem.textContent = `${item.name} - $$
            {item.price.toFixed(2)}`;
             orderList.appendChild(listItem);
              totalPrice += item.price;
             });
              document.getElementById('total-price').textContent = totalPrice.toFixed(2);
             } 
             // Event listener for form submission 
             document.getElementById('checkout-form').addEventListener('submit', function(event) {
                 event.preventDefault();
                  // Prevent default form submission
                   const name = 
                   document.getElementById('name').value; const email = 
                   document.getElementById('email').value; const phone = 
                   document.getElementById('phone').value; const address = 
                   document.getElementById('address').value;
                    // You can handle the form data (e.g., send it to a server) here
                     console.log('Name:', name);
                      console.log('Email:', email);
                       console.log('Phone:', phone);
                        console.log('Address:', address); 
                    });
                     // Display order summary when the page loads displayOrderSummary();
