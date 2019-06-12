import * as React from 'react'
import cx from 'classnames'
import * as warning from 'warning'
import { MenuProps, MenuItemProps, SubMenuProps } from 'types/menu'
import menuItem from './menuItem'
import subMenu from './subMenu'

const prefixCls = 'snake-menu'

const { useCallback } = React
const noop = () => {}

const Menu: React.FC<MenuProps> & {
  item: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<{}>>
  subMenu: React.ForwardRefExoticComponent<SubMenuProps & React.RefAttributes<{}>>
} = ({ openKeys = [], selectedKey = '', mode = 'inline', onSelect = noop }) => {
  // const getClassName = useCallback(() => {
  //   return cx(
  //     prefixCls,
  //     {
  //       [`${prefixCls}-${size}`]: size,
  //       [`${prefixCls}-disabled`]: disabled,
  //       [`${prefixCls}-${shape}`]: shape,
  //       [`${prefixCls}-${buttonStyle}`]: buttonStyle
  //     },
  //     className
  //   )
  // }, [size, disabled, shape, buttonStyle, className])
  // const handleChange = useCallback((value: string | number) => {
  //   onChange(value)
  // }, [])
  // warning(!(value === undefined), 'Radio', 'should have `value` prop')
  // return (
  //   <div className={getClassName()}>
  //     {options.map(p => {
  //       const checked = p.value === value
  //       return (
  //         <RadioItem
  //           key={p.value}
  //           checked={checked}
  //           disabled={disabled || p.disabled}
  //           onChange={() => handleChange(p.value)}
  //         >
  //           {p.label}
  //         </RadioItem>
  //       )
  //     })}
  //   </div>
  // )
}

Menu.item = menuItem
Menu.subMenu = subMenu

export default Menu
