import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalOnScreen, setModalOnScreen] = useState(false);

  function deleteHandler() {
    setModalOnScreen(true);
  }

  function closeModalHandler() {
    setModalOnScreen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalOnScreen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalOnScreen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;
