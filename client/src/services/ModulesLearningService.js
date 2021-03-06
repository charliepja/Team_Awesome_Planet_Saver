const baseURL = 'http://localhost:3000/api/learningContent/'

export default {
	getModule (name) {
		return fetch(baseURL + name)
		.then(result => result.json())
		.catch(err => console.error(err))
	},
  getAllData (name, page) {
    return fetch(baseURL + name + `/${page}`)
      .then(result => result.json())
      .catch(err => console.error(err))
  },
  getTotalPages (name) {
    return fetch(baseURL + name)
      .then(result => result.json())
      .catch(err => console.error(err))
  }
}
