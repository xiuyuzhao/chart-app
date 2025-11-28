const responseData = [
  { time: '10:10', call: 4, min: -4, max: -2 },
  { time: '10:15', call: 2, min: -1, max: 0 },
  { time: '10:20', call: 13, min: 2, max: 5 },
  { time: '10:25', call: 9, min: -1, max: -1 },
  { time: '10:30', call: 5, min: 2, max: 3 },
  { time: '10:35', call: 8, min: 2, max: 1 },
  { time: '10:40', call: 13, min: -1, max: -2 },
]
  
export default {
    // 支持值为 Object 和 Array
    'GET /appservice/common/v1/getSomeData': responseData,
}