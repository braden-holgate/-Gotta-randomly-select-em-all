import request from 'superagent'

const trainers = '/api/v1/trainers'

export function getTrainers() {
  return request.get(trainers).then((response) => {
    return response.body
  })
}
