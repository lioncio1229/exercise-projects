export const stringToElement = (nodeString) => {
    return document.createRange().createContextualFragment(nodeString);
}

export const notes_url = 'http://localhost:3000/notes';