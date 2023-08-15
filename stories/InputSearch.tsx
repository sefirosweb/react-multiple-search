import React, { useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import './InputSearch.css'
import { AiOutlineSearch } from 'react-icons/ai'

type Filters = {
  label: string
  text: string,
}

export const InputSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelsRef = useRef<HTMLLIElement[]>([])
  const [text, setText] = useState('');
  const [focus, setFocus] = useState(0);
  const [focusMouse, setFocusMouse] = useState<number | null>(null);
  const [focusMouseMove, setFocusMouseMove] = useState<boolean>(true);


  const initial_labels = [
    'Products',
    'Categories',
    'Brands',
    'Stores',
    'Deals',
    'Coupons',
    'Promotions',
    'Gift Cards',
    'Reviews',
    'Questions',
    'Answers',
    'Users',
    'Lists',
    'Wishlists',
    'Registry',
    'Baby Registry',
    'Wedding Registry',
    'Help',
  ]

  const [labels, setLabels] = useState<string[]>(initial_labels)
  const [filters, setFilters] = useState<Filters[]>([]);

  useEffect(() => {
    if (focusMouse === null || !focusMouseMove) return
    setFocus(focusMouse)
  }, [focusMouse, focusMouseMove])

  const addText = () => {
    if (text === '') return
    const label = labels[focus]
    setFilters(
      [...filters,
      {
        label: label,
        text: text,
      }]
    )
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
      if (labelsRef[newFocus]) {
        labelsRef[newFocus].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      }

    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusMouseMove(false)
      const newFocus = focus === 0 ? labels.length - 1 : focus - 1
      setFocus(newFocus)
      if (labelsRef[newFocus]) {
        labelsRef[newFocus].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
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


  return (
    <>
      <div className="style-21" style={{ padding: '50px' }}>
        <div className="style-22" role="search">
          <div className="style-23" role="search" aria-autocomplete="list">
            <i className="style-24" role="img" aria-label="Search..." title="Search..."><AiOutlineSearch /></i>
            <div className="style-25">

              {filters.map((filter, index) => (
                <div className="style-26" role="listitem" aria-label="search" key={index}>
                  <div className="style-27" role="button"><small className="style-28">{filter.label}</small></div>
                  <div className="style-29"><small className="style-30">{filter.text}</small>
                    <button className="style-31" role="button" aria-label="Remove" title="Remove" onClick={() => deleteText(index)} />
                  </div>
                </div>
              ))}


              <input
                type="text"
                value={text}
                role='searchbox'
                placeholder="Search..."
                className="style-32"
                onChange={(e) => setText(e.target.value)}
                onKeyDown={inputKeyDown}
                ref={inputRef}
              />


              {text !== '' &&
                <ul className="style-33" role="menu">

                  {labels.map((label, index) => (
                    <li
                      className={`${index === focus || index === focusMouse ? 'focus' : ''}`}
                      key={index}
                      onMouseOver={() => onMouseOver(index)}
                      onMouseOut={() => onMouseOut()}
                      onClick={addText}
                      ref={el => {
                        if (el) {
                          labelsRef[index] = el
                        }
                      }}
                    >
                      <div className="style-34">
                        <span className="style-35"> Search <b className="style-36">{label}</b> for: <b className="style-37">{text}</b></span>
                      </div>
                    </li>
                  ))}

                </ul>
              }

            </div>
          </div>

        </div>
      </div>
    </>
  )
};

InputSearch.propTypes = {

};

InputSearch.defaultProps = {
  user: null,
};
