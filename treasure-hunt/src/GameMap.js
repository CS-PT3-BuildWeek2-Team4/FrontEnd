const map = [
  {
    "room_id": 400,
    "title": "Pirate Ry's",
    "description": "You see a sign before you that reads:\n\n'You have found Pirate Ry's. Send a `change_name` request and I'll change your identity to whatever you wish... for a price.'",
    "coordinates": "(68,47)",
    "elevation": 0,
    "terrain": "NORMAL",
    "items": [],
    "exits": [
      {
        "direction": "n",
        "next_room_id": 399
      }
    ]
  },
  {
    "room_id": 432,
    "title": "Pirate Ry's",
    "description": "You see a sign before you that reads:\n\n'You have found Pirate Ry's. Send a `change_name` request and I'll change your identity to whatever you wish... for a price.'",
    "coordinates": "(68,27)",
    "elevation": 0,
    "terrain": "NORMAL",
    "items": [],
    "exits": [
      {
        "direction": "n",
        "next_room_id": 399
      }
    ]
  },
  {
    "room_id": 20,
    "title": "Pirate Ry's",
    "description": "You see a sign before you that reads:\n\n'You have found Pirate Ry's. Send a `change_name` request and I'll change your identity to whatever you wish... for a price.'",
    "coordinates": "(34,44)",
    "elevation": 0,
    "terrain": "NORMAL",
    "items": [],
    "exits": [
      {
        "direction": "n",
        "next_room_id": 399
      }
    ]
  },
]

const newMap = {}
map.forEach((room) => {
  let roomId = room.room_id
  let roomInfo = {
    title: room.title,
    description: room.description,
    coordinates: room.coordinates,
    elevation: room.elevation,
    terrain: room.terrain,
    items: room.items,
  }
  let roomExits = room.exits
  item = {
    roomId,
    roomInfo,
    roomExits
  }
  newMap[roomId] = item
})

console.log(newMap)
