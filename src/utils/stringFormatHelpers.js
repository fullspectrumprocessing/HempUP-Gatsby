
const formatPrice = (price) => {
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

const formatProductType = (productType) => {
  return productType.split('__')[2]
}

export {
  formatPrice,
  formatProductType,
 }
