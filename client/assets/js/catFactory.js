
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.head, .cheeks, .chin, .neck, .body, .left_leg, .right_leg, .right_ear, .right_ear_end, .left_ear, .left_ear_end').css('background', '#' + color)  //This changes the color of the cat
    
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function bellyColor(color,code) {
    $('.belly, .mouth, .mouth_2, .right_inner_ear, .left_inner_ear, .eye, .left_cheek, .right_cheek').css('background', '#' + color)  //This changes the color of the cat
    $('#bellycode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the body color part of the DNA that is displayed below the dog
}

function eyesColor(color,code) {
    $('.left_outer_pupil, .right_outer_pupil').css('background', '#' + color)  //This changes the color of the dog
    $('#eyescode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function fringeColor(color,code) {
    $('.fringe_1, .fringe_2, .fringe_3, .fringe_4, .fringe_5').css('border-top-color', '#' + color)
    $('.fringe_1, .fringe_2, .fringe_3, .fringe_4, .fringe_5').css('border-left-color', '#' + color)
    $('.tail').css('border-left-color', '#' + color)
    $('.tail').css('border-top-color', '#' + color)
    $('.left_eye_lid, .right_eye_lid').css('border-top-color', '#' + color)
    $('.left_eye_lid, .right_eye_lid').css('border-bottom-color', '#' + color)
    $('.left_foot, .right_foot, .back_left_foot, .back_right_foot').css('background', '#' + color)  //This changes the color of the dog
    $('#fringecode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function fringeColor1(color,code) {
    $('.fringe_2, .fringe_4, .fringe_5').css('border-top-color', '#' + color)
    $('.fringe_2, .fringe_4, .fringe_5').css('border-left-color', '#' + color)
    
    $('#fringecode1').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationMid').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function fringeColor2(color,code) {
    $('.fringe_1, .fringe_3').css('border-top-color', '#' + color)
    $('.fringe_1, .fringe_3').css('border-left-color', '#' + color)
    
    $('#fringecode2').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationMid').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

//$("#fringecode").addClass('myApp');
//.left_foot, .right_foot, .back_left_foot, .back_right_foot
//.left_foot, .right_foot, .back_left_foot, .back_right_foot, .left_cheek, .right_cheek

//############################
//MOODS VARIATIONS STARTS HERE
//############################

function eyeVariation(num) {

    $('#dnashape').html(num)// that changes the DNA code number under the dog when we change the slider

    switch (num) { //switch is "like" simple if statement 
        case 1: //so if num = 1 than... normalEyes
            normalEyes() //here we execute the actual funcion that is called normalEyes, which you can find below
            normalMouthAndTongue()
            $('#eyeName').html('Basic') //here we set the badge to "Basic"
            break
        case 2: 
            normalEyes()
            normalMouthAndTongue()
            $('#eyeName').html('Happy')
            eyesType2()
            break
        case 3: 
            normalEyes()
            normalMouthAndTongue()
            $('#eyeName').html('Chill')
            eyesType3()
            break
        case 4: 
            normalEyes()
            normalMouthAndTongue()
            $('#eyeName').html('Not Happy')
            eyesType4()
            break
        case 5: 
            normalEyes()
            normalMouthAndTongue()
            $('#eyeName').html('Sneaky 1')
            eyesType5()
            break
        case 6: 
            normalEyes()
            normalMouthAndTongue()
            $('#eyeName').html('Sneaky 2')
            eyesType6()
            break
        case 7: 
            normalEyes()
            normalMouthAndTongue()
            $('#eyeName').html('Surprised')
            eyesType7()
            break
        case 8:
            normalEyes() 
            normalMouthAndTongue()
            $('#eyeName').html('Jolly')
            eyesType8()
            break
        case 9:
            normalEyes()
            normalMouthAndTongue()
            $('#eyeName').html('Shocked')
            eyesType9()
            break
    }
}


async function normalEyes() {
    await $('.left_eye_lid, .right_eye_lid').css({'border-top': '0px solid', 'border-bottom': '0px solid'})
   /* await $('.right_outer_pupil').css('top', '-4px')
    await $('.left_outer_pupil').css('top', '-4px') 
    await $('.left_eye_lid').css('top', '-35px')
    await $('.right_eye_lid').css('top', '-30px')
    await $('.right_outer_pupil').css('left', '-9px')
    await $('.left_outer_pupil').css('left', '-2px') */ 
}

/*async function normalEyes2() {
    await $('.right_outer_pupil').css('top', '9px')
    await $('.left_outer_pupil').css('top', '8px')
    await $('.right_outer_pupil').css('left', '-9px')
    await $('.left_outer_pupil').css('left', '-2px')
    await $('.left_eye_lid, .right_eye_lid').css({'border-top': '0px solid', 'border-bottom': '0px solid'})
     
}*/

async function normalMouthAndTongue() {
    await $('.tongue_1, .tongue_2, .tongue_3, .tongue_4, .tongue_5').css('background', '#eda6a6')
    await $('.mouth_3').css('height', '55px')
    await $('.mouth_3').css('width', '55px')
    await $('.mouth_3').css('top', '285px')
    await $('.mouth_3').css('left', '180px')
    await $('.mouth_3').css('transform', 'rotate(225deg)')
    await $('.mouth_3').css('border-radius', '50px')
    await $('.mouth').css('height', '95px')
    await $('.mouth').css('width', '98px')
    await $('.mouth').css('top', '260px')
    await $('.mouth').css('left', '160px')
    
}

async function eyesType2() {
    await $('.left_eye_lid, .right_eye_lid').css('border-top', '15px solid')
    await $('.right_outer_pupil').css('top', '-4px')
    await $('.left_outer_pupil').css('top', '-4px')
    await $('.left_eye_lid').css('top', '-30px')
    await $('.right_eye_lid').css('top', '-35px')
}


async function eyesType3() {
    await $('.left_eye_lid, .right_eye_lid').css('border-top', '32px solid')
    await $('.right_outer_pupil').css('top', '-4px')
    await $('.left_outer_pupil').css('top', '-4px')
    await $('.left_eye_lid').css('top', '-30px')
    await $('.right_eye_lid').css('top', '-35px')
}

async function eyesType4() {
    await $('.left_eye_lid, .right_eye_lid').css('border-top', '42px solid')
    await $('.tongue_1, .tongue_2, .tongue_3, .tongue_4, .tongue_5').css('background', '#ffffff00')
    await $('.mouth_3').css('height', '40px')
    await $('.mouth_3').css('width', '40px')
    await $('.mouth_3').css('top', '274px')
    await $('.mouth_3').css('left', '189px')
}

async function eyesType5() {   
    await $('.tongue_1, .tongue_2, .tongue_3, .tongue_4, .tongue_5').css('background', '#ffffff00')
    await $('.mouth_3').css('height', '40px')
    await $('.mouth_3').css('width', '40px')
    await $('.mouth_3').css('top', '274px')
    await $('.mouth_3').css('left', '189px')
    await $('.left_eye_lid, .right_eye_lid').css('border-top', '32px solid')
    await $('.left_eye_lid, .right_eye_lid').css('border-bottom', '32px solid')
}

async function eyesType6() {
    await $('.left_eye_lid, .right_eye_lid').css('border-top', '32px solid')
    await $('.left_eye_lid, .right_eye_lid').css('border-bottom', '32px solid')
}

async function eyesType7() {   
    await $('.tongue_1, .tongue_2, .tongue_3, .tongue_4, .tongue_5').css('background', '#ffffff00')
    await $('.mouth_3').css('height', '28px')
    await $('.mouth_3').css('width', '21px')
    await $('.mouth_3').css('top', '314px')
    await $('.mouth_3').css('left', '198px')
    await $('.mouth_3').css('transform', 'none')
    await $('.mouth_3').css('border-radius', '50px 50px 20px 20px')
}

async function eyesType8() {
    await $('.left_eye_lid, .right_eye_lid').css('border-top', '42px solid')
    await $('.tongue_1, .tongue_2, .tongue_3, .tongue_4, .tongue_5').css('background', '#ffffff00')
    await $('.mouth_3').css('height', '20px')
    await $('.mouth_3').css('width', '88px')
    await $('.mouth_3').css('top', '299px')
    await $('.mouth_3').css('left', '164px')
    await $('.mouth_3').css('transform', 'none')
}

async function eyesType9() {
    /*await $('.right_outer_pupil').css('top', '0px')
    await $('.left_outer_pupil').css('top', '0px')
    await $('.right_outer_pupil').css('left', '8px')
    await $('.left_outer_pupil').css('left', '6px')*/   
    await $('.tongue_1, .tongue_2, .tongue_3, .tongue_4, .tongue_5').css('background', '#ffffff00')
    await $('.mouth_3').css('height', '51px')
    await $('.mouth_3').css('width', '23px')
    await $('.mouth_3').css('top', '314px')
    await $('.mouth_3').css('left', '196px')
    await $('.mouth_3').css('transform', 'none')
    await $('.mouth_3').css('border-radius', '50px')
    await $('.mouth').css('height', '118px')
    await $('.mouth').css('width', '81px')
    await $('.mouth').css('top', '260px')
    await $('.mouth').css('left', '167px')
}



//############################
//FRINGE VARIATION STARTS HERE
//############################

function decorationVariation(num) {
    
    $('#dnadecoration').html(num)
    
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
        case 2:
            normaldecoration()
            $('#decorationName').html('Messy')
            fringeType2()
            break
        case 3:
            normaldecoration()
            $('#decorationName').html('Crown')
            fringeType3()
            break
        case 4:
            normaldecoration()
            $('#decorationName').html('Gelly')
            fringeType4()
            break
        case 5:
            normaldecoration()
            $('#decorationName').html('Floppy')
            fringeType5()
            break
        case 6:
            normaldecoration()
            $('#decorationName').html('Funky')
            fringeType6()
            break
        case 7:
            normaldecoration()
            $('#decorationName').html('Funky Long')
            fringeType7()
            break
        case 8:
            normaldecoration()
            $('#decorationName').html('To The Side')
            fringeType8()
            break
        case 9:
            normaldecoration()
            $('#decorationName').html('To The Side Floppy')
            fringeType9()
            break
            
    }
}             

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.fringe_1').css({ "transform": "rotate(43deg)", "top": "85px", "left": "65px", "width": "55px", "height": "49px"})
    $('.fringe_2').css({ "transform": "rotate(12deg)", "top": "101px", "left": "66px", "width": "54px", "height": "57px", "z-index": "11"})
    $('.fringe_3').css({ "transform": "rotate(358deg)", "top": "120px", "left": "74px", "width": "47px", "height": "52px"})
    $('.fringe_4').css({ "transform": "rotate(74deg)", "top": "75px", "left": "75px", "width": "64px", "height": "68px"})
    $('.fringe_5').css({ "transform": "rotate(327deg)", "top": "127px", "left": "86px", "width": "67px", "height": "52px"})
}

async function fringeType2() {
    $('.fringe_1').css({ "transform": "rotate(91deg)", "top": "85px", "left": "80px"})
    $('.fringe_2').css({ "transform": "rotate(91deg)", "top": "91px", "left": "64px", "z-index": "11"})
    $('.fringe_3').css({ "transform": "rotate(91deg) scale(1, -1)", "top": "78px", "left": "82px"})
    $('.fringe_4').css({ "transform": "rotate(90deg) scale(1, -1)", "top": "73px", "left": "130px"})
    $('.fringe_5').css({ "transform": "rotate(89deg)", "top": "82px", "left": "17px"})
}

async function fringeType3() {
    $('.fringe_1').css({ "transform": "rotate(91deg) scale(1, -1)", "top": "78px", "left": "82px"})
    $('.fringe_2').css({ "transform": "rotate(91deg)", "top": "71px", "left": "66px", "width": "60px", "height": "75px", "z-index": "11"})
    $('.fringe_3').css({ "transform": "rotate(89deg)", "top": "72px", "left": "98px"})
    $('.fringe_4').css({ "transform": "rotate(90deg) scale(1, -1)", "top": "73px", "left": "130px"})
    $('.fringe_5').css({ "transform": "rotate(91deg)", "top": "85px", "left": "39px"})
}

async function fringeType4() {
    $('.fringe_1').css({ "transform": "rotate(271deg)", "top": "138px", "left": "49px"})
    $('.fringe_2').css({ "transform": "rotate(270deg)", "top": "134px", "left": "66px", "width": "62px", "height": "42px", "z-index": "11"})
    $('.fringe_3').css({ "transform": "rotate(270deg)", "top": "130px", "left": "116px", "width": "63px", "height": "63px"})
    $('.fringe_4').css({ "transform": "rotate(270deg) scale(1, -1)", "top": "133px", "left": "99px"})
    $('.fringe_5').css({ "transform": "rotate(270deg) scale(1, -1)", "top": "122px", "left": "54px", "width": "75px", "height": "71px"})
}

async function fringeType5() {
    $('.fringe_1').css({ "transform": "rotate(352deg)", "top": "118px", "left": "65px"})
    $('.fringe_2').css({ "transform": "rotate(320deg)", "top": "125px", "left": "87px", "width": "46px", "height": "57px", "z-index": "11"})
    $('.fringe_3').css({ "transform": "rotate(282deg)", "top": "132px", "left": "103px", "width": "47px", "height": "52px"})
    $('.fringe_4').css({ "transform": "rotate(24deg)", "top": "95px", "left": "53px"})
    $('.fringe_5').css({ "transform": "rotate(244deg)", "top": "112px", "left": "112px", "width": "67px", "height": "52px"})
}

async function fringeType6() {
    $('.fringe_1').css({ "transform": "rotate(91deg)", "top": "85px", "left": "95px"})
    $('.fringe_2').css({ "transform": "rotate(91deg)", "top": "104px", "left": "78px", "width": "54px", "height": "57px", "z-index": "11"})
    $('.fringe_3').css({ "transform": "rotate(91deg) scale(1, -1)", "top": "102px", "left": "62px"})
    $('.fringe_4').css({ "transform": "rotate(146deg) scale(1, -1)", "top": "115px", "left": "157px"})
    $('.fringe_5').css({ "transform": "rotate(35deg)", "top": "118px", "left": "14px"})
} 

async function fringeType7() {
    $('.fringe_1').css({ "transform": "rotate(104deg)", "top": "53px", "left": "72px", "width": "85px", "height": "85px"})
    $('.fringe_2').css({ "transform": "rotate(81deg)", "top": "62px", "left": "15px", "width": "104px", "height": "109px", "z-index": "11"})
    $('.fringe_3').css({ "transform": "rotate(91deg) scale(1, -1)", "top": "50px", "left": "68px", "width": "112px", "height": "117px"})
    $('.fringe_4').css({ "transform": "rotate(146deg) scale(1, -1)", "top": "115px", "left": "169px", "width": "85px", "height": "96px"})
    $('.fringe_5').css({ "transform": "rotate(46deg)", "top": "96px", "left": "-39px", "width": "87px", "height": "87px"})
}

async function fringeType8() {
    $('.fringe_1').css({ "transform": "rotate(89deg)", "top": "64px", "left": "50px", "width": "85px", "height": "96px"})
    $('.fringe_2').css({ "transform": "rotate(77deg)", "top": "61px", "left": "10px", "width": "104px", "height": "109px", "z-index": "11"})
    $('.fringe_3').css({ "transform": "rotate(91deg)", "top": "43px", "left": "-13px", "width": "112px", "height": "117px"})
    $('.fringe_4').css({ "transform": "rotate(89deg)", "top": "51px", "left": "51px", "width": "102px", "height": "112px"})
    $('.fringe_5').css({ "transform": "rotate(90deg)", "top": "67px", "left": "-7px", "width": "87px", "height": "87px"})
}

async function fringeType9() {
    $('.fringe_1').css({ "transform": "rotate(269deg)", "top": "120px", "left": "119px", "width": "85px", "height": "96px"})
    $('.fringe_2').css({ "transform": "rotate(264deg)", "top": "117px", "left": "91px", "width": "104px", "height": "109px", "z-index": "11"})
    $('.fringe_3').css({ "transform": "rotate(271deg)", "top": "133px", "left": "64px", "width": "87px", "height": "87px"})
    $('.fringe_4').css({ "transform": "rotate(271deg)", "top": "129px", "left": "144px", "width": "102px", "height": "112px"})
    $('.fringe_5').css({ "transform": "rotate(269deg)", "top": "137px", "left": "48px", "width": "112px", "height": "117px"})
}

function animationVariation(num){
    $('#dnaanimation').html(num)

    switch (num) {
        
        case 1:
            resetAnimation()
            $('#animationName').html('No Animation')
            break
        case 2:
            resetAnimation()
            $('#animationName').html('Blinking Eyes Basic')
            animationType2() //animationType1 doesent exist just to create relation with case numbers
            break
        case 3:
            resetAnimation()
            $('#animationName').html('Blinking Eyes Happy')
            animationType3() 
            break
        case 4:
            resetAnimation()
            $('#animationName').html('Blinking Eyes Chill')
            animationType4() 
            break
        case 5:
            resetAnimation()
            $('#animationName').html('Blinking Eyes Sneaky')
            animationType5() 
            break
        case 6:
            resetAnimation()
            $('#animationName').html('Blinking Eyes Shocked')
            animationType6() 
            break
        case 7:
            resetAnimation()
            $('#animationName').html('Happy Tail')
            animationType7() 
            break
        case 8:
            resetAnimation()
            $('#animationName').html('Breathing')
            animationType8() 
            break
        case 9:
            resetAnimation()
            $('#animationName').html('Sniffing')
            animationType9() 
            break
    }
   
}

async function resetAnimation(){
    $(".left_eye_lid, .right_eye_lid").removeClass("blinkingEyes2")
    $(".left_eye_lid, .right_eye_lid").removeClass("blinkingEyes3")
    $(".left_eye_lid, .right_eye_lid").removeClass("blinkingEyes4")
    $(".left_eye_lid, .right_eye_lid").removeClass("blinkingEyes5")
    $(".left_eye_lid, .right_eye_lid").removeClass("blinkingEyes6")
    $(".tail").removeClass("happyTail")
    $(".tongue_4, .tongue_5, .tongue_3").removeClass("breathing")
    $(".nose").removeClass("sniffing")
}

async function animationType2(){
    $(".left_eye_lid, .right_eye_lid").addClass("blinkingEyes2")
}

async function animationType3(){
    $(".left_eye_lid, .right_eye_lid").addClass("blinkingEyes3")
    $(".tail").addClass("happyTail")
}

async function animationType4(){
    $(".left_eye_lid, .right_eye_lid").addClass("blinkingEyes4") 
}

async function animationType5(){
    $(".left_eye_lid, .right_eye_lid").addClass("blinkingEyes5")
}

async function animationType6(){
    $(".left_eye_lid, .right_eye_lid").addClass("blinkingEyes6")
}

async function animationType7(){
    $(".tail").addClass("happyTail")
}

async function animationType8(){
    $(".tongue_4, .tongue_5, .tongue_3").addClass("breathing")
}

async function animationType9(){
    $(".nose").addClass("sniffing")
}
