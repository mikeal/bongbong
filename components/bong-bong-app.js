const funky = require('funky')
const bongBongTime = require('./bong-bong-time')
const bel = require('bel')

const view = funky`
<bong-bong-message>
  <div class="nickname">
    <span class="nick">${ doc => doc.user.nickname }</span>
    ${ bongBongTime }
    ${ doc => doc.ts ? '' : bel`<div class="boxclose">✖</div>` }
  </div>
</bong-bong-message>
`

module.exports = view
