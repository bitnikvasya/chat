var list = document.querySelector('.chat-content');
var newItemForm = document.querySelector('.chat-form');
var newItemTitle = newItemForm.querySelector('.chat-form-input');
var messageTemplate = document.querySelector('#message-template').content;
var newItemTemplate = messageTemplate.querySelector('.chat-message');

var addCheckHandler = function (item) {
  var checkbox = item.querySelector('.chat-message-button');
  checkbox.addEventListener('click', function () {
    item.remove();
  });
};

newItemForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var messageText = newItemTitle.value;
  var message = newItemTemplate.cloneNode(true);
  var messageContent = message.querySelector('.chat-message-text');
  messageContent.textContent = messageText;
  addCheckHandler(message);
  list.appendChild(message);
  newItemTitle.value = '';
});