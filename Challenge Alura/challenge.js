const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const resultContainer = document.getElementById('resultContainer');
const outputContainer = document.getElementById('outputContainer');

const encryptionMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encrypt(text) {
    return text.replace(/[aeiou]/g, letter => encryptionMap[letter]);
}

function decrypt(text) {
    let decrypted = text;
    Object.entries(encryptionMap).forEach(([key, value]) => {
        decrypted = decrypted.replace(new RegExp(value, 'g'), key);
    });
    return decrypted;
}

function showResult(text) {
    outputText.value = text;
    resultContainer.style.display = 'none';
    outputContainer.style.display = 'block';
}

encryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    if (/^[a-z\s]*$/.test(text)) {
        showResult(encrypt(text));
    } else {
        alert('Por favor, ingrese solo letras minúsculas sin acentos.');
    }
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    if (/^[a-z\s]*$/.test(text)) {
        showResult(decrypt(text));
    } else {
        alert('Por favor, ingrese solo letras minúsculas sin acentos.');
    }
});

copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

document.getElementById('logoRecarga').addEventListener('click', function() {
    location.reload();
});