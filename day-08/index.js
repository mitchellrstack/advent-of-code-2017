/**
 * !! NOT WORKING YET !!
 * Day 8: I Heard You Like Registers
 */

// Returns an object with all registers and their value
const createRegisters = input => {
  const instructions = input.split('\n')

  let registers = {}

  for (let i = 0; i < instructions.length; i++) {
    const registerName = instructions[i].split(' ')[0]
    registers[registerName] = 0
  }

  return registers
}

// Takes in the registers object and check if the if statement would return true
const ifIsTrue = (registers, ifStatement) => {
  const registerToCheck = ifStatement.match(/[a-zA-Z]+/g)[1]
  const greaterLessThan = ifStatement.match(/[!*=*>*<*]+/g)[0]
  const registerValue = registers[registerToCheck]
  const valueToCompare = ifStatement.match(/[0-9]+/g)[0]

  let bool

  switch (greaterLessThan) {
    case '>':
      bool = registerValue > valueToCompare
      break
    case '<':
      bool = registerValue < valueToCompare
      break
    case '>=':
      bool = registerValue >= valueToCompare
      break
    case '<=':
      bool = registerValue <= valueToCompare
      break
    case '==':
      bool = registerValue === valueToCompare
      break
    case '!=':
      bool = registerValue !== valueToCompare
      break
    default:
      throw new Error(`ERROR: ${greaterLessThan} is not a valid comparison check`)
  }

  //console.log(`[${registerToCheck} = ${registerValue}] ${greaterLessThan} ${valueToCompare} => ${bool}`)

  return bool
}

// The main function that would be called for the input
const processInstructionsOne = input => {
  const instructions = input.split('\n')
  const registers = createRegisters(input)

  // Cycle through instructions
  for (let i = 0; i < instructions.length; i++) {
    const register = instructions[i].match(/[a-zA-Z]+/g)[0]
    const modifier = instructions[i].match(/(inc|dec)/g)[0]
    const value = instructions[i].match(/(-)*([0-9])+/g)[0]
    const ifStatement = instructions[i].match(/if.+/g)[0]

    // Modify the register's value
    const isTrue = ifIsTrue(registers, ifStatement)

    if (isTrue) {
      switch (modifier) {
        case 'inc':
          registers[register] += parseInt(value)
          break
        case 'dec':
          registers[register] -= parseInt(value)
          break
        default:
          throw new Error(`ERROR: ${modifier} is not a valid modifier`)
      }
    }
  }

  return registers
}

const processInstructions = input => {
  const instructions = parseInstructions(input.split('\n'))
  const registers = createRegisters(input)
  
  // Cycle through instructions
  for (let i = 0; i < instructions.length; i++) {
    const ins = instructions[i]
    const cmp = compare(registers, ins.registerToModify, ins.comparitor, ins.valueToCompare)

    // Tests comparison logic
    //console.log(`[${ins.registerToModify} = ${registers[ins.registerToModify]}] ${ins.comparitor} ${ins.valueToCompare} => ${cmp}`)

    if (cmp) {
      const val = Number(ins.valueToIncrement)

      switch (ins.modifier) {
        case 'inc':
          registers[ins.registerToModify] += Number(ins.valueToIncrement)
          break
        case 'dec':
          registers[ins.registerToModify] -= Number(ins.valueToIncrement)
          break
        default:
          throw new Error(`ERROR: ${ins.modifier} is not a valid modifier`)
      }
    }

    console.log(ins, registers)
  }

  return registers
}

const compare = (registers, register, comparitor, valueToCompare) => {
  switch (comparitor) {
    case '>': {
      return registers[register] > valueToCompare
    }
    case '<': {
      return registers[register] < valueToCompare
    }
    case '>=': {
      return registers[register] >= valueToCompare
    }
    case '<=': {
      return registers[register] <= valueToCompare
    }
    case '==': {
      return registers[register] === valueToCompare
    }
    case '!=': {
      return registers[register] !== valueToCompare
    }
    default: {
      throw new Error(`ERROR: ${greaterLessThan} is not a valid comparison check`)
    }
  }
}

const parseInstructions = instructions => {
  return instructions.map(ins => {
    const parts = ins.split(' ')
    return {
      registerToModify: parts[0],
      modifier: parts[1],
      valueToIncrement: parts[2],
      registerToCompare: parts[4],
      comparitor: parts[5],
      valueToCompare: parts[6]
    }
  })
}

const getLargestRegister = registers => {
  const registerName = Object.keys(registers).reduce((a, b) => registers[a] > registers[b] ? a : b)
  return { 
    name: registerName,
    value: registers[registerName]
  }
}

module.exports = { processInstructions, getLargestRegister }
