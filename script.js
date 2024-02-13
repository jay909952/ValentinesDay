let noButtonClickCount = 0;


function showMessage(response) {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;


    // Increment the count each time "No" is clicked
    if (response === "No") {
        noButtonClickCount++;

        // Change behavior based on the click count
        if (noButtonClickCount === 1) {
            // First click behavior
            // Set button position to absolute
            noButton.style.position = "absolute";
            // Change image source to "gun.gif"
            document.getElementsByClassName("image")[0].src = "images/gun.gif";
            // Generate random coordinates within the visible container
            const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
            const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
            // Apply new coordinates to the button
            noButton.style.left = randomX + "px";
            noButton.style.top = randomY + "px";
            // Update text content and hide name message
            document.getElementById("question").textContent = "I will deport your ass back to Morocco ";
            document.getElementById("name").style.display = "none";
        } else if(noButtonClickCount == 2) {
          noButton.style.position = "absolute";
          
          
          // Generate random coordinates within the visible container
          const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
          const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
          // Apply new coordinates to the button
          noButton.style.left = randomX + "px";
          noButton.style.top = randomY + "px";
          
          document.getElementById("question").textContent = "I will steal your Vape!";
          document.getElementById("name").style.display= "none";

        } else if(noButtonClickCount ==3) {

          noButton.style.position = "absolute";
          
          // Generate random coordinates within the visible container
          const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
          const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
          // Apply new coordinates to the button
          noButton.style.left = randomX + "px";
          noButton.style.top = randomY + "px";
            
          document.getElementById("question").textContent = "You Doing too much now 😏";
          document.getElementById("name").style.display = "none";

        } else if(noButtonClickCount ==4) {
          document.getElementsByClassName("image")[0].src = "images/sad-cat.gif";
            document.getElementById("question").textContent = "LAST Chance 😃.......";
            document.getElementById("name").style.display = "none";
        } else if (noButtonClickCount === 5) {
            // Fourth click behavior with a time limit
            document.getElementsByClassName("image")[0].src = "images/cats-angry-cat.gif";
            document.getElementById("question").textContent = "Fine, be alone!";
            document.getElementById("name").style.display = "none";
            document.getElementById("no-button").remove();
            document.getElementById("yesButton").remove();

            
        }
    }

  if (response === "Yes") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // Update text content, show message, and change image source to "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "Hell YEAHHHH   See you soon 💖😘";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    // Remove yes button
    document.getElementById("yesButton").remove();
  }
}
