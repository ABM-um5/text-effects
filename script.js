// Advanced Text Effects Generators with 15+ effects

// ====== EFFECTS LIBRARY ======
const effectsLibrary = {
    bold: {
        name: 'Bold Unicode',
        icon: '🔥',
        description: 'Make text bold',
        fn: generateBoldUnicode
    },
    glitch: {
        name: 'Glitch Text',
        icon: '⚡',
        description: 'Add glitch effect',
        fn: generateGlitchText
    },
    upside: {
        name: 'Upside Down',
        icon: '🙃',
        description: 'Flip text upside down',
        fn: generateUpsideDown
    },
    smallcaps: {
        name: 'Small Caps',
        icon: '🔤',
        description: 'Small capital letters',
        fn: generateSmallCaps
    },
    italic: {
        name: 'Italic Unicode',
        icon: '✍️',
        description: 'Italic text style',
        fn: generateItalic
    },
    strikethrough: {
        name: 'Strikethrough',
        icon: '🚫',
        description: 'Line through text',
        fn: generateStrikethrough
    },
    zalgo: {
        name: 'Zalgo Text',
        icon: '👻',
        description: 'Creepy overlapping text',
        fn: generateZalgo
    },
    superscript: {
        name: 'Superscript',
        icon: '⬆️',
        description: 'Tiny raised text',
        fn: generateSuperscript
    },
    subscript: {
        name: 'Subscript',
        icon: '⬇️',
        description: 'Tiny lowered text',
        fn: generateSubscript
    },
    doubleStrike: {
        name: 'Double Strike',
        icon: '‖',
        description: 'Double line through',
        fn: generateDoubleStrike
    },
    circled: {
        name: 'Circled',
        icon: '⭕',
        description: 'Text in circles',
        fn: generateCircled
    },
    squared: {
        name: 'Squared',
        icon: '◼️',
        description: 'Text in squares',
        fn: generateSquared
    },
    mockingCase: {
        name: 'Mocking Case',
        icon: '🤡',
        description: 'AlTeRnAtInG cAsE',
        fn: generateMockingCase
    },
    reverse: {
        name: 'Reversed',
        icon: '🔄',
        description: 'Reverse text order',
        fn: generateReverse
    },
    bubble: {
        name: 'Bubble Text',
        icon: '🫧',
        description: 'Text in bubbles',
        fn: generateBubble
    }
};

// ====== EFFECT FUNCTIONS ======

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
    return text.split('').map(char => boldMap[char] || char).join('');
}

function generateGlitchText(text) {
    const glitchChars = ['̴', '̵', '̶', '̷', '̸', '̡', '̢', '̧', '̨', '̛', '̖', '̗', '̘', '̙'];
    return text.split('').map(char => {
        if (char === ' ') return ' ';
        const randomGlitch = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        return char + randomGlitch;
    }).join('');
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
    return text.split('').map(char => upsideDownMap[char] || char).join('').split('').reverse().join('');
}

function generateSmallCaps(text) {
    const smallCapsMap = {
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ',
        'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'Q', 'r': 'ʀ', 's': 'ꜱ', 't': 'ᴛ',
        'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ'
    };
    return text.split('').map(char => smallCapsMap[char.toLowerCase()] || char).join('');
}

function generateItalic(text) {
    const italicMap = {
        'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫',
        'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵',
        'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻',
        'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑',
        'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛',
        'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡'
    };
    return text.split('').map(char => italicMap[char] || char).join('');
}

function generateStrikethrough(text) {
    return text.split('').map(char => char + '̶').join('');
}

function generateZalgo(text) {
    const topChars = ['̸', '̡', '̢', '̧', '̨', '̛', '̖', '̗', '̘', '̙', '̜', '̝'];
    const bottomChars = ['̰', '̥', '̤', '̳', '̻'];
    return text.split('').map(char => {
        if (char === ' ') return ' ';
        let result = char;
        result += topChars[Math.floor(Math.random() * topChars.length)];
        if (Math.random() > 0.5) {
            result += bottomChars[Math.floor(Math.random() * bottomChars.length)];
        }
        return result;
    }).join('');
}

function generateSuperscript(text) {
    const superscriptMap = {
        'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ',
        'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ',
        'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
    };
    return text.split('').map(char => superscriptMap[char] || char).join('');
}

function generateSubscript(text) {
    const subscriptMap = {
        'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ',
        'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ', 'x': 'ₓ',
        '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'
    };
    return text.split('').map(char => subscriptMap[char] || char).join('');
}

function generateDoubleStrike(text) {
    return text.split('').map(char => char + '̶' + '̸').join('');
}

function generateCircled(text) {
    const circledMap = {
        'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ',
        'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ',
        'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
        'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ',
        'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ',
        'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ'
    };
    return text.split('').map(char => circledMap[char] || char).join('');
}

function generateSquared(text) {
    const squaredMap = {
        'a': '🅰️', 'b': '🅱️', 'c': '©️', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'ℹ️', 'j': 'j',
        'k': 'k', 'l': 'l', 'm': 'Ⓜ️', 'n': 'n', 'o': '⭕', 'p': '🅿️', 'q': 'q', 'r': 'r', 's': 's', 't': 't',
        'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z'
    };
    return text.split('').map(char => squaredMap[char] || char).join('');
}

function generateMockingCase(text) {
    return text.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
}

function generateReverse(text) {
    return text.split('').reverse().join('');
}

function generateBubble(text) {
    const bubbleMap = {
        'a': '◯ᴀ◯', 'b': '◯ʙ◯', 'c': '◯ᴄ◯', 'd': '◯ᴅ◯', 'e': '◯ᴇ◯', 'f': '◯ꜰ◯',
        'g': '◯ɢ◯', 'h': '◯ʜ◯', 'i': '◯ɪ◯', 'j': '◯ᴊ◯', 'k': '◯ᴋ◯', 'l': '◯ʟ◯',
        'm': '◯ᴍ◯', 'n': '◯ɴ◯', 'o': '◯ᴏ◯', 'p': '◯ᴘ◯', 'q': '◯ǫ◯', 'r': '◯ʀ◯',
        's': '◯ꜱ◯', 't': '◯ᴛ◯', 'u': '◯ᴜ◯', 'v': '◯ᴠ◯', 'w': '◯ᴡ◯', 'x': '◯ₓ◯',
        'y': '◯ʏ◯', 'z': '◯ᴢ◯'
    };
    return text.split('').map(char => bubbleMap[char.toLowerCase()] || char).join('');
}

// ====== STATE MANAGEMENT ======

let selectedEffects = [];
let history = JSON.parse(localStorage.getItem('textEffectsHistory')) || [];
let favorites = JSON.parse(localStorage.getItem('textEffectsFavorites')) || [];
let isDarkMode = localStorage.getItem('darkMode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches;

// ====== DOM ELEMENTS ======

const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const effectsGrid = document.getElementById('effectsGrid');
const charCount = document.getElementById('charCount');
const copyBtn = document.getElementById('copyBtn');
const themeToggle = document.getElementById('themeToggle');
const livePreview = document.getElementById('livePreview');
const effectSearch = document.getElementById('effectSearch');
const clearCombination = document.getElementById('clearCombination');
const selectedEffectsDisplay = document.getElementById('selectedEffects');
const favoriteBtn = document.getElementById('favoriteBtn');
const downloadBtn = document.getElementById('downloadBtn');
const historyList = document.getElementById('historyList');
const clearHistory = document.getElementById('clearHistory');
const favoritesList = document.getElementById('favoritesList');

// ====== INITIALIZATION ======

function initializeEffects() {
    effectsGrid.innerHTML = '';
    Object.entries(effectsLibrary).forEach(([key, effect]) => {
        const btn = document.createElement('button');
        btn.className = 'effect-btn';
        btn.dataset.effect = key;
        btn.innerHTML = `
            <span class="btn-icon">${effect.icon}</span>
            <span>${effect.name}</span>
        `;
        btn.title = effect.description;
        btn.addEventListener('click', () => toggleEffect(key, effect));
        effectsGrid.appendChild(btn);
    });
}

function initializeTheme() {
    if (isDarkMode) {
        document.documentElement.classList.add('dark-theme');
        document.documentElement.classList.remove('light-theme');
        themeToggle.innerHTML = '<span class="theme-icon">☀️</span>';
    } else {
        document.documentElement.classList.add('light-theme');
        document.documentElement.classList.remove('dark-theme');
        themeToggle.innerHTML = '<span class="theme-icon">🌙</span>';
    }
}

function renderHistory() {
    if (history.length === 0) {
        historyList.innerHTML = '<p class="empty-state">No history yet. Create your first transformation!</p>';
        return;
    }
    historyList.innerHTML = history.map((item, idx) => `
        <div class="history-item" onclick="loadFromHistory(${idx})">
            <div>${item.output}</div>
            <div class="meta">${item.effect}</div>
        </div>
    `).join('');
}

function renderFavorites() {
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p class="empty-state">No favorites yet. Add your best creations!</p>';
        return;
    }
    favoritesList.innerHTML = favorites.map((item, idx) => `
        <div class="favorite-item" onclick="loadFromFavorites(${idx})">
            <div>${item.output}</div>
            <div class="meta">${item.effect}</div>
        </div>
    `).join('');
}

// ====== EVENT LISTENERS ======

// Theme toggle
themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    themeToggle.querySelector('.theme-icon').classList.add('rotating');
    setTimeout(() => {
        themeToggle.querySelector('.theme-icon').classList.remove('rotating');
        initializeTheme();
    }, 300);
});

// Character count
inputText.addEventListener('input', () => {
    charCount.textContent = `${inputText.value.length}/500`;
    if (livePreview.checked && selectedEffects.length > 0) {
        applyEffects();
    }
});

// Live preview toggle
livePreview.addEventListener('change', () => {
    if (livePreview.checked && inputText.value.trim()) {
        applyEffects();
    }
});

// Effect search
effectSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.effect-btn').forEach(btn => {
        const effectName = effectsLibrary[btn.dataset.effect].name.toLowerCase();
        btn.classList.toggle('hidden', !effectName.includes(searchTerm));
    });
});

// Clear combination
clearCombination.addEventListener('click', () => {
    selectedEffects = [];
    updateSelectedEffectsDisplay();
    applyEffects();
    document.querySelectorAll('.effect-btn').forEach(btn => btn.classList.remove('active'));
});

// Copy button
copyBtn.addEventListener('click', async () => {
    const textToCopy = outputText.textContent;
    if (textToCopy === 'Your text effects will appear here...' || textToCopy === 'Please enter some text first!') return;

    try {
        await navigator.clipboard.writeText(textToCopy);
        copyBtn.classList.add('copied');
        copyBtn.textContent = '✓ Copied!';
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = '<span class="copy-icon">📋</span>Copy';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
});

// Favorite button
favoriteBtn.addEventListener('click', () => {
    const output = outputText.textContent;
    if (output === 'Your text effects will appear here...' || output === 'Please enter some text first!') return;

    const favoriteItem = {
        output,
        effect: selectedEffects.length > 0 ? selectedEffects.join(' + ') : 'N/A',
        timestamp: new Date().toLocaleTimeString()
    };

    favorites.unshift(favoriteItem);
    if (favorites.length > 10) favorites.pop();
    localStorage.setItem('textEffectsFavorites', JSON.stringify(favorites));
    favoriteBtn.classList.add('active');
    setTimeout(() => favoriteBtn.classList.remove('active'), 500);
    renderFavorites();
});

// Download button
downloadBtn.addEventListener('click', () => {
    const output = outputText.textContent;
    if (output === 'Your text effects will appear here...' || output === 'Please enter some text first!') return;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const fontSize = 24;
    const padding = 20;

    ctx.font = `${fontSize}px monospace`;
    const textWidth = ctx.measureText(output).width;
    canvas.width = textWidth + padding * 2;
    canvas.height = fontSize + padding * 2;

    ctx.fillStyle = isDarkMode ? '#0f0f0f' : '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = isDarkMode ? '#ffffff' : '#1a1a1a';
    ctx.font = `${fontSize}px monospace`;
    ctx.fillText(output, padding, padding + fontSize / 2);

    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'text-effect.png';
    link.click();
});

// Clear history
clearHistory.addEventListener('click', () => {
    history = [];
    localStorage.setItem('textEffectsHistory', JSON.stringify(history));
    renderHistory();
});

// ====== UTILITY FUNCTIONS ======

function toggleEffect(key, effect) {
    const index = selectedEffects.indexOf(key);
    if (index > -1) {
        selectedEffects.splice(index, 1);
        document.querySelector(`[data-effect="${key}"]`).classList.remove('active');
    } else {
        selectedEffects.push(key);
        document.querySelector(`[data-effect="${key}"]`).classList.add('active');
    }
    updateSelectedEffectsDisplay();
    applyEffects();
}

function updateSelectedEffectsDisplay() {
    selectedEffectsDisplay.innerHTML = selectedEffects.map(effect => 
        `<span class="effect-tag">${effectsLibrary[effect].icon} ${effectsLibrary[effect].name}<button onclick="removeEffect('${effect}')">✕</button></span>`
    ).join('');
}

function removeEffect(effect) {
    toggleEffect(effect, effectsLibrary[effect]);
}

function applyEffects() {
    const input = inputText.value.trim();
    if (!input) {
        outputText.textContent = 'Enter text to see the magic! ✨';
        return;
    }

    let output = input;
    selectedEffects.forEach(effectKey => {
        output = effectsLibrary[effectKey].fn(output);
    });

    outputText.textContent = output;

    // Add to history
    const historyItem = {
        output: output.substring(0, 50),
        effect: selectedEffects.length > 0 ? selectedEffects.map(e => effectsLibrary[e].name).join(' + ') : 'None',
        timestamp: new Date().toLocaleTimeString()
    };
    history.unshift(historyItem);
    if (history.length > 20) history.pop();
    localStorage.setItem('textEffectsHistory', JSON.stringify(history));
    renderHistory();
}

function loadFromHistory(idx) {
    outputText.textContent = history[idx].output;
}

function loadFromFavorites(idx) {
    outputText.textContent = favorites[idx].output;
}

// ====== STARTUP ======

initializeTheme();
initializeEffects();
renderHistory();
renderFavorites();
