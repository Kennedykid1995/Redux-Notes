import * as actionTypes from '../Actions/index'; 

const initialState = {
    notes: [], 
    getNotes: false, 
    viewingNote: false, 
    addingNote: false, 
    deletingNote: false, 
    editingNote: false, 
    error: null, 
}

export const noteReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GETTING_NOTE:
        return{...state, getNotes: true}
        case actionTypes.GET_NOTE:
        return{...state, notes: action.payload, getNotes: false}
        case actionTypes.VIEWING_NOTE: 
        return{...state, viewingNote:true}
        case actionTypes.VIEW_NOTE:
        return{...state, notes: action.payload ,viewingNote: false}
        case actionTypes.ADDING_NOTE: 
        return{...state, addingNote: true}
        case actionTypes.ADDED_NOTE:
        return{...state, notes: action.payload, addingNote: false}
        case actionTypes.DELETING_NOTE: 
        return{...state, deletingNote: true}
        case actionTypes.DELETED_NOTE: 
        return{...state, notes: action.payload, deletingNote: false}
        case actionTypes.EDITING_NOTE: 
        return{...state, editingNote: true}
        case actionTypes.EDITED_NOTE: 
        return{...state, notes: action.payload, editingNote: false}
        case actionTypes.ERROR:
        return{
            ...state, 
            getNotes: false, 
            addingNote: false, 
            viewingNote: false, 
            deletingNote: false, 
            editingNote: false, 
        }
        default: 
        return state
    }
}