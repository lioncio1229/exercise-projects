import Note from "./note";
import useCreateNote from "./hooks/useCreateNote";

import { useState } from "react";
import useStore from "../../useStore";
import ConfirmationBox from "../confirmation-box";
import useContentEditor from "../text-editor/hooks/useContentEditor";
import useDeleteNote from "./hooks/useDeleteNote";

import { faTrash, faSave } from '@fortawesome/free-solid-svg-icons';

export default function Notes() {
  const createNote = useCreateNote();

  const { state, dispatch } = useStore();
  const { isDirty, saveContent, unsaveContent } = useContentEditor();
  const [saveCB, setSaveCB] = useState({ id: undefined, isOn: false });
  const [deleteCB, setDeleteCB] = useState({ id: undefined, isOn: false });
  const deleteNote = useDeleteNote();

  const notes = state.notes.list;

  const isNoteDirty = (id) => {
    const {currentId} = state.notes;

    if(state.textEditor.isReading)
      dispatch({type : 'textEditor/reading', payload : false});

    if(isDirty && !id) {
        setSaveCB({id : currentId, isOn : true});
        return true;
    }
    if (isDirty && currentId !== id) {
        setSaveCB({ id, isOn: true });
        return true;
    }
    return false;
  };

  const handleAddNote = () => {
    if(!isNoteDirty()) createNote();
  };

  const handleNoteClick = (id) => {
    if (!isNoteDirty(id)) 
        select(id);
  };

  const handleNoteDelete = (id) => {
    if (!isNoteDirty(id)) 
        setDeleteCB({ id, isOn: true });
  };

  const select = (id) => {
    dispatch({ type: "notes/select", payload: id });
  };

  const saveConfirmationBox = () => {
    const saveNote = () => {
      saveContent();
      select(saveCB.id);
    };

    const unsaveNote = () => {
      unsaveContent();
      select(saveCB.id);
    };

    return (
      <ConfirmationBox
        title="Save"
        message="Do you want to save this first?"
        icon={faSave}
        onConfirm={saveNote}
        onDeny={unsaveNote}
        onClose={() => setSaveCB({ id: undefined, isOn: false })}
      />
    );
  };

  const deleteConfirmationBox = () => {
    const cbDeleteNote = () => {
      dispatch({ type: "textEditor/dirty", payload: false });
      deleteNote(deleteCB.id);
    };

    return (
      <ConfirmationBox
        title="Delete"
        message="Do you want to delete this?"
        icon={faTrash}
        onConfirm={cbDeleteNote}
        onDeny={() => setDeleteCB({ id: undefined, isOn: false })}
        onClose={() => setDeleteCB({ id: undefined, isOn: false })}
      />
    );
  };

  return (
    <>
      {saveCB.isOn && saveConfirmationBox()}
      {deleteCB.isOn && deleteConfirmationBox()}

      <div className="notes flex-con fcol">
        <div className="list">
          {notes && Object.keys(notes).map((key) => (
            <Note
              key={key}
              id={key}
              title={notes[key].title}
              onNoteClick={handleNoteClick}
              onNoteDelete={handleNoteDelete}
            />
          ))}
        </div>

        <div className="foot-con flex-con-2">
          <button onClick={handleAddNote} className="btn-l selectable">
            Add Note
          </button>
        </div>
      </div>
    </>
  );
}
