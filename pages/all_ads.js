import View from "../view.js"

const resultNode = document.querySelector('#results');

export default {
    render() {
        resultNode.innerHTML = View.render('all_ads', ' ')
    }
}