// Actions

export function addCart(product) {
  return { type: "ADDITEM", payload: product };
}

export function deleteCart(product) {
  return { type: "DELETEITEM", payload: product };
}

export function addQuantity(product) {
  return { type: "ADDQUANTITY", payload: product };
}

export function deleteQuantity(product) {
  return { type: "DELETEQUANTITY", payload: product };
}
