var express = require("express");
var router = express.Router();

const axios = require('axios');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Helper function to check if a number is prime
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Helper function to check if a number is perfect
const isPerfect = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
};

// Helper function to check if a number is Armstrong
const isArmstrong = (num) => {
    const digits = num.toString().split('');
    const sumOfPowers = digits.reduce((sum, digit) => sum + Math.pow(Number(digit), digits.length), 0);
    return sumOfPowers === num;
};

// Helper function to calculate the sum of digits
const digitSum = (num) => {
    return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
};


router.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  // Check if the number is a valid integer
  if (isNaN(number) || number === "") {
    return res.status(400).json({
      number: number,
      error: true,
    });
  }

  const num = parseInt(number);

  // Get the properties of the number
  const prime = isPrime(num);
  const perfect = isPerfect(num);
  const armstrong = isArmstrong(num);
  const properties = [];
  if (armstrong) properties.push("armstrong");
  if (num % 2 !== 0) properties.push("odd");
  if (num % 2 === 0) properties.push("even");

 
  let funFact = '';
  try {
      const response = await axios.get(`http://numbersapi.com/${Math.floor(num)}/math`); // Get a fun fact about the number
      funFact = response.data; // Save the response as the fun fact
  } catch (error) {
      funFact = `${num} is a number`; // If something goes wrong, just say it's a number
  }

  // if (armstrong) {
  //   funFact = `${num} is an Armstrong number because ${num
  //     .toString()
  //     .split("")
  //     .map((digit) => `${digit}^${num.toString().length}`)
  //     .join(" + ")} = ${num}`;
  // }

  // Send the JSON response
  return res.status(200).json({
    number: num,
    is_prime: prime,
    is_perfect: perfect,
    properties: properties,
    digit_sum: digitSum(num),
    fun_fact: funFact ,
  });
});

module.exports = router;
