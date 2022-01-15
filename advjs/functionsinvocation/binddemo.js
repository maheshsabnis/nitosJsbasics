// define an object with a function
let welCome = {
    greetPrefix: 'Hello, ',
    guesture: function(msg) {
        return  `${this.greetPrefix}  ${msg}`     
    }
};

// Lets define enhanced WelCome guesture by adding a new delegation to
// existing guesture function

let indianWelCome = welCome.guesture.bind({greetPrefix: 'Namaste'}); // overwrite values
let frenchWelCome = welCome.guesture.bind({greetPrefix: 'Bonjour'}); // overwrite values

console.log(indianWelCome('Mahesh'));
console.log(frenchWelCome('Mahesh'));
