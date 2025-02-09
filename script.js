const resultDiv = document.getElementById('result');
const darkModeToggle = document.getElementById('darkModeToggle');


if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}


darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

   
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

const calculateBMI = () => {
    const age = document.getElementById('age').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(age) || age <= 0 || age > 120) {
        resultDiv.textContent = "Please enter a valid age (between 1 and 120)";
        return;
    }

    if (isNaN(weight) || weight <= 0 || isNaN(height) || height === 0) {
        resultDiv.textContent = "Please enter a valid value for weight and height";
        return;
    }

    const bmi = weight / (height * height);
    const bmiCategory = BMICategory(bmi);

   
    const bmiBar = document.getElementById('bmiBar');
    if (bmi < 18.5) {
        bmiBar.style.width = '25%';
        bmiBar.style.backgroundColor = 'lightblue';
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiBar.style.width = '50%';
        bmiBar.style.backgroundColor = 'green';
    } else if (bmi >= 25 && bmi < 30) {
        bmiBar.style.width = '75%';
        bmiBar.style.backgroundColor = 'orange';
    } else {
        bmiBar.style.width = '100%';
        bmiBar.style.backgroundColor = 'red';
    }

   
    resultDiv.innerHTML = `
        <hr/>
        <p>Your age is: ${age}</p>
        <p>Your BMI is: ${bmi.toFixed(1)}</p>
        <p>You are: ${bmiCategory}</p>
    `;
};

const BMICategory = (bmi) => {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
};
