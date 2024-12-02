/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2395212984")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_E51ubqXMR9` ON `player_hands` (`player`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2395212984")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_E51ubqXMR9` ON `player_hands` (`player`)"
    ]
  }, collection)

  return app.save(collection)
})
