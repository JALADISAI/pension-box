import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredList, getFilteredItems } from '../../actions';


const Filters = () => {
    const dispatch = useDispatch()

    const catList = useSelector((state) => state.productList?.catList || []);
    const filteredItems = useSelector((state) => state.productList?.filteredItems || []);
    const productList = useSelector((state) => state.productList?.list || []);

    const handleChange = (item, value) => {
        const list = [...filteredItems];
        if(value) {
            list.push(item)
        } else {
            list.splice(list.indexOf(item), 1)
        }
        dispatch(getFilteredItems(list))
        let updatedList = productList;
        if(list.length > 0) {
            updatedList = updatedList.filter(item => {
                if(list.includes(item.category)) {
                    return item
                }
            })
            dispatch(getFilteredList(updatedList))
        }
    }

    return(
        <div>
            <List>
                {catList.map((item, index) => {
                    return(
                        <ListItem key={index}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Checkbox onChange={e => handleChange(item, e?.target?.checked)} />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}

export default Filters