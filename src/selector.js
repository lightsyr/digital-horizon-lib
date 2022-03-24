/**
 * Pequeno utilitário de manipulação de DOM, similar a jquery
 * @param {String} selector utilizar a sintaxe igual a utilizada no navegador | Ex: .classe , #id, div
 */
const $ = (selector) => {
    const elements = document.querySelectorAll(selector)
    if (elements.length === 1) return elements[0]
    return Array.from(elements)
}

export{
    $
}