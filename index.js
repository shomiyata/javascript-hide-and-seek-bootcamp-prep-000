function getFirstSelector(selector) {
  const content = document.querySelector(selector);
  return content;
}

function nestedTarget() {
  const content = document.querySelector('#nested .target')
  return content;
}

function increaseRankBy(n) {
  let content = document.querySelectorAll('ul.ranked-list');
  for(var i = 0; i < content.length; i++) {
  let innerContent = content[i].innerHTML
  content[i].innerHTML = parseInt(innerContent + n);
  }
}

function deepestChild() {
  const deep = document.getElementById('grand-node').querySelector('div div div');
  return deep;
}
