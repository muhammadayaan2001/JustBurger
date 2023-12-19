function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10); 
    value = isNaN(value)? 0 : value;
    value ++;
    input.value = value;
    input.dispatchEvent(new Event('input')); // Trigger input event after changing value
  }
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10); 
    if (value > 1) {
      value = isNaN(value)? 0 : value;
      value --;
      input.value = value;
      input.dispatchEvent(new Event('input')); // Trigger input event after changing value
    }
  }

  let counter = document.getElementById("input");
  counter.addEventListener('input', function() {
    console.log("Input value changed: " + counter.value);
    // You can perform additional actions or checks based on the updated input value here
  });
