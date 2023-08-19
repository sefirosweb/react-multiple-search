import styled from "styled-components";

export const MainDiv = styled.div`
  min-width: min(0% + 600px, 33% + 0px);
  order: 1;
  width: auto !important;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  display: flex;
  box-sizing: border-box;
`;

export const SearchDiv = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
`;

export const SearchListDiv = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(55, 65, 81);
  padding-top: 4px;
  padding-bottom: 4px;
  align-items: center;
  display: flex;
  position: relative;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0px;
  padding: 4px 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  appearance: none;
  border: 1px solid rgb(188, 207, 211);
  border-radius: 4px 4px 4px 4px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  box-sizing: border-box;
`;

export const SearchIcon = styled.i`
  margin-right: 8px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 14px;
  -webkit-font-smoothing: antialiased;
`;

export const SearchInputDiv = styled.div`
  gap: 4px;
  flex-wrap: wrap;
  flex-grow: 1;
  display: flex;
  box-sizing: border-box;
`;

export const FiltersListItem = styled.div`
  animation: 0.25s ease-out 0s 1 normal none running animate;
  white-space: nowrap;
  align-items: stretch;
  position: relative;
  display: flex;
  box-sizing: border-box;
`;

export const ButtonLabel = styled.div`
  color: rgb(255, 255, 255);
  background-color: rgb(113, 75, 103);
  border-color: rgb(113, 75, 103);
  border-top-left-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 0px;
  padding: 0px;
  display: block;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  border: 1px solid rgb(113, 75, 103);
  font-size: 14px;
  border-radius: 4px 0px 0px 4px;
  transition: none 0s ease 0s;
  position: relative;
  box-sizing: border-box;
`;

export const ButtonLabelSmall = styled.div`
  padding-right: 8px;
  padding-left: 8px;
  font-size: 13px;
  box-sizing: border-box;
`;

export const DeleteDiv = styled.div`
  --background-color: RGBA(231, 233, 237, 1);
  background-color: rgb(231, 233, 237);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding-left: 8px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
`;

export const DeleteSmall = styled.small`
  font-size: 13px;
  box-sizing: border-box;
`;

export const DeleteButton = styled.button`
  --color: RGBA(17, 24, 39, 1);
  color: rgb(17, 24, 39);
  font-weight: 500;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-right: 8px;
  padding-left: 8px;
  opacity: 0.5;
  text-decoration: none solid rgb(17, 24, 39);
  display: block;
  line-height: 21px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 0px 8px;
  font-size: 14px;
  border-radius: 4px;
  transition: none 0s ease 0s;
  position: relative;
  appearance: button;
  text-transform: none;
  margin: 0px;
  font-family: odoo_ui_icons;
  box-sizing: border-box;
  font-style: normal;
  font-variant: normal;
  -webkit-font-smoothing: antialiased;
  &:after {
    content: '\\00d7';
    font-weight: bold;
    font-family: sans-serif;
  }
`;

export const Input = styled.input`
  display: block;
  outline: rgb(55, 65, 81) none 0px;
  appearance: none;
  color: rgb(55, 65, 81);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  flex-grow: 1;
  border: 0px none rgb(55, 65, 81);
  margin: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu,
    "Noto Sans", Arial, "Odoo Unicode Support Noto", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 14px;
  line-height: 21px;
  box-sizing: border-box;
`;

export const MenuSearch = styled.ul`
  max-height: 307.3px;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 50px 0px;
  position: absolute;
  inset: calc(100% + 3px) 0px auto auto;
  width: 100%;
  display: block;
  z-index: 100;
  min-width: 160px;
  padding: 8px 0px;
  margin: 0px;
  font-size: 14px;
  color: rgb(55, 65, 81);
  text-align: left;
  list-style: outside none none;
  background-color: rgb(255, 255, 255);
  -webkit-background-clip: border-box;
  background-clip: border-box;
  border: 0px solid rgb(216, 218, 221);
  border-radius: 4px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
  box-sizing: border-box;
`;

export const LineLabelDiv = styled.div`
  cursor: pointer;
  align-items: center;
  display: flex;
  padding-left: 25px;
  width: 100%;
  padding: 3px 20px 3px 25px;
  clear: both;
  font-weight: 400;
  color: rgb(55, 65, 81);
  text-align: left;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0);
  border: 0px none rgb(55, 65, 81);
  box-sizing: border-box;
`;

export const SpanSearchText = styled.span`
  color: rgb(55, 65, 81);
  text-decoration: none solid rgb(55, 65, 81);
  box-sizing: border-box;
`;

export const StronLabel = styled.b`
  font-weight: 500;
  box-sizing: border-box;
`;

export const StrongLabelText = styled.b`
  font-weight: 500;
  --color: RGBA(113, 75, 103, 1);
  color: rgb(113, 75, 103);
  font-style: italic;
  box-sizing: border-box;
`;

export const LineLabel = styled.li`
  &.focus {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
