import { Fragment } from "react";
import { useState } from "react";

const EditModal = ({ todo }) => {
  const { todo_id, description } = todo;

  // console.log(id, desc);

  const [inputValue, setInputValue] = useState(description);

  const handleSaveClick = async (e) => {
    e.preventDefault();
    console.log("saving", inputValue, todo_id);
    try {
      const body = { description: inputValue };
      await fetch(`http://localhost:3000/todo/${todo_id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // value;
      // console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo_id}`}
      >
        Edit
      </button>

      <div class="modal fade" id={`id${todo_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Description</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="form-control"
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
                onClick={handleSaveClick}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditModal;
