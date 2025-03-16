document.getElementById('check-btn').addEventListener('click', function() {
    let input = document.getElementById('text-input').value;
    let resultElement = document.getElementById('result');

    if (!input) {
        alert('Por favor ingrese un valor');
        return;
    }

    // Convertir a minúsculas y eliminar acentos
    let cleanedInput = input.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, '') // Quita acentos
        .replace(/[^a-z0-9]/gi, ''); // Quita caracteres no alfanuméricos

    let reversedInput = cleanedInput.split('').reverse().join('');
    let isPalindrome = cleanedInput === reversedInput;

    resultElement.textContent = `${input} es ${isPalindrome ? '' : 'no '}un palíndromo.`;
    resultElement.style.background = isPalindrome ? '#005f26' : '#8b0000';
});
