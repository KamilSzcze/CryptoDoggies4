
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 10,
    "bellycolor" : 13,
    "eyescolor" : 19,
    "fringecolor" : 29,
    //Cattributes
    "eyesShape" : 4,
    "decorationPattern" : 1,
    "decorationMidcolor" : 29,
    "decorationSidescolor" : 29,
    "animation" : 1,
    "lastNum" : 1
}

$( document ).ready(function () {
  defaultPage();
});

$(".btn.colors").click(()=>{
  $(".tab.dogtributes").hide();
  $(".tab.colors").show();
})

$(".btn.dogtributes").click(()=>{
  $(".tab.colors").hide();
  $(".tab.dogtributes").show();
})

$(".btn.default").click(()=>{
  defaultPage();
})

$(".btn.random").click(()=>{
  var randomDNA = {
    "headcolor" : Math.floor(Math.random() * 89) + 10,
    "bellycolor" : Math.floor(Math.random() * 89) + 10,
    "eyescolor" : Math.floor(Math.random() * 89) + 10,
    "fringecolor" : Math.floor(Math.random() * 89) + 10,
    "eyesShape" : Math.floor(Math.random() * 9) + 1,
    "decorationPattern" : Math.floor(Math.random() * 9) + 1,
    "decorationMidcolor" : Math.floor(Math.random() * 89) + 10,
    "decorationSidescolor" : Math.floor(Math.random() * 89) + 10,
    "animation" : Math.floor(Math.random() * 9) + 1,
    "lastNum" : 1
  }
  $('#dnabody').html(randomDNA.bodycolor);
  $('#dnamouth').html(randomDNA.mouthColor);
  $('#dnaeyes').html(randomDNA.eyesColor);
  $('#dnaears').html(randomDNA.earsColor);
  $('#dnashape').html(randomDNA.eyesShape);
  $('#dnadecoration').html(randomDNA.decorationPattern);
  $('#dnadecorationMid').html(randomDNA.decorationMidcolor);
  $('#dnadecorationSides').html(randomDNA.decorationSidescolor);
  $('#dnaanimation').html(randomDNA.animation);
  renderCat(randomDNA)
})


// when page load
function defaultPage() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)
  $(".tab.dogtributes").hide();
  $(".tab.colors").show();

  renderCat(defaultDNA)
}
  


function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    bellyColor(colors[dna.bellycolor],dna.bellycolor)
    $('#bellycolor').val(dna.bellycolor)
    eyesColor(colors[dna.eyescolor],dna.eyescolor)
    $('#eyescolor').val(dna.eyescolor)
    fringeColor(colors[dna.fringecolor],dna.fringecolor)
    $('#fringecolor').val(dna.fringecolor)
    eyeVariation(dna.eyesShape)
    $('#eyeshape').val(dna.eyesShape)
    decorationVariation(dna.decorationPattern)
    $('#decoration').val(dna.decorationPattern)
    fringeColor1(colors[dna.decorationMidcolor],dna.decorationMidcolor)
    $('#fringecolor1').val(dna.decorationMidcolor)
    fringeColor2(colors[dna.decorationSidescolor],dna.decorationSidescolor)
    $('#fringecolor2').val(dna.decorationSidescolor)
    animationVariation(dna.animation)
    $("#animation").val(dna.animation)
}

// Changing cat colors and catributes
// listeners
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})

$('#bellycolor').change(()=>{
  var colorVal = $('#bellycolor').val()
  bellyColor(colors[colorVal],colorVal)
})

$('#eyescolor').change(()=>{
  var colorVal = $('#eyescolor').val()
  eyesColor(colors[colorVal],colorVal)
})

$('#fringecolor').change(()=>{
  var colorVal = $('#fringecolor').val()
  fringeColor(colors[colorVal],colorVal)
})

$('#eyeshape').change(()=>{
  var shape = parseInt($('#eyeshape').val())
  eyeVariation(shape)
})

$('#fringeTypes').change(()=>{
  var shape = parseInt($('#fringeTypes').val())
  decorationVariation(shape)
})

$('#fringecolor1').change(()=>{
  var colorVal = $('#fringecolor1').val()
  fringeColor1(colors[colorVal],colorVal)
})

$('#fringecolor2').change(()=>{
  var colorVal = $('#fringecolor2').val()
  fringeColor2(colors[colorVal],colorVal)
})

$('#animation').change(()=>{
  var animationVal = parseInt( $('#animation').val() )
  animationVariation(animationVal)
})