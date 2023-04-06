import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  const [isExpanded, setExpanded] = React.useState(false);
  const [input, setinput] = React.useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setinput((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value,
      };
    });
  }
  function sumbit(event) {
    props.onAdd(input);
    setinput({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={input.title}
          />
        ) : null}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={input.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={sumbit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
