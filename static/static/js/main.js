function filter(parentId, filterItem, word) {
    const table = document.getElementById(parentId);
    const rows = table.getElementsByTagName(filterItem);
    for (let i = 1; i < rows.length; i++) {
        const rowText = rows[i].textContent.toLowerCase();
        if (!rowText.includes(word.toLowerCase())) {
            rows[i].style.display = 'none';
        } else {
            rows[i].style.display = '';
        }
    }
}

let initialState = true;

function toggleInitialVisability() {
    let initiallyShownElements = document.querySelectorAll(".initial-shown")
    let initiallyHiddenElements = document.querySelectorAll(".initial-hidden")
    for (const element of initiallyShownElements) {
        if (initialState) element.classList.add("d-none")
        else element.classList.remove("d-none")
    }
    for (const element of initiallyHiddenElements) {
        if (initialState) element.classList.remove("d-none")
        else element.classList.add("d-none")
    }
    initialState = !initialState;
}
