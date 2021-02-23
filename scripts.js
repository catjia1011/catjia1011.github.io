const codeTexts = ['})]', '}];', '%@', '//', '@YES', '@{}', '.pi', '[:]', '#if', 'try!', '$1'];
document.querySelector('#coding').innerText = codeTexts[Math.floor(Math.random() * codeTexts.length)] || '})]';

const contacts = ['Singapore', '<a href="mailto:catjia1011@gmail.com">catjia1011</a>'];
var contactIndex = 0;
function loadContact(e) {
  e.innerHTML = contacts[contactIndex];
  contactIndex = (contactIndex + 1) % contacts.length;
}

let obj = document.querySelector('#contact');
loadContact(obj);
document.querySelector('#card').addEventListener('click', function(e) {
  loadContact(obj);
  obj.querySelectorAll('a').forEach(function(element) {
    element.onclick = function(e) { e.stopPropagation(); };
  });
});
