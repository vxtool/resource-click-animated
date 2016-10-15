var $button     = document.querySelector('.button');
var toggleClass = function(element, className) {
  if (element.classList) {
    element.classList.toggle(className);
  } else {
    var classes = element.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0) {
      classes.splice(existingIndex, 1);
    }
    else {
      classes.push(className);
    }

    element.className = classes.join(' ');
  }
};

if ($button) {
  $button.addEventListener('click', function(){
    toggleClass($button, 'animation');
  });
}
