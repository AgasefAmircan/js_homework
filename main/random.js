function random(lower, upper) {
    return Math.floor((Math.random() * (upper - lower + 1)) + lower)
}
random(3, 12)

// Arrow function
//  var random=(lower,upper) =>{
//      return Math.floor((Math.random()*(upper-lower+1))+lower)
//  }