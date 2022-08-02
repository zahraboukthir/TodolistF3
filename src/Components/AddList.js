import { Modal,Button } from "react-bootstrap"

const AddList =() =>{
    return(
        <>
  <Modal.Dialog>
      <Modal.Header closeButton>
        {/* <Modal.Title>Modal title</Modal.Title> */}
      </Modal.Header>

      <Modal.Body>
       <input type="text" name="" id=""  placeholder="your task title"/>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Reset</Button>
        <Button variant="primary">Add Task</Button>
      </Modal.Footer>
    </Modal.Dialog>
        </>
    )
}

export default AddList;