let map = new Map();
map.set("red", "2");
map.set("black", "5");
map.set("green", "1");
map.set("brown", "9");
map.set("silver", "4");
map.forEach((values, keys) => {console.log(`Color - ${keys},${values}`)})