/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3481593366")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select3919781662",
    "maxSelect": 1,
    "name": "suit",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "spades",
      "hearts",
      "diamonds",
      "clubs"
    ]
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file3309110367",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/svg+xml"
    ],
    "name": "image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3481593366")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select3919781662",
    "maxSelect": 1,
    "name": "suit",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "spades",
      "hearts",
      "diamonds",
      "clubs"
    ]
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file3309110367",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
