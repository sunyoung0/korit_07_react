import { Button, TextField, Dialog, DialogContent, DialogTitle, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { Item, ItemEntity, ItemResponse } from "./types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateItem } from "./api/itemapi";
import EditRoundedIcon from '@mui/icons-material/EditRounded';

type FormProps = {
  itemdata: ItemResponse
}

function EditItem ( {itemdata} : FormProps) {
  const queryClient = useQueryClient();

  const [ open, setOpen ] = useState(false);

  const [ item, setItem ] = useState<Item>({
    product: '',
    amount: '',
  });

  // const queryClient = useQueryClient();

  const handleOpen = () => {
    setItem({
      product: itemdata.product,
      amount: itemdata.amount
    })
    
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const { mutate } = useMutation(updateItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["items"]);
    },
    onError: err => {
      console.log(err);
    }
  })

  const handleSave = () => {
    const url = itemdata._links.self.href;
    const itemEntity: ItemEntity = { item, url };

    mutate(itemEntity);

    setItem({
      product: '',
      amount: ''
    });
    handleClose();
  }

  return(
    <>
      <Tooltip title="Edit car" >
        <IconButton aria-label="edit" size="small" onClick={handleOpen}>
          <EditRoundedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          <TextField value={item.product} margin="dense" onChange={e => setItem({...item, product:e.target.value})} label="Product/제품명" fullWidth />
          <TextField value={item.amount} margin="dense" onChange={e => setItem({...item, amount:e.target.value})} label="amount/수량" fullWidth/>
        </DialogContent>
        <Button onClick={handleClose}>
          Cancel / 취소
        </Button>
        <Button onClick={handleSave}>
          Edit / 수정
        </Button>
      </Dialog>
    </>
  );
}

export default EditItem;