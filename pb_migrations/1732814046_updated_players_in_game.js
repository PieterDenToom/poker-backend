/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1904620112")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_0kjcYtsZMZ` ON `players_in_game` (\n  `game`,\n  `slot`\n)",
      "CREATE UNIQUE INDEX `idx_y8k7WzAHwR` ON `players_in_game` (`player`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1904620112")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_0kjcYtsZMZ` ON `players_in_game` (\n  `game`,\n  `slot`,\n  `player`\n)",
      "CREATE UNIQUE INDEX `idx_y8k7WzAHwR` ON `players_in_game` (`player`)"
    ]
  }, collection)

  return app.save(collection)
})
