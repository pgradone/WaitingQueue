// Inspired by https://blog.bitsrc.io/data-structures-in-javascript-part-1-8231c9a4bc8b

myQueue = () => {
  const queue = [];
  return {
    add(x) {
      queue.unshift(x);
    },
    remove() {
      return queue.pop();
    },
    next() {
      return queue[queue.length - 1];
    },
    length() {
      return queue.length;
    },
    empty() {
      return queue.length === 0;
    },
    list() {
      return queue;
    },
  };
};

const mainQueue = myQueue();
const enterMainQueueButton = document.querySelector('.enter');
const exitMainQueueButton = document.querySelector('.exit');
const clientList = document.querySelector('.list');
let clientNumber = 0;

enterMainQueueButton.addEventListener('click', () => {
  clientNumber += 1;
  debugger;
  mainQueue.add('client' + clientN);
  clientList.textContent = mainQueue.list;
});

exitMainQueueButton.addEventListener('click', () => {
  mainQueue.remove();
  clientList.textContent = mainQueue.list;
});
