import useStore from "../../../useStore";
import uniqid from 'uniqid';

export default function useCreateNote()
{
    const {dispatch} = useStore();
    const newNote = {
        id : uniqid(),
        title : 'New Note',
        content : ''
    }
    const create = () => {
        dispatch({type : 'notes/add', payload : newNote});
    }
    return create;
}