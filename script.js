// Text Effects Generators

const effectsMap = {
    bold: generateBoldUnicode,
    glitch: generateGlitchText,
    upside: generateUpsideDown
};

// ====== Effect Generators ======

function generateBoldUnicode(text) {
    const boldMap = {
        'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣',
        'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭',
        'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
        'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉',
        'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓',
        'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
        '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
    };

    return text
        .split('')
        .map(char => boldMap[char] || char)
        .join('');
}

function generateGlitchText(text) {
    const glitchChars = ['̴', '̵', '̶', '̷', '̸', '̡', '̢', '̧', '̨', '̛', '̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̰'];
    
    return text
        .split('')
        .map(char => {
            if (char === ' ') return ' ';
            const randomGlitch = glitchChars[Math.floor(Math.random() * glitchChars.length)];
            return char + randomGlitch;
        })
        .join('');
}

function generateUpsideDown(text) {
    const upsideDownMap = {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
        'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
        'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
        'A': '∀', 'B': 'ᙠ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ',
        'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ὸ', 'R': 'ᴚ', 'S': 'S', 'T': '⊥',
        'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
        '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
        '.': '˙', ',': '\'', '!': '¡', '?': '¿', '\'': ',', '"': '„', '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{',
        '<': '>', '>': '<', '_': '‾', ';': '؛'
    };

    return text
        .split('')
        .map(char => upsideDownMap[char] || char)
        .join('')
        .split('')
        .reverse()
        .join('');
}

// ====== Event Listeners ======

const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const effectButtons = document.querySelectorAll('.effect-btn');
const copyBtn = document.getElementById('copyBtn');

// Apply effect when button is clicked
effectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const effect = btn.dataset.effect;
        const input = inputText.value.trim();

        if (!input) {
            outputText.textContent = 'Please enter some text first!';
            return;
        }

        const output = effectsMap[effect](input);
        outputText.textContent = output;
    });
});

// Real-time preview (optional - removes on first effect click)
let isFirstInput = true;
inputText.addEventListener('input', () => {
    if (isFirstInput) {
        isFirstInput = false;
    }
    if (outputText.textContent !== 'Your text effects will appear here...' && inputText.value.trim()) {
        const currentEffect = document.querySelector('.effect-btn');
        if (currentEffect) {
            const effect = currentEffect.dataset.effect;
            const output = effectsMap[effect](inputText.value.trim());
            outputText.textContent = output;
        }
    }
});

// Copy to clipboard
copyBtn.addEventListener('click', async () => {
    const textToCopy = outputText.textContent;

    if (textToCopy === 'Your text effects will appear here...' || textToCopy === 'Please enter some text first!') {
        return;
    }

    try {
        await navigator.clipboard.writeText(textToCopy);
        
        // Show feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copied!';
        copyBtn.classList.add('copied');

        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
});
