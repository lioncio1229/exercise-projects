import { useState, useEffect } from "react";
import useCurrentNote from "../../notes/hooks/useCurrentNote";

export default function useTitleHandler() {
    
  const { note, dispatch } = useCurrentNote();
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
    dispatch({
      type: "notes/update",
      payload: { ...note, title },
    });
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
