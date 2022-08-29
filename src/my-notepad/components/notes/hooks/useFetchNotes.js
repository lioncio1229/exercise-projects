import useStore from "../../../useStore";

export default function useFetchNotes()
{
    const {state} = useStore();
    return state.notes.list;
}