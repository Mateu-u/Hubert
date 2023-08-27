var showCommentsButton = document.getElementById('showCommentsButton');
var closeCommentsButton = document.getElementById('closeCommentsButton');
var commentsSection = document.getElementById('commentsSection');

showCommentsButton.addEventListener('click', function() {
  commentsSection.style.display = 'block';
});

closeCommentsButton.addEventListener('click', function() {
  commentsSection.style.display = 'none';
});
