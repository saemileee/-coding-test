class MinHeap {
  constructor() {
      this.heap = [];
  }

  size() {
      return this.heap.length;
  }

  swap(idx1, idx2){
      [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
      return this.heap;
  }

  getParentIdx(childIdx){
      return Math.floor((childIdx-1) / 2);
  }

  getLeftChildIdx(parentIdx){
      return parentIdx*2 + 1;
  }

  getRightChildIdx(parentIdx){
      return parentIdx*2 + 2;
  }

  heappop(){
      const heapSize = this.size();
      if (!heapSize) return null;
      if (heapSize === 1) return this.heap.pop();

      const value = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbledown();
      return value;
  }

  heappush(value){
      this.heap.push(value);
      this.bubbleup();

      return this.heap;
  }

  bubbleup() {
      let child = this.size()-1;
      let parent = this.getParentIdx(child);

      while(this.heap[child] < this.heap[parent]){
          this.swap(child, parent);
          child = parent;
          parent = this.getParentIdx(parent);
      }
  }

  bubbledown() {
      let parent = 0;
      let leftChild = this.getLeftChildIdx(parent);
      let rightChild = this.getRightChildIdx(parent);

      while((leftChild <= this.size()-1 && this.heap[leftChild] < this.heap[parent]) || (rightChild <= this.size()-1 && this.heap[rightChild] < this.heap[parent])){

          if (rightChild <= this.size()-1 && this.heap[leftChild] > this.heap[rightChild]){
              this.swap(parent, rightChild);
              parent = rightChild;
          }else {
              this.swap(parent, leftChild);
              parent = leftChild;
          }
          leftChild = this.getLeftChildIdx(parent);
          rightChild = this.getRightChildIdx(parent);
      }     
  }
}

function solution(scoville, K) {
    var answer = 0;
    const minHeap = new MinHeap();
    scoville.forEach((s)=>minHeap.heappush(s))
    
    while(true){
        const minScov = minHeap.heappop();
        if(minScov<K){
            if(!minHeap.heap.length){
                return -1;
            }
            const secondMinScov = minHeap.heappop();
            const newScov = minScov + (secondMinScov * 2);
            minHeap.heappush(newScov);
            answer += 1;
        }else{
            return answer;   
        }
    }
    return answer;
}