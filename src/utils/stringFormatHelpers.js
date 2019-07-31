
const formatPrice = (price) => {
  console.log('formatPrice', price);
  let priceArr = price.split('.')
  let dollar = priceArr[0]
  let cent = priceArr[1]

  if (cent.length > 0){
    cent = (cent.length === 1) ? cent + '0' : cent
  }else{
    cent = "00"
  }
  return '$' + dollar + '.' + cent
}


export { formatPrice }
