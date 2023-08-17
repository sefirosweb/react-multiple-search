import React, { Dispatch } from 'react';
import { FilterLabel, Filters } from '../types';
export type Props = {
    filterLabels: Array<FilterLabel>;
    filters: Array<Filters>;
    setFilters: Dispatch<Array<Filters>>;
};
export type PropsRef = {
    inputRef: HTMLInputElement | null;
};
export declare const InputSearch: React.ForwardRefExoticComponent<Props & React.RefAttributes<PropsRef>>;
