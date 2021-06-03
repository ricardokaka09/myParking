

const initialState = {
    parking: [],
    myParking: [],
    parkingFav: [],
    loading: true
}

export default function(state = initialState, action){
    const {type , payload} = action
    state.parking = payload
    switch (type) {
        case "LOAD_PARKING":   
          return {
              ...state,   
              myParking: [...state.myParking , payload],
              loading: true
          }
        case "ADD_PARKING":   
          return {
              ...state,
              myParking: [payload,...state.myParking ],
              loading: true
          }
        case "LOAD_PAVORITES":   
          return {
              ...state,
              parkingFav: [...state.parkingFav,payload ],
              loading: true
          }
        case "ADD_FAVORITES":   
          return {
              ...state,
              parkingFav: [payload ,...state.parkingFav],
              loading: true
          }
    
        default:
            return state
    }
} 