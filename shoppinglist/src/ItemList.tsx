import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem, getItems } from "./api/itemapi";
import { ItemResponse } from "./types";
import {  ListItem, ListItemText, IconButton, Tooltip } from "@mui/material";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useState } from "react";

import EditItem from "./EditItem";

function ItemList() {

  const [ open, setOpen ] = useState(false);
  
  const queryClient = useQueryClient();

  const { data, error, isSuccess } = useQuery({
    queryKey: ["items"],
    queryFn: getItems
  });

    const { mutate } = useMutation(deleteItem, {
    onSuccess: () => {
      setOpen(true);
      queryClient.invalidateQueries({ queryKey: ['items']});   // 이 부분은 useQuery()를 정의한 부분과 관련있습니다.
    },
    onError: err => {
      console.log(err);
    },
  })

  if(!isSuccess) {
    return <span>Loading</span>
  }

  if(error) {
    return <span>아이템 리스트를 불러오는데 실패했습니다. </span>
  } else {
    return (
      <>
        {
          data.map((item: ItemResponse) =>
            <ListItem key={item._links.self.href} divider>
              <ListItemText primary={item.product} secondary={item.amount} />
              <EditItem itemdata={item}/>
              <Tooltip title="Delete car">
                <IconButton aria-label="delete" size="small"
                  onClick={() => {
                  if(confirm(`${item.product} 삭제하시겠습니까?`)) {
                    mutate(item._links.self.href);
                  }
                  }}>
                  <DeleteForeverRoundedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </ListItem>
          )
        }
      </>
    );
  }

}

export default ItemList;