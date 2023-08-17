import React, { Dispatch, Ref, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { FilterLabel, Filters } from '../types';
import { AiOutlineSearch } from '../AiOutlineSearch';
import { DeleteButton, Input, LineLabel, MainDiv, SearchDiv, SearchListDiv, SearchIcon, SearchInputDiv, FiltersListItem, ButtonLabel, DeleteDiv, DeleteSmall, MenuSearch, LineLabelDiv, SpanSearchText, StronLabel, StrongLabelText, ButtonLabelSmall } from './style'

export type Props = {
  filterLabels: Array<FilterLabel>
  filters: Array<Filters>
  setFilters: Dispatch<Array<Filters>>
}

export type PropsRef = {
  inputRef: HTMLInputElement | null
};

export const InputSearch = forwardRef((props: Props, ref: Ref<PropsRef>) => {
  const { filterLabels, filters, setFilters } = props
  const inputRef = useRef<HTMLInputElement>(null);
  const labelsRef = useRef<HTMLLIElement[]>([])
  const [text, setText] = useState('');
  const [focus, setFocus] = useState(0);
  const [focusMouse, setFocusMouse] = useState<number | null>(null);
  const [focusMouseMove, setFocusMouseMove] = useState<boolean>(true);
  const [labels, setLabels] = useState<Array<FilterLabel>>([])

  useEffect(() => {
    if (!filterLabels) return
    setLabels(filterLabels)

  }, [filterLabels])

  useEffect(() => {
    if (focusMouse === null || !focusMouseMove) return
    setFocus(focusMouse)
  }, [focusMouse, focusMouseMove])

  const addText = () => {
    if (text === '') return
    const label = labels[focus]
    const filter = filters.find(f => f.text === text && f.label === label.label)

    if (!filter) {
      setFilters(
        [...filters,
        {
          text: text,
          label: label.label,
          filter: label.filter,
        }]
      )
    }

    setText('')
    setFocus(0)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const deleteText = (index: number) => {
    const newFilters = [...filters]
    newFilters.splice(index, 1)
    setFilters(newFilters)
  }


  useEffect(() => {
    if (focusMouseMove) return

    const handleMouseMove = () => {
      setFocusMouseMove(true)
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [focusMouseMove])

  const inputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusMouseMove(false)
      const newFocus = focus === labels.length - 1 ? 0 : focus + 1
      setFocus(newFocus)
      if (labelsRef.current[newFocus]) {
        labelsRef.current[newFocus].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      }

    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusMouseMove(false)
      const newFocus = focus === 0 ? labels.length - 1 : focus - 1
      setFocus(newFocus)
      if (labelsRef.current[newFocus]) {
        labelsRef.current[newFocus].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      }

    } else if (e.key === 'Enter') {
      addText()

    } else if (e.key === 'Backspace') {
      if (text === '') {
        deleteText(filters.length - 1)
      }

    } else if (e.key === 'Escape') {
      setText('')
      setFocus(0)
    }
  }

  const onMouseOver = (index: number) => {
    setFocusMouse(index)
  }

  const onMouseOut = () => {
    setFocusMouse(null)
  }

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.relatedTarget !== null && labelsRef.current && labelsRef.current.includes(e.relatedTarget as HTMLLIElement)) {
      return
    }

    setText('')
    setFocus(0)
  }

  useImperativeHandle(ref, () => ({
    inputRef: inputRef.current,
  }));

  return (
    <>
      <MainDiv>
        <SearchDiv role="search">
          <SearchListDiv role="search" aria-autocomplete="list">
            <SearchIcon role="img" aria-label="Search..." title="Search..."><AiOutlineSearch /></SearchIcon>
            <SearchInputDiv>

              {filters.map((filter, index) => (
                <FiltersListItem role="listitem" aria-label="search" key={index}>
                  <ButtonLabel role="button"><ButtonLabelSmall>{filter.label}</ButtonLabelSmall></ButtonLabel>
                  <DeleteDiv><DeleteSmall>{filter.text}</DeleteSmall>
                    <DeleteButton role="button" aria-label="Remove" title="Remove" onClick={() => deleteText(index)} />
                  </DeleteDiv>
                </FiltersListItem>
              ))}


              <Input
                type="text"
                value={text}
                role='searchbox'
                placeholder="Search..."
                onChange={(e) => setText(e.target.value)}
                onKeyDown={inputKeyDown}
                onBlur={onBlur}
                ref={inputRef}
              />


              {text !== '' &&
                <MenuSearch role="menu">

                  {labels.map((label, index) => (
                    <LineLabel
                      className={`${index === focus || index === focusMouse ? 'focus' : ''}`}
                      key={index}
                      onMouseOver={() => onMouseOver(index)}
                      onMouseOut={() => onMouseOut()}
                      onClick={addText}
                      tabIndex={0}
                      ref={el => {
                        if (el) {
                          labelsRef.current[index] = el
                        }
                      }}
                    >
                      <LineLabelDiv>
                        <SpanSearchText> Search <StronLabel>{label.label}</StronLabel> for: <StrongLabelText>{text}</StrongLabelText></SpanSearchText>
                      </LineLabelDiv>
                    </LineLabel>
                  ))}

                </MenuSearch>
              }

            </SearchInputDiv>
          </SearchListDiv>

        </SearchDiv>
      </MainDiv>
    </>
  )
})