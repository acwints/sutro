(() => {
    const STORAGE_KEY = "sutro_letter_font";
    const select = document.getElementById("letter-font-select");

    if (!select) {
        return;
    }

    const applyFont = (fontValue) => {
        document.documentElement.style.setProperty("--font-letter", fontValue);
    };

    const savedFont = localStorage.getItem(STORAGE_KEY);
    if (savedFont) {
        const matchingOption = Array.from(select.options).find((option) => option.value === savedFont);
        if (matchingOption) {
            select.value = savedFont;
            applyFont(savedFont);
        }
    } else {
        applyFont(select.value);
    }

    select.addEventListener("change", (event) => {
        const fontValue = event.target.value;
        applyFont(fontValue);
        localStorage.setItem(STORAGE_KEY, fontValue);
    });
})();
