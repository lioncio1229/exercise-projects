import useStore from "../../../useStore";

export default function useDeleteNote()
{
    const {dispatch} = useStore();

    const deleteNote = (id) => {
        dispatch({type : 'notes/delete', payload : id});
    }

    return deleteNote;
}