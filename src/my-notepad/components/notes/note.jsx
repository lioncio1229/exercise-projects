import useCurrentNote from './hooks/useCurrentNote';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFileLines, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Note({id, title='No Title', onNoteClick, onNoteDelete})
{
    const {note} = useCurrentNote();

    const handleNoteClick = () => {
        if(onNoteClick) onNoteClick(id);
    }   
    
    const handleNoteDelete = (e) => {
        e.stopPropagation();
        if(onNoteDelete) onNoteDelete(id);
    }
    
    const getClass = () => {
        return (
          "list-item flex-con selectable " +
          (note?.id === id ? "active" : "inactive")
        );
    }

    return (
        <div onClick={handleNoteClick} className={getClass()}>
          <FontAwesomeIcon className="list-item-icon" icon={faFileLines} />
          <div>
            <p>{title}</p>
            <small> Last Modified : 8/11/2022 </small>
          </div>
          <FontAwesomeIcon
            onClick={handleNoteDelete}
            className="list-item-icon"
            icon={faTrash}
          />
        </div>
    );
}