const funky = require('funky')
const emojione = require('emojione')
const bel = require('bel')
const bongBongTime = require('./bong-bong-time')
const escapeHtml = require('./escapeHtml')

function toTextElement (str) {
  // str = escapeHtml(str)
  let ret = bel`<span></span>`
  ret.innerHTML = emojione.toImage(str)
  return ret
}

const view = funky`
${() => {}}
<bong-bong-message>
  <div class="nickname">
    <span class="nick">${ doc => doc.user.nickname }</span>
    ${ bongBongTime }
  </div>
  <div class="text">${ doc => toTextElement(doc.text) }</div>
</bong-bong-message>
`

module.exports = view
