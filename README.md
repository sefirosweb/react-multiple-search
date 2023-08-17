# React Multiple Search Input

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/sefirosweb)

[!["Storybook"](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://sefirosweb.github.io/react-multiple-search) [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

It´s a React compononet to use a multiple searchs or filters in one input, but you can specific in wich field you want to search

# Try it!

How to use all components are in the [GitHub Pages](https://sefirosweb.github.io/react-multiple-search/)

![image](https://raw.githubusercontent.com/sefirosweb/react-multiple-search/master/docs/input_search.png)

# Install

```
npm install --save-dev @sefirosweb/react-multiple-search
```

# Usage

Import components whant you wish:

```tsx
import { useEffect, useRef, useState } from "react";
import InputSearch, {
  InputSearchPropsRef,
  FilterLabel,
  Filters,
} from "@sefirosweb/react-multiple-search";
function App() {
  const inputRef = useRef<InputSearchPropsRef>(null);
  const [filter, setFilter] = useState<Array<Filters>>([]);
  const initialFilterLabels: Array<FilterLabel> = [
    {
      label: "All",
      filter: "all",
    },
    {
      label: "Name",
      filter: "name",
    },
    {
      label: "Email",
      filter: "email",
    },
  ];

  useEffect(() => {
    const time = setTimeout(() => {
      inputRef.current?.inputRef?.focus();
    }, 1000);
    return () => clearTimeout(time);
  }, []);

  return (
    <div>
      <div style={{ margin: "30px" }}>
        {JSON.stringify(filter)}
        <InputSearch
          ref={inputRef}
          filters={filter}
          setFilters={setFilter}
          filterLabels={initialFilterLabels}
        />
      </div>
    </div>
  );
}

export default App;
```

Contribute to this project in [github.com/sefirosweb/react-multiple-search](https://github.com/sefirosweb/react-multiple-search)
