var speak = function() {
    console.log(this.sound + "! My name is " + this.name + "!");
};
var cat = {
    sound: "Miaow",
    name: "Mittens",
    speak: speak
};
cat.speak();

var Car = function (x, y) {
    this.x = x;
    this.y = y;
};
var tesla = new Car(10,20);
console.log(tesla);