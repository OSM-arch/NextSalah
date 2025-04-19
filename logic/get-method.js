export function getMethod() {
    const index = document.getElementById('calculationMethod').selectedIndex;
    const options = document.getElementById('calculationMethod').querySelectorAll('option');

    return options[index].value;
}