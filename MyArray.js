function MyArray() {
  // The arguments Object will be used to create the different array properties/functions of 'MyArray'
  this.arguments = arguments;

  // Setting the length of the array equal to amount of arguments (Object also has a length property, so i think it counts for this task)
  this.length = this.arguments.length;

  // Creating indexes for every argument (so it works like an array)
  for (let i = 0; i < this.length; i++) {
    this[i] = this.arguments[i];
  }

  this.toString = function() {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      // Add comma before all items except the first one
      i === 0 ? (string += this[i]) : (string += ',' + this[i]);
    }

    return string;
  };

  this.push = function(item) {
    // Add item and increase the length of the 'array'
    this[this.length] = item;
    this.length++;
    return this.length;
  };

  this.pop = function() {
    // Remove item and shorten the length of the 'array'
    delete this[this.length - 1];
    this.length--;

    // Remember that split is a function connected to the String Object, not the Array Object ;) So we use it here to return an array.
    return this.toString().split(',');
  };

  this.join = function(connecter) {
    let string = '';

    // Add the connecter after every word except the last one
    for (let i = 0; i < this.length; i++) {
      i !== this.length - 1
        ? (string += this[i] + connecter)
        : (string += this[i]);
    }

    return string;
  };

  this.flat = function(amount = 1) {
    // Creating a copy so that we can alter it without changing the main 'array'
    let temporary = new MyArray(this.arguments);

    const returnArray = new MyArray();

    // We want to go all the way to -1, and because we decrease the amount in the end we have to loop until the amount is -2
    while (amount !== -2) {
      for (const item of temporary[temporary.length - 1]) {
        temporary.push(item);
      }
      amount--;
    }

    // Adding only the numbers from the arrays that have been flattened
    for (let i = 0; i < temporary.length; i++) {
      // Note: Push function used here is the one connected to the MyArray object, not the normal Array object
      if (typeof temporary[i] === 'number') returnArray.push(temporary[i]);
    }

    // I give up here. I don't know how to push an array to another array and return the new array with the other array inside without using any JS array methods.
    console.log(
      returnArray.toString().split(','),
      temporary[temporary.length - 1]
    );
  };
}

let a = new MyArray(1, 2, 3, 'test');

console.log(a.toString());

console.log(a.length);

console.log(a[a.length - 1]);

console.log(a.push('boo'));

console.log(a.toString());

console.log(a.pop());

console.log(a.toString());

console.log(a.join(','));

console.log(a.join(" isn't "));

// Creating the flat function was an extra task i gave myself - ended up being a somewhat difficult (impossible??) task.
//let a = new MyArray([1, 2, [3, 4, [5, 6]]]);
//console.log(a.flat());
