import data from './data'

export function getProjects() {
  return data
}

export function getProject(projectId) {
  return data.filter(({ id }) => id === projectId)[0]
}
