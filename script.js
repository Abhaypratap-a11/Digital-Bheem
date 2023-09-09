document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Retrieve form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;
    var totalDays = parseInt(document.getElementById("total-days").value);
    var totalPersons = parseInt(document.getElementById("total-persons").value);
    var roomType = document.getElementById("room-type").value;
    var amenities = document.querySelectorAll('input[name="amenities"]:checked');
    var advanceAmount = parseInt(document.getElementById("advance-amount").value);
  
    // Calculate total room cost
    var roomRate = 0;
    if (roomType === "deluxe") {
      roomRate = 2500;
    } else if (roomType === "suite") {
      roomRate = 4000;
    }
    var totalRoomCost = roomRate * totalDays;
  
    // Calculate total amenities cost
    var amenitiesCost = 0;
    amenities.forEach(function(amenity) {
      if (amenity.value === "ac") {
        amenitiesCost += 1000;
      } else if (amenity.value === "locker") {
        amenitiesCost += 300;
      }
    });
    var totalAmenitiesCost = amenitiesCost * totalDays;
  
    // Calculate total cost
    var totalCost = totalRoomCost + totalAmenitiesCost;
  
    // Calculate balance
    var balance = totalCost - advanceAmount;
  
    // Update the form fields
    document.getElementById("balance").value = balance;
    document.getElementById("total-room-cost").value = totalRoomCost;
    document.getElementById("total-amenities-cost").value = totalAmenitiesCost;
    document.getElementById("total-cost").value = totalCost;
  
    // Submit the form via AJAX or perform any other desired action
    // For demonstration purposes, we'll simply log the form data
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Check-in Date: " + checkin);
    console.log("Check-out Date: " + checkout);
    console.log("Total No of Days: " + totalDays);
    console.log("Total No of Persons: " + totalPersons);
    console.log("Room Type: " + roomType);
    console.log("Amenities: ");
    amenities.forEach(function(amenity) {
      console.log("- " + amenity.value);
    });
    console.log("Advance Amount: " + advanceAmount);
    console.log("Total Room Cost: " + totalRoomCost);
    console.log("Total Amenities Cost: " + totalAmenitiesCost);
    console.log("Total Cost: " + totalCost);
  });