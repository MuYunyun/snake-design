import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Menu from '../index'

const { useState } = React
const MenuItem = Menu.item
const SubMenu = Menu.subMenu

describe('menu test', () => {
  it('snapshot', () => {
    const { container } = render(
      <menu>
        <MenuItem title="菜单项" />
        <SubMenu title="子菜单">
          <MenuItem title="子菜单项" />
        </SubMenu>
      </menu>
    )
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('fire select', () => {
    function MenuDemo() {
      const [selectedKey, setSelectedKey] = useState('menu1')
      return (
        <menu selectedKey={selectedKey} onSelect={(key: string) => setSelectedKey(key)}>
          <MenuItem key="menu1" title="菜单项" />
          <SubMenu key="menu2" title="子菜单">
            <MenuItem key="menu3" title="子菜单项" />
          </SubMenu>
        </menu>
      )
    }

    const { getByText } = render(<MenuDemo />)
    const menuNode = getByText(/菜单项/i)
    expect(menuNode).toHaveClass('snake-menu-current')

    const subMenuNode = getByText(/子菜单/i)
    fireEvent.click(subMenuNode)
    expect(subMenuNode).toHaveClass('snake-menu-down')

    const childMenuItem = getByText(/子菜单项/)
    fireEvent.click(childMenuItem)
    expect(childMenuItem).toHaveClass('snake-munu-current')
  })
})
