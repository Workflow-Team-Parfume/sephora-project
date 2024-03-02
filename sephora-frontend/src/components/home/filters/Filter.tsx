import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IFilter } from './types';
import { Checkbox, List, ListItemButton, ListItemIcon } from '@mui/material';

import './filter.scss'

const Filter : React.FC<{expanded:string | false, handleChange:any, filter:IFilter}> 
= ({expanded, handleChange, filter}) => {

    const [checked, setChecked] = React.useState<readonly string[]>([]);

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
      };
  return (
      <Accordion className='filter' expanded={expanded === filter.name} onChange={handleChange(filter.name)} sx={{boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={expanded === filter.name ? <RemoveIcon /> : <AddIcon />}
        >
          <Typography className='filterName'>
            {filter.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: "0", margin: "0" }} >
            <List dense component="div" role="list">
           {filter.filters.map((value)=>(
            <ListItemButton
              key={value}
              role="listitem"
              onClick={handleToggle(value)}
              sx={{p:"0"}}
            >
              <ListItemIcon
                  sx={{minWidth:"0"}}>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <Typography className='filterText'>{value}</Typography>
            </ListItemButton>
            ))}
        </List>
        </AccordionDetails>
      </Accordion>
  );
}

export default Filter;