/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1904620112")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number666537513",
    "max": null,
    "min": 0,
    "name": "points",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1904620112")

  // remove field
  collection.fields.removeById("number666537513")

  return app.save(collection)
})
