export const setModelsByType = (state, data) => {
  state.allModels = data.data.data
}

export const setModelDevice = (state, data) => {
  state.casesByDeviceModels = data.data.data
}

export const setModelFilter = (state, data) => {
  state.model = data.data.data
}

export const pushImageUser = (state, data) => {
  state.userImages.push(data[0])
}

export const setTheDrawingImg = (state, node) => {
  state.drawingImg = node
}

export const setTheModelEdit = (state, id) => {
  state.modelsTypeToFIlter = id
}

export const setTheFormatEdit = (state, id) => {
  state.formatGrid = id
}
