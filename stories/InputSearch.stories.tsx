import React, { useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputSearch, PropsRef } from './InputSearch';
import { useArgs } from '@storybook/client-api';
import { initialFilterLabels } from './Examples';
import { Filters } from './types';

const meta: Meta<typeof InputSearch> = {
  component: InputSearch
};

export default meta;

type Story = StoryObj<typeof InputSearch>;

export const Primary: Story = {
  args: {
    filterLabels: initialFilterLabels,
    filters: [],
    setFilters: () => { },
  },
  render: (props) => {
    const { filterLabels } = props;
    const [storyArgs, updateStoryArgs] = useArgs();
    const [filters, setFilters] = useState<Array<Filters>>([]);

    const ref = useRef<PropsRef>(null);

    useEffect(() => {
      updateStoryArgs({ filters });
    }, [filters]);

    useEffect(() => {
      const timeout = setTimeout(() => {
        if (ref.current) {
          ref.current.inputRef?.focus();
        }
      }, 1000);
      return () => clearTimeout(timeout);
    }, [])


    return (
      <>
        <div style={{ marginBottom: '30px' }}>

          <InputSearch
            filters={storyArgs.filters}
            setFilters={setFilters}
            filterLabels={filterLabels}
            ref={ref}
          />
        </div>

        Filters:
        <div>
          {storyArgs.filters.map((p, pIndex) => <div key={pIndex}>{JSON.stringify(p)}</div>)}
        </div>



      </>
    )
  }
};

