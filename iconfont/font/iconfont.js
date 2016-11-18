;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-geiwomenpingfen" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M861.612563 312.505433l97.8117-97.8117L808.765961 64.035432l-97.8117 97.8117-29.052686 29.052686L215.59015 657.374972l-0.004093 0.014326-54.663994 205.433836 205.455325-54.631248 0.023536-0.00614 495.364111-495.52784L861.612563 312.505433zM218.813564 804.688085l18.169825-68.033489 49.625234 49.625234L218.813564 804.688085zM808.765961 121.921817l92.771917 92.771917-68.868507 68.868507-92.771917-92.771917L808.765961 121.921817zM803.768133 312.7674 337.500711 779.198551l-92.923366-92.923366 466.267423-466.431152L803.768133 312.7674z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fenxianggeihaoyou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M819.2 64 204.8 64C128 64 64 128 64 204.8l0 614.4C64 896 128 960 204.8 960l614.4 0c76.8 0 140.8-64 140.8-140.8L960 204.8C960 128 896 64 819.2 64zM761.6 614.4C761.6 614.4 761.6 614.4 761.6 614.4c-6.4 0-12.8-6.4-12.8-12.8l-6.4-313.6-499.2 499.2c0 0-6.4 6.4-12.8 6.4s-6.4 0-12.8-6.4c-6.4-6.4-6.4-12.8 0-19.2l499.2-499.2L409.6 262.4C403.2 262.4 396.8 256 396.8 249.6c0-6.4 6.4-12.8 12.8-12.8l345.6 6.4C761.6 243.2 768 249.6 768 256l6.4 345.6C774.4 608 768 614.4 761.6 614.4z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-geidan" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 1016.986301C790.896233 1016.986301 1016.986301 790.896233 1016.986301 512 1016.986301 233.103767 790.896233 7.013699 512 7.013699 233.103767 7.013699 7.013699 233.103767 7.013699 512 7.013699 790.896233 233.103767 1016.986301 512 1016.986301ZM592.876712 275.945205 594.849315 295.671233 667.835616 295.671233 671.780822 275.945205 740.821918 275.945205 736.876712 295.671233 750.684932 295.671233 750.684932 479.123288C752 505.424784 739.506976 517.260288 713.205479 514.630137L510.027397 514.630137 510.027397 295.671233 525.808219 295.671233 523.835616 275.945205 592.876712 275.945205ZM594.849315 402.191781C594.849315 404.821932 596.821904 406.136986 600.767123 406.136986L606.684932 406.136986 606.684932 344.986301 555.39726 344.986301 555.39726 467.287671 608.657534 467.287671 608.657534 443.616438 586.958904 443.616438C576.4383 444.931507 569.863028 438.356235 567.232877 423.890411L559.342466 360.767123 588.931507 360.767123 594.849315 402.191781ZM703.342466 343.013699 652.054795 343.013699 652.054795 406.136986 656 406.136986C658.630151 406.136986 659.945205 404.821932 659.945205 402.191781L663.890411 360.767123 693.479452 360.767123 689.534247 425.863014C688.219178 437.698686 681.643892 443.616438 669.808219 443.616438L654.027397 443.616438 654.027397 467.287671 695.452055 467.287671C700.712357 468.60274 703.342466 465.315111 703.342466 457.424658L703.342466 343.013699ZM515.945205 532.383562 748.712329 532.383562 748.712329 700.054795C750.027397 721.096003 738.191907 730.958904 713.205479 729.643836L515.945205 729.643836 515.945205 532.383562ZM581.041096 611.287671 685.589041 611.287671 685.589041 579.726027 581.041096 579.726027 581.041096 611.287671ZM679.671233 682.30137C683.616452 682.30137 685.589041 680.986315 685.589041 678.356164L685.589041 654.684932 581.041096 654.684932 581.041096 682.30137 679.671233 682.30137ZM500.164384 283.835616 500.164384 615.232877 446.90411 615.232877 446.90411 343.013699 366.027397 343.013699 366.027397 617.205479 312.767123 617.205479 312.767123 283.835616 500.164384 283.835616ZM383.780822 366.684932 433.09589 366.684932 433.09589 589.589041 462.684932 676.383562C464 679.013713 467.287643 680.328767 472.547945 680.328767L494.246575 680.328767 494.246575 727.671233 446.90411 727.671233C432.438286 727.671233 423.890425 721.753481 421.260274 709.917808L407.452055 662.575342 391.671233 709.917808C387.726013 723.068563 377.863098 728.986301 362.082192 727.671233L314.739726 727.671233 314.739726 680.328767 338.410959 680.328767C343.671261 680.328767 346.958904 678.356178 348.273973 674.410959L383.780822 591.561644 383.780822 366.684932Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
