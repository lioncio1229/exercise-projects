export const initialState = {
  list: {
    0: {
      id: '0',
      title: "Hello World",
      content: "<div>This is the content of hello world</div>",
      isFresh: false,
    },
    1: {
      id: '1',
      title: "Hello World 2",
      content: "<div>This is the content of hello world 2</div>",
      isFresh: false,
    },
  },
};

export default function notesReducer(state, action) {

  switch (action.type) {

    case "notes/add":
      const newNote = action.payload;
      return {
        list: {
          ...state.list,
          [newNote.id]: {...newNote, isFresh : true},
        },
        currentId: newNote.id,
      };

    case "notes/delete":
      const stateList = state.list;
      let list = {};
      Object.keys(stateList).forEach((key) => {
        if (action.payload !== key) list = { ...list, [key]: stateList[key] };
      });
      return {
        ...state,
        list,
      };

    case "notes/update":
      const note = action.payload;
      return {
        ...state,
        list: {
          ...state.list,
          [note.id]: {...note, isFresh : false},
        },
      };

    case "notes/select":
      return {
        list: { ...state.list },
        currentId: action.payload,
      };

    default:
      return state;
  }
}
