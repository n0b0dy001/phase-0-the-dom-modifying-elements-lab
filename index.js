const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "YOUR-NAME is the champion";
const mainNode = document.querySelector('main#main');
if (mainNode) {
  mainNode.remove();
}