function antiCaps(text) {
    return text.charAt(1).toUpperCase() + text.slice().toLowerCase(2);
}
console.log(antiCaps("ThIs Is A sTrInG"));