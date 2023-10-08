const categorys = [

  {"_id":1, 
    "name":"문구"},

    {"_id":2, 
    "name":"식품"},

    {"_id":3, 
    "name":"컴퓨터 용품"},

    {"_id":4, 
    "name":"옷"},

    {"_id":5, 
    "name":"주방용품"},

    {"_id":6, 
    "name":"전자기기"},

    {"_id":7, 
    "name":"음료"}


]

const price = [
  {
      "_id": 0,
      "name": "아무거나",
      "array": []
  },
  {
      "_id": 1,
      "name": "0원~2000원",
      "array": [0, 2000]
  },
  {
      "_id": 2,
      "name": "2001원~5000원",
      "array": [2001, 5000]
  },
  {
      "_id": 3,
      "name": "5001원~25000원",
      "array": [5001, 25000]
  },
  {
      "_id": 4,
      "name": "25001원~50000원",
      "array": [25001, 50000]
  },
  {
      "_id": 5,
      "name": "50001원 이상",
      "array": [50001, 1500000]
  }
]




export {
  categorys,
  price
}