---
imports:
  import RadioDemoCode from '!raw-loader!./demo.tsx';
  import ButtonDemoCode from '!raw-loader!./buttonDemo.tsx';
  import RadioDemo from './demo.tsx';
  import RadioButtonDemo from './buttonDemo.tsx';
---

# Menu 导航菜单

用于在多个备选项中选中单个状态

## 简单示例

:::demo
<Block des="常用的 radio" code={RadioDemoCode}>
  <div>123</div>
</Block>
:::

## Menu

| 属性        | 说明                                         | 类型           | 默认值 |
| :---------- | :------------------------------------------- | :------------- | :----- |
| openKeys    | 当前展开的 SubMenu 菜单项 key 数组           | string[]       | --     |
| selectedKey | 当前选中的菜单项 key                         | string         | --     |
| mode        | 菜单类型，现在支持内嵌模式, 后续支持水平模式 | string: inline | inline |
| onSelect    | 被选中时调用                                 | function(key)  | --     |

## Menu.Item

| 属性  | 说明            | 类型   | 默认值    |
| :---- | :-------------- | :----- | :-------- |
| key   | item 的唯一标志 | string | --        |
| title | 子菜单项值      | string | ReactNode | -- |

## Menu.SubMenu

| 属性     | 说明            | 类型       | 默认值    |
| :------- | :-------------- | :--------- | :-------- |
| key      | item 的唯一标志 | string     | --        |
| title    | 子菜单项值      | string     | ReactNode | -- |
| children | 子菜单的菜单项  | MenuItem[] | --        |
