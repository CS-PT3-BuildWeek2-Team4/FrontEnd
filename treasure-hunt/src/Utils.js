class Queue{
  constructor(){
    this.queue = []
  }
  enqueue(value){
    this.queue.push(value)
  }
  dequeue(){
    if (this.queue.length){
      this.queue.shift();
    }
    return this.queue;
  }
}
