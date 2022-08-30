import useStore from "../../useStore";
import useToggleMenu from "../text-editor/useToggleMenu"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from '@fortawesome/free-solid-svg-icons';
import Radio from "./radioButton";
import { sortTypes } from "./notesSlice";

export default function NotesSort()
{
    const {state, dispatch} = useStore();
    const toggleMenu = useToggleMenu();
    const currentSelected = state.notes.sortType;

    const setSelected = (value) => {
        dispatch({type : 'notes/sort', payload : {sortType : value, isAscending : true}});
    }

    const options = () => {
        return (
            <div ref={toggleMenu.menuRef} className="sort-option">
                {
                    Object.keys(sortTypes).map(key => {
                        const sortType = sortTypes[key];
                        return <Radio
                            value={sortType}
                            selected={currentSelected}
                            text={sortType.name}
                            onChange={setSelected}
                        />
                    })
                }
            </div>
        )
    }
    
    return (
        <div className="sort">
            {toggleMenu.isMenuOpen && options()}
            <FontAwesomeIcon ref={toggleMenu.buttonRef} onClick={toggleMenu.toggle} className="sort-button selectable" icon={faSort} />
        </div>
    )
}