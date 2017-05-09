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
  const content = document.getElementById('grand-node').querySelector('div');
  for (let i = 0, l = content.length; i < l; i++) {
    if(content[i] === !null);
  }
  return content;
}
