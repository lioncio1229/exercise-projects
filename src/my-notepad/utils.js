export const stringToElement = (nodeString) => {
    return document.createRange().createContextualFragment(nodeString);
}

export const notes_url = 'http://localhost:3000/notes';

export function today()
{
    const date = new Date();
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}