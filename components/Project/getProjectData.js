import data from './data'

function getProjectData(projectId) {
  return data.filter(({ id }) => id === projectId)[0]
}

export default getProjectData
