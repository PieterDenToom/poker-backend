/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1904620112")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool538973511",
    "name": "turn",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1904620112")

  // remove field
  collection.fields.removeById("bool538973511")

  return app.save(collection)
})
