
        const numberinput = document.getElementById('numberinput');
        const numberlist = document.getElementById('numberlist');
        const sumElement = document.getElementById('sum');
        const averageElement = document.getElementById('average');
        const largestElement = document.getElementById('largest');
        const smallestElement = document.getElementById('smallest');

        const numbers = [];
        function addNumber() {
            const number = parseFloat(numberinput.value);

            if (!isNaN(number)) {
                numbers.push(number);
                updateDisplay();
            } else {
                alert('Please enter a valid number.');
            }

            numberinput.value = '';
        }

        function updateDisplay() {
            numberlist.innerHTML = '';
           

            numbers.map((number)=>{
                const listItem = document.createElement('li');
                listItem.textContent = number;
                numberlist.appendChild(listItem);
            });

            const sum = numbers.reduce((num1, num2) => num1 + num2 );

            const average = sum / numbers.length;

            const largest = numbers.reduce((num1,num2)=>{
                return num1>num2?num1:num2
            });

            const smallest = numbers.reduce((num1,num2)=>{
                return num1<num2?num1:num2
            });

            sumElement.textContent = sum;
            averageElement.textContent = isNaN(average) ? 'No' : average;
            largestElement.textContent = isNaN(largest) ? 'No' : largest;
            smallestElement.textContent = isNaN(smallest) ? 'No' : smallest;
        }