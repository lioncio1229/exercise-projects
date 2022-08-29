export const stringToElement = (nodeString) => {
    return document.createRange().createContextualFragment(nodeString);
}