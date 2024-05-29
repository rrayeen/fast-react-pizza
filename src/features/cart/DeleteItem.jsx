import Button from "../../ui/Button";

function DeleteItem({ pizzaId, handleDelete }) {
  return (
    <Button onClick={() => handleDelete(pizzaId)} type="small">
      DELETE
    </Button>
  );
}

export default DeleteItem;
