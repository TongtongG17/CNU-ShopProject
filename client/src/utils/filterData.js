const continents = [
  {
      "_id": 1,
      "name": "식품"
  },
  {
      "_id": 2,
      "name": "PC"
  },
  {
      "_id": 3,
      "name": "노트북"
  },
  {
      "_id": 4,
      "name": "마우스"
  },
  {
      "_id": 5,
      "name": "키보드"
  },
  {
      "_id": 6,
      "name": "옷"
  },
  {
      "_id": 7,
      "name": "생활용품"
  }
]

const prices = [
  {
      "_id": 0,
      "name": "모두",
      "array": []
  },
  {   
      "_id": 1,
      "name": "0 ~ 4,999원",
      "array": [0, 4999]
  },
  {
      "_id": 2,
      "name": "5,000 ~ 9,999원",
      "array": [5000, 9999]
  },
  {
      "_id": 3,
      "name": "10,000 ~ 29,999원",
      "array": [10000, 29999]
  },
  {
      "_id": 4,
      "name": "30000 ~ 49,999원",
      "array": [30000, 49999]
  },
  {
      "_id": 5,
      "name": "50,0000원 이상",
      "array": [500000, 1500000]
  }
]

export {
  continents,
  prices
}
