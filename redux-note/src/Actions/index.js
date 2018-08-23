import axios from 'axios'

export const GETTING_NOTE = "GETTING_NOTE"
export const GET_NOTE = "GET_NOTE"
export const ADDING_NOTE = "ADDING_NOTE"
export const ADDED_NOTE = "ADDED_NOTE"
export const EDITING_NOTE = "EDITING_NOTE"
export const EDITED_NOTE = "EDITED_NOTE"
export const DELETING_NOTE = "DLETEING_NOTE"
export const DELETED_NOTE = "DELETED_NOTE"
export const ERROR = "ERROR"

const URL = "https://killer-notes.herokuapp.com"

export const gettingNote = () =>{
    const note = axios.get(`${URL}/get/all`);
    return dispatch=>{
        dispatch({type: GETTING_NOTE}); 
        note
        .then(response => {
            dispatch({type: GET_NOTE, payload: response.data})
        })
        .catch(err =>{
            dispatch({type: ERROR, payload: err})
        })
    }
}
export const createNote = notes =>{
    const newNote = axios.post(`${URL}/note/create`, notes); 
    return dispatch =>{
        dispatch({type: ADDING_NOTE}); 
        newNote
        .then(({data})=>{
            dispatch({type: ADDED_NOTE, payload: data})
        })
        .catch(err =>{
            dispatch({type: ERROR, payload: err})
        })
    }
}
export const deleteNote = id =>{
    const noteDelete = axios.delete(`${URL}/note/delete/id`, id, {
        data: {id}
    }); 
    return dispatch =>{
        dispatch({type: DELETING_NOTE});
        noteDelete
        .then(({data})=>{
            dispatch({type: DELETED_NOTE, payload: data})
        })
        .catch(err => {
            ({type: ERROR, payload: err})
        })
    }
}