function action(selection) {
    if (!selection) return "";
    var separators = { "None": "", "Comma": ", ", "Semicolon": "; ", "Period": ". " };
    var choice = (openclip.options && openclip.options.separator) ||
                 (openclip.option ? openclip.option('separator') : '') || "Space";
    var sep = separators.hasOwnProperty(choice) ? separators[choice] : " ";
    return selection
        .split(/\r\n|\r|\n/)
        .map(function(line) { return line.trim(); })
        .filter(function(line) { return line.length > 0; })
        .join(sep);
}
