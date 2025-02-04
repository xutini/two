# Number Classification API  

## Overview  
This API takes a number as input and returns interesting mathematical properties, including whether it is prime, perfect, or an Armstrong number, along with a fun fact from the [Numbers API](http://numbersapi.com/).  

## Features  
- Determines if a number is prime, perfect, or an Armstrong number  
- Classifies numbers as even or odd  
- Computes the sum of digits  
- Fetches a fun fact about the number from the Numbers API  
- Returns responses in JSON format  
- Handles errors gracefully  

## API Endpoint  

  
#### **Request Parameters:**  
- `number` (integer, required): The number to classify  

#### **Example Request:**  
```bash
curl -X GET "https://two-0b2f.onrender.com/api/classify-number?number=6666"
```

#### **Response Format**  

##### **Success Response (200 OK)**  
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

##### **Error Response (400 Bad Request)**  
```json
{
    "number": "alphabet",
    "error": true
}
```

## Installation & Setup  

### **1. Clone the Repository**  
```bash
git clone https://github.com/xutini/two.git
cd stage_1
```


### **2. Run the Application**  
```bash
npm start
```
By default, the API will run on `http://127.0.0.1:3000/`  