/**
 * Day 6: Memory Relocation
 */
const distributeMemory = memoryBank => {
  let state = []

  // Have to make copy of array to modify and push to state
  let bank = memoryBank.join(', ') // Possibly set state as string for easier comparison
  state.push(bank)
  console.log(state)

  let newBank = bank.slice()
  newBank[0] += 10

  state.push(newBank)

  let newBank2 = newBank.slice()
  newBank2[0] -= 10

  if (state.indexOf(newBank2) !== -1) {
    console.log('INIFINITY')
  } else {
    state.push(newBank2)
  }

  

  console.log(state)
}

module.exports = distributeMemory

/*

Cycle
- finds the memory bank with the most blocks (ties won by the lowest-numbered memory bank)
- redistributes those blocks among the banks.
- removes all of the blocks from the selected bank
- moves to the next (by index) memory bank and inserts one of the blocks.

continues doing this until it runs out of blocks; if it reaches the last memory bank, it wraps around to the first one.
 */

distributeMemory([0, 2, 7, 0])
