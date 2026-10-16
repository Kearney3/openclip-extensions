function action(selection) {
    if (!selection) return "";
    return selection.replace(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu, function(word) {
        // Keep acronyms (all-uppercase, 2+ letters) unchanged, e.g. NASA, URL.
        var letters = word.replace(/[^\p{L}]/gu, "");
        if (letters.length >= 2 && letters === letters.toUpperCase() && letters !== letters.toLowerCase()) return word;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
}
