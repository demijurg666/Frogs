
function pretrazi() {
  let pretraga = document.getElementById("pretraga").value;

  alert(pretraga);
}

function highlight () {
  const highlightsEl = document.querySelector('.highlights')
  highlightsEl.innerHTML = ''

  const value = document.getElementById('pretraga').value
  const highlights = highlightSentences([value])
  highlights.forEach(({ top, left, width, height }) => {
    const highlightEl = document.createElement('div')
    Object.assign(highlightEl.style, {
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`,
      position: 'absolute',
      backgroundColor: 'rgba(0,125,0,0.25)',
      zIndex: 2,
    })
    highlightsEl.appendChild(highlightEl)
  })
}

function highlightSentences (sentences) {
  const highlights = []
  const body = document.body
  const contentNodes = gatherTextNodes(body)

  sentences.forEach(sentence => {
    const range = document.createRange()
    let rangeSentence = sentence.toLowerCase()
    let start = false

    contentNodes.forEach(node => {
      const nodeSentence = node.textContent.toLowerCase()
      const sentIndex = rangeSentence.indexOf(nodeSentence)
      const nodeIndex = nodeSentence.indexOf(rangeSentence)
      const s = rangeSentence

      if (sentIndex > -1) {
        if (!start) {
          start = true
          range.setStart(node, sentIndex)
        }
        rangeSentence = rangeSentence.slice(nodeSentence.length)
      }

      if (nodeIndex > -1) {
        if (!start) {
          start = true
          range.setStart(node, nodeIndex)
        }
        range.setEnd(node, nodeIndex + s.length)

        start = false
        rangeSentence = sentence
        addHighlight(range)
      }
    })
  })

  return highlights

  function addHighlight (range) {
    const parentEl = getRangeParent(range)
    const { x, y } = getOffsets(parentEl)
    Array.from(range.getClientRects()).forEach(({ top, left, width, height }) => {
      [top, left] = [top - y, left - x]
      const highlight = { top, left, width, height }
      const exists = highlights.reduce((bool, h) => {
        return bool || isObjEq({ ...h }, highlight)
      }, false)
      !exists && highlights.push(highlight)
    })
  }

  function getRangeParent (range) {
    const el = range.commonAncestorContainer
    if (el.nodeName === '#text') {
      return el.parentNode
    }
    return el
  }

  function gatherTextNodes (node) {
    if (node.nodeName !== '#text') {
      let res = []
      node.childNodes.forEach(child => {
        res = res.concat(gatherTextNodes(child))
      })
      return res
    } else {
      return [node]
    }
  }

  function isObjEq (a, b) {
    var aProps = Object.getOwnPropertyNames(a)
    var bProps = Object.getOwnPropertyNames(b)

    if (aProps.length !== bProps.length) {
      return false
    }

    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i]
      if (a[propName] !== b[propName]) {
        return false
      }
    }

    return true
  }

  function getOffsets (el) {
    let x = -(document.documentElement.scrollLeft || document.body.scrollLeft)
    let y = -(document.documentElement.scrollTop || document.body.scrollTop)

    // el = el.offsetParent

    // while (el) {
    //   x += (el.offsetLeft - el.scrollLeft + el.clientLeft)
    //   y += (el.offsetTop - el.scrollTop + el.clientTop)
    //   el = el.offsetParent
    // }

    return { x, y }
  }
}
