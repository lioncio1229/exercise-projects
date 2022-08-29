import { useState, useEffect } from "react";
import useCurrentNote from "../../notes/hooks/useCurrentNote";
import useUpdateNote from "../../notes/hooks/useUpdateNote";

export default function useTitleHandler() {
    
  const { note, dispatch } = useCurrentNote();
  const update = useUpdateNote();
  const [title, setTitle] = useState("");
  const [onFocus, setOnFocus] = useState(false);

  useEffect(() => {
    setTitle(note ? note.title : "");
  }, [note?.title]);

  const handleFocusIn = () => {
    setTitle(note.title);
    setOnFocus(true);
  };

  const handleFocusOut = () => {
    setOnFocus(false);
    if(note.title !== title || note.isFresh)
      update({ ...note, title });
  };

  const handleTextChange = (event) => {
    setTitle(event.target.value);
  };

  return {
    title,
    handleFocusIn,
    handleFocusOut,
    handleTextChange,
    onFocus
  };
}
