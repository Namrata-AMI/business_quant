// button functinality//

function addForm() {
    var formContainer = document.getElementById("myForm");
    console.log("clicked");
    var newForm = document.getElementById("myForm").cloneNode(true); // Clone the form heree.
  var plusButton = document.querySelector(".plus"); // plus button 
    plusButton.parentNode.insertBefore(newForm, plusButton); 

    var block1 = document.querySelector(".block1");
    block1.classList.add("expand")
  }



  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.delete-btn').forEach(item => {
        item.addEventListener('click', event => {
            const formBar = item.closest('.block1');
            formBar.style.display = 'none';
        });
    });
});




