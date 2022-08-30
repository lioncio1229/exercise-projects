
export default function NoteInfo({title, dateCreated, dateModified})
{

    

    return (
        <div className="note-info">
            <div className="content flex-con fcol">
                <h2>{title}</h2>
                <p> Date Created : {dateCreated} </p>
                <p> Date Modified : {dateCreated} </p>
            </div>
        </div>
    );
}