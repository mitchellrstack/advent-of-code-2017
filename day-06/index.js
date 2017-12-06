/**
 * Day 6: Memory Relocation Part One
 */
const distributeMemory = memoryBank => {
  // For saving each state of the bank to check for inifinite loops
  let states = []
  // Make a copy of the input bank for modifying
  let bank = memoryBank.slice()
  // Convert to string for easy state comparison
  let bankString = bank.join(', ')
  // Push the string to the states for later checking of infinite loops
  states.push(bankString)
  // Switch to true if infinite loop detected, cycle will stop
  let isLoop = false
  // Count the number of cycles it took to redistribute the banks
  let redistributions = 0

  // Start cycle
  while (!isLoop) {
    // Make new copy of bank
    let newBank = bank.slice()
    
    // Select the bank with most blocks for redistribution
    let largestSum = newBank.reduce((a, b) => Math.max(a, b))
    let redisIndex = newBank.indexOf(largestSum)

    // Store the blocks temporarily (Maybe in the storage closet)
    let blocks = newBank[redisIndex]
    // Clear the fake blocks from the bank
    newBank[redisIndex] = 0

    // Distribute the blocks starting with block after the redisIndex
    while (blocks > 0) {
      redisIndex++
      if (redisIndex > newBank.length - 1) {
        redisIndex = 0
      }

      // Take a block from the storage (closet) and put in the selected bank
      blocks--
      newBank[redisIndex]++
    }

    let newBankString = newBank.join(', ')
    // If the string is in the state array, it is an infinite loop
    if (states.indexOf(newBankString) !== -1) {
      isLoop = true
    }
    // Push the string to the states since it it not already there
    states.push(newBankString)

    // Make global bank a copy of modified for next cycle
    bank = newBank.slice()

    // Increment the number of redistributions
    redistributions++
  }

  return redistributions
}

/**
 * !! NOT CURRENTLY WORKING NEED TO FIX !!
 * Day 6: Memory Relocation Part Two
 */
const distributeMemory2 = (memoryBank) => {
  // For saving each state of the bank to check for inifinite loops
  let states = []
  // Make a copy of the input bank for modifying
  let bank = memoryBank.slice()
  // Convert to string for easy state comparison
  let bankString = bank.join(', ')
  // Push the string to the states for later checking of infinite loops
  states.push(bankString)
  // Switch to true if infinite loop detected, cycle will stop
  let isLoop = false
  let loopFlag = ''
  // Count the number of cycles it took to redistribute the banks
  let redistributions = 0

  // Start cycle
  while (!isLoop) {
    // Make new copy of bank
    let newBank = bank.slice()
    
    // Select the bank with most blocks for redistribution
    let largestSum = newBank.reduce((a, b) => Math.max(a, b))
    let redisIndex = newBank.indexOf(largestSum)

    // Store the blocks temporarily (Maybe in the storage closet)
    let blocks = newBank[redisIndex]
    // Clear the fake blocks from the bank
    newBank[redisIndex] = 0

    // Distribute the blocks starting with block after the redisIndex
    while (blocks > 0) {
      redisIndex++
      if (redisIndex > newBank.length - 1) {
        redisIndex = 0
      }

      // Take a block from the storage (closet) and put in the selected bank
      blocks--
      newBank[redisIndex]++
    }

    let newBankString = newBank.join(', ')
    // If the string is in the state array, it is an infinite loop
    console.log(states.length)
    if (states.indexOf(newBankString) !== -1) {
      isLoop = true
      loopFlag = newBankString
    }
    // Push the string to the states since it it not already there
    states.push(newBankString)

    // Make global bank a copy of modified for next cycle
    bank = newBank.slice()

    // Increment the number of redistributions
    redistributions++
  }

  return { r: redistributions, state: loopFlag }
}

module.exports = { distributeMemory, distributeMemory2 }

// For the Advent Code Challenge answer
const challengeAnswer1 = distributeMemory([11, 11, 13, 7, 0, 15, 5, 5, 4, 4, 1, 1, 7, 1, 15, 11])
console.log(`Day 06 Challenge Part 1 Answer: ${challengeAnswer1}`)

// For the Advent Code Challenge answer
const challengeAnswer2loop1 = distributeMemory2([11, 11, 13, 7, 0, 15, 5, 5, 4, 4, 1, 1, 7, 1, 15, 11])
const challengeAnswer2loop2 = distributeMemory2(challengeAnswer2loop1.state.split(', '))
console.log(`Day 06 Challenge Part 2 Answer:\n`, challengeAnswer2loop1)
console.log(`Day 06 Challenge Part 2 Answer:\n`, challengeAnswer2loop2)
