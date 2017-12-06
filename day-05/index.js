/**
 * The message includes a list of the offsets for each jump. Jumps are
 * relative: -1 moves to the previous instruction, and 2 skips the next one.
 * Start at the first instruction in the list. The goal is to follow the jumps
 * until one leads outside the list.
 *
 * In addition, these instructions are a little strange; after each jump, the offset
 * of that instruction increases by 1. So, if you come across an offset of 3, you would
 * move three instructions forward, but change it to a 4 for the next time it
 * is encountered.
 *
 * @author Mitchell Stack <mitchellrstack@gmail.com> (https://github.com/mitchellrstack/)
 * @param  {Array}  map An Array of instructions to get through maze
 * @return {Number}     Returns number of steps taken to escape
 */
const mazeExplorer = map => {
  const size = map.length - 1

  let maze = map.slice()
  let explorer = 0
  let steps = 0

  while (explorer <= size && explorer >= 0) {
    const artifact = maze[explorer]
    maze[explorer]++
    explorer += artifact
    steps++
  }

  return steps
}

/**
 * Now, the jumps are even stranger: after each jump, if the offset was three or more,
 * instead decrease it by 1. Otherwise, increase it by 1 as before.
 *
 * @author Mitchell Stack <mitchellrstack@gmail.com> (https://github.com/mitchellrstack/)
 * @param  {Array}  map An Array of instructions to get through maze
 * @return {Number}     Returns number of steps taken to escape
 */
const mazeExplorer2 = map => {
  const size = map.length - 1

  let maze = map.slice()
  let explorer = 0
  let steps = 0

  while (explorer <= size && explorer >= 0) {
    const artifact = maze[explorer]

    if (artifact >= 3) {
      maze[explorer]--
    } else {
      maze[explorer]++
    }

    explorer += artifact
    steps++
  }

  return steps
}

module.exports = { mazeExplorer, mazeExplorer2 }
