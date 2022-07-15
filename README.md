# florrAPI

Let's see whats possible...

## Goals

the library should not depend on the games memory for now. Do everything by hooking into canvas draws.

#### Information:
- player: name, level, position??,
- game status: in menu, in game
- player status: dead, alive, time alive
- entity infos: position, type,
- additional entity infos for type:
  - player: name
  - mob: size?
  - petal: rarity, type
- arena info: type, size
- round info: current round number, mobs left, elapsed time
- game info: elapsed time
- squad: players

#### Methods:
- squad: create(), join(id), copy_link()
- player: move_to(position), set_mode(normal|angry|sad)
- petals: switch(number)

**Feel free to submit a PR if you want to add anything to the list.**

## Building:

```
npm run build
```

Library will be saved under: `dist/florrAPI.js`.



## Working with the API:

include the library in your script and access the API by the global object `florrAPI`. Refer to the documentation and examples for more information.

## Documentation:

TODO

## Examples: 

TODO
