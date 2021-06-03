import { mdiNumeric9PlusCircleOutline } from "@mdi/js"

const initialState = {
    parking: [],
    myParking: null,
    parkingFav: [],
    loading: true
}

export default function(state = initialState, action){
    const {type , payload} = action
    switch (type) {
        case "ADD_PARKING":
          return {
              ...state,
              myParking: payload,
              loading: true
          }
    
        default:
            return state
    }
} 