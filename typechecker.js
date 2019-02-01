// select our type inputs
const sentenceTag = document.querySelector(`input[type="text"]`)

const outputTag = document.querySelector(`textarea.output`)
const originalText = outputTag.value

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeoutputTag = document.querySelector(`span.typesize-output`)

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector(`span.lineheight-output`)

const italicTag = document.querySelector('input[name="italic"]')

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const fontweightTag = document.querySelector(`input[name=fontweight]`)
const fontweightoutputTag = document.querySelector(`span.fontweight-output`)

const colorTags = document.querySelectorAll(`div.colors div`)

// when i type in my sentence tag, update the output tag accordingly
//if there is no value, put in orignal text
sentenceTag.addEventListener(`keyup`, function() {
  if (this.value) {
    outputTag.value = this.value
  } else {
    outputTag.value = originalText
  }
})

// when i type in my output tag, update the sentence tag accordingly
outputTag.addEventListener(`keyup`, function() {
  sentenceTag.value = this.value
})

// when i change my typesize slider, update the text next to it AND
// change the outputTag's font size
typesizeTag.addEventListener('input', function() {
  outputTag.style.fontSize = this.value + 'px'
  typesizeoutputTag.innerHTML = this.value + 'px'
})

// when i change my line height slider, update the text next to it AND
// change the outputTag's line height
lineheightTag.addEventListener('input', function() {
  outputTag.style.lineHeight = this.value
  lineheightOutput.innerHTML = this.value
})

// when i change my italic checkbox, update the font style to either
// normal or italic
italicTag.addEventListener('change', function() {
  if (this.checked) {
    outputTag.style.fontStyle = 'italic'
  } else {
    outputTag.style.fontStyle = ''
  }
})

// when i change my select for typeface, update the font family
typefaceTag.addEventListener('input', function() {
  outputTag.style.fontFamily = this.value
})

// when i change my font weight slider, update the text next to it AND
// change the outputTag's font weight
fontweightTag.addEventListener('input', function() {
  outputTag.style.fontWeight = this.value
  fontweightoutputTag.innerHTML = this.value
})

// go through all the color tags
// then when i click one of them, change the background color
// and the text color, and make this tag be selected
colorTags.forEach(tag => {
  tag.addEventListener('click', function() {
    outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color

    //reset the classes
    colorTags.forEach(tag => {
      tag.classList.remove('selected')
    })

    this.classList.add('selected')
  })
})
