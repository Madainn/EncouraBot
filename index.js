var encourage = document.querySelector('.encourage');
var messageSpace = document.querySelector('.message');

encourage.addEventListener('click', encourageMessage);

encourageMessages = ["Your limitation—it’s only your imagination. 💪", "Push yourself, because no one else is going to do it for you. 💪🏻", "Great things never come from comfort zones. 💪🏼", "If you don’t have any shadows you’re not in the light. -Lady Gaga 💪🏽", "The harder you work for something, the greater you’ll feel when you achieve it. 💪🏾", "When there is no struggle, there is no strength. -Oprah 💪🏿", "When you notice that you’re having negative thoughts about how all of this is going to pan out, you need to remind yourself that you are not a very good fortune teller. -Donna W. Hill 💪🏾", "I don’t think of all the misery but of the beauty that still remains. -Anne Frank 💪🏼", "I have learned over the years that when one’s mind is made up, this diminishes fear; knowing what must be done does away with fear. -Rosa Parks 💪🏾"];

function encourageMessage() {
  var num = Math.floor(Math.random() * encourageMessages.length);
  var message = encourageMessages[num];
  messageSpace.innerText = message;
}
