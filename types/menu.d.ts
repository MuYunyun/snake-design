export interface MenuProps {
  /* 当前展开的 SubMenu 菜单项 key 数组 */
  openKeys?: string[]
  /* 当前选中的菜单项 key */
  selectedKey: string
  /* 菜单类型，现在支持内嵌模式, 后续支持水平模式 */
  mode: 'inline'
  /* 被选中时调用被选中时调用 */
  onSelect: (key: string) => void
  /* 子节点 */
  children: React.ReactNode
}

export interface MenuItemProps {
  /* item 的唯一标志 */
  key: string
  /* 子菜单项值 */
  title: string
}

export interface SubMenuProps {
  /* item 的唯一标志 */
  key: string
  /* 子菜单项值 */
  title: string
  /* 子菜单的菜单项 */
  children: React.ReactNode
}
