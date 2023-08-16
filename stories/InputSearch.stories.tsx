import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Filters, InputSearch, Props } from './InputSearch';
import { useArgs } from '@storybook/client-api';
import { initialFilterLabels } from './Examples';

const meta: Meta<typeof InputSearch> = {
  component: InputSearch
};

export default meta;

type Story = StoryObj<typeof InputSearch>;

export const Primary: Story = {
  decorators: [

  ],
  args: {
    filterLabels: initialFilterLabels,
    filters: [],
    setFilters: () => { },
  },
  render: (props) => {
    const { filterLabels } = props;
    const [storyArgs, updateStoryArgs] = useArgs();
    const [filters, setFilters] = useState<Array<Filters>>([]);

    useEffect(() => {
      updateStoryArgs({ filters });
    }, [filters]);


    return (
      <InputSearch
        filters={storyArgs.filters}
        setFilters={setFilters}
        filterLabels={filterLabels}
      />
    )
  }
};


// export const Template = (props: Props) => {
//   const [filters, setFilters] = useState<Array<Filters>>([]);
//   const api = useStorybookApi();

//   const toggleMyTool = useCallback(() => {
//     // Custom logic to toggle the addon here
//   }, []);


//   useEffect(() => {

//   }, [api]);

//   return (
//     <InputSearch
//       filterLabels={initial_labels}
//       filters={filters}
//       setFilters={setFilters}
//     />
//   );
// };


