/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_879072730")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number829016367",
    "max": null,
    "min": null,
    "name": "small_blind",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number2354360580",
    "max": null,
    "min": null,
    "name": "big_blind",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_879072730")

  // remove field
  collection.fields.removeById("number829016367")

  // remove field
  collection.fields.removeById("number2354360580")

  return app.save(collection)
})
