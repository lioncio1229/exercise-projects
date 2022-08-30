import { useEffect } from "react";
import useStore from "../../../useStore";

export default function useSortNote()
{
    const {state, dispatch} = useStore();

    useEffect(() => {
        
    }, [state.notes.modificationID]);
}