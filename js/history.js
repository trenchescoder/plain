// Mock data for order items and order history const orderItems = [ { name: 'Pizza', price: 10.99 }, { name: 'Burger', price: 8.99 }, { name: 'Fries', price: 4.99 } ]; const orderHistory = [ { id: 1, items: [{ name: 'Salad', price: 7.99 }], totalPrice: 7.99 }, { id: 2, items: [{ name: 'Pizza', price: 10.99 }, { name: 'Soda', price: 2.49 }], totalPrice: 13.48 } ]; // Function to display order summary function displayOrderSummary() { const orderList = document.getElementById('order-list'); let totalPrice = 0; orderItems.forEach(item => { const listItem = document.createElement('li'); listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`; orderList.appendChild(listItem); totalPrice += item.price; }); document.getElementById('total-price').textContent = totalPrice.toFixed(2); } // Function to display order history function displayOrderHistory() { const orderHistoryList = document.getElementById('order-history-list'); orderHistory.forEach(order => { const listItem = document.createElement('li'); listItem.textContent = `Order #${order.id} - Total: $${order.totalPrice.toFixed(2)}`; orderHistoryList.appendChild(listItem); }); } // Event listener for form submission document.getElementById('checkout-form').addEventListener('submit', function(event) { event.preventDefault(); // Prevent default form submission const name = document.getElementById('name').value; const email = document.getElementById('email').value; const phone = document.getElementById('phone').value; const address = document.getElementById('address').value; // You can handle the form data (e.g., send it to a server) here console.log('Name:', name); console.log('Email:', email); console.log('Phone:', phone); console.log('Address:', address); }); // Display order summary and order history when the page loads displayOrderSummary(); displayOrderHistory();
// Mock data for order items, order history, and user profile 
const orderItems = [ 
    { name: 'Pizza', price: 10.99 }, 
    { name: 'Burger', price: 8.99 }, 
    { name: 'Fries', price: 4.99 } ]; 
    const orderHistory = [ { id: 1, items: [{ name: 'Salad', price: 7.99 }],
     totalPrice: 7.99 }, 
     { id: 2, items: [{ name: 'Pizza', price: 10.99 }, 
     { name: 'Soda', price: 2.49 }], totalPrice: 13.48 } ];
     
     let userProfile = { name: 'John Doe',
      email: 'johndoe@example.com',
       phone: '123-456-7890',
        address: '123 Main St, City, Country' };
         // Function to display order summary 
         function displayOrderSummary() {
             const orderList = 
             document.getElementById('order-list'); 
             let totalPrice = 0; 
             orderItems.forEach(item => { const listItem = document.createElement('li');
              listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`; 
              orderList.appendChild(listItem);
               totalPrice += item.price;
             });
              document.getElementById('total-price').textContent = totalPrice.toFixed(2);
             } 
             // Function to display order history 
             function displayOrderHistory() { 
                const orderHistoryList = 
                document.getElementById('order-history-list'); 
                
                orderHistory.forEach(order => {
                     const listItem = 
                     document.createElement('li');
                      listItem.textContent = `Order #${order.id} - Total: $$
                      {order.totalPrice.toFixed(2)}`;
                       orderHistoryList.appendChild(listItem);
                     });
                     } 
                     // Function to display user profile 
                     function displayUserProfile() { 
                        document.getElementById('name').value = 
                        userProfile.name; 
                        document.getElementById('email').value = userProfile.email; 
                        document.getElementById('phone').value = userProfile.phone; 
                        document.getElementById('address').value = userProfile.address;
                     }
                      // Function to update user profile 
                      function updateProfile() {
                         userProfile.name =
                          document.getElementById('name').value; 
                          userProfile.email = document.getElementById('email').value;
                           userProfile.phone = document.getElementById('phone').value;
                            userProfile.address = document.getElementById('address').value;
                             // Display updated profile 
                             displayUserProfile(); 
                             // You can handle updating the profile data (e.g., send it to a server) here 
                            } 
                            // Event listener for form submission 
                            document.getElementById('checkout-form').addEventListener('submit', function(event) {
                                 event.preventDefault();
                                  // Prevent default form submission
                                   const name = document.getElementById('name').value;
                                    const email = document.getElementById('email').value;
                                     const phone = document.getElementById('phone').value; 
                                     const address = document.getElementById('address').value; 
                                     // You can handle the form data (e.g., send it to a server) here 
                                     console.log('Name:', name);
                                      console.log('Email:', email); 
                                      console.log('Phone:', phone); 
                                      console.log('Address:', address); 
                                    });
                                     // Event listener for update profile button 
                                     document.getElementById('update-profile-btn').addEventListener('click', function(event) { 
                                        event.preventDefault();
                                         // Prevent default button click behavior
                                          updateProfile(); }); 
                                          // Display order summary, order history, and user profile when the page loads 
                                          displayOrderSummary();
                                           displayOrderHistory();
                                            displayUserProfile();

