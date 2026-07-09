class LoopsPractice {
  countUp(max) {
    for (let i = 1; i <= max; i++) {
      console.log(i);
    }
  }

  printArray(items) {
    for (let i = 0; i < items.length; i++) {
      console.log(`Item ${i}: ${items[i]}`);
    }
  }

  printEvenNumbers(max) {
    let i = 2;
    while (i <= max) {
      console.log(i);
      i += 2;
    }
  }

  printSquares(max) {
    let i = 1;
    do {
      console.log(`${i} squared is ${i * i}`);
      i++;
    } while (i <= max);
  }

  printItemsWithForOf(items) {
    for (const item of items) {
      console.log(`Item: ${item}`);
    }
  }

  playwrightFriendlyLoop(items) {
    // Supported in Playwright scripts too: use this style with page locators or data arrays.
    for (const item of items) {
      console.log(`Playwright-friendly item: ${item}`);
    }
  }
}

const loops = new LoopsPractice();
loops.countUp(5); // 1 2 3 4 5
loops.printArray(['apple', 'banana', 'cherry']);
loops.printEvenNumbers(10); // 2 4 6 8 10
loops.printSquares(4); // 1 squared is 1, 2 squared is 4, 3 squared is 9, 4 squared is 16
loops.printItemsWithForOf(['apple', 'banana', 'cherry']); // Item: apple, Item: banana, Item: cherry
loops.playwrightFriendlyLoop(['one', 'two', 'three']); // Playwright-friendly item: one ...
