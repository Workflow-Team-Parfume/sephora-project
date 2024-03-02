import * as React from 'react';
import Filter from './Filter';
import { IFilter } from './types';

const Filters : React.FC<{filters:IFilter[]}> 
= ({filters}) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      event;
    };

  return (
    <div>
      {filters.map((filter)=>(<Filter expanded={expanded} handleChange={handleChange} filter={filter}/>))}
    </div>
  );
}

export default Filters;