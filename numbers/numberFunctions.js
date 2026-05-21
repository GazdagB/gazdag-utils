export function zero(operation) {
  if(operation){
    return operation(0)
  } else{
    return 0 
  }
}

export function one(operation) {
  if(operation){
    return operation(1)
  } else{
    return 1 
  }
}

export function two(operation) {
  if(operation){
    return operation(2)
  } else{
    return 2 
  }
}

export function three(operation) {
  if(operation){
    return operation(3)
  } else{
    return 3
  }
}
export function four(operation) {
  if(operation){
    return operation(4)
  } else{
    return 4 
  }
}
export function five(operation) {
  if(operation){
    return operation(5)
  } else{
    return 5 
  }
}
export function six(operation) {
  if(operation){
    return operation(6)
  } else{
    return 6 
  }
}
export function seven(operation) {
  if(operation){
    return operation(7)
  } else{
    return 7 
  }
}
export function eight(operation) {
  if(operation){
    return operation(8)
  } else{
    return 8
  }
}

export function nine(operation) {
  if(operation){
    return operation(9)
  } else{
    return 9 
  }
}

export function plus(n) {
  return (left) => left + n
}
export function minus(n) {
  return (left) => left - n
}
export function times(n) {
  return (left) => left * n
}
export function dividedBy(n) {
  return (left) => Math.floor(left / n) 
}