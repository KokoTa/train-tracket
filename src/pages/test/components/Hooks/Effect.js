import React, { useState, useEffect, createContext, useContext, useMemo, memo, useCallback, useRef } from 'react'
/*
 * @Author: KokoTa
 * @Date: 2020-04-30 15:06:54
 * @LastEditTime: 2020-05-08 11:49:30
 * @Description: Hooks 示例
 * Hooks 常见问题
 * 1. 声明周期如何映射到 Hooks：useEffect 的不同使用映射了 mount update unmount 的生命周期，函数声明本身就可以当作在 getDerivedProps 中，snap 和 error 还无法映射
 * 2. 类实例成员如何映射到 Hooks：useRef
 * 3. Hooks 中如何获取历史 props 和 state：声明一个 useState，然后声明一个 useEffect 去同步数据
 * 4. 如何强制更新 Hooks 组件：声明一个 useState，然后声明一个函数改变这个 state
 */
import propTypes from 'prop-types'
const TitleContext = createContext()

function Title () {
  const context = useContext(TitleContext)
  return (
    <h3>{context.title}</h3>
  )
}

const SubTitle = memo(function SubTitle (props) {
  console.log('subTitle')
  return (
    <h3 onClick={props.onClick}>{props.name}</h3>
  )
})

SubTitle.propTypes = {
  name: propTypes.string,
  onClick: propTypes.func
}

// 自定义 Hook
function useSize () {
  const [size, setSize] = useState({
    with: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const onResize = useCallback(() => {
    setSize({
      with: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  })

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return [size, setSize]
}

export default function Effect () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('name')
  const ref = useRef() // ref 无法作用在函数组件中

  // 当 count 变化时触发，mount + update
  useEffect(() => {
    console.log(1)
    document.title = count
  }, [count])

  // 只有刚初始化的时候会触发，mount + update + unmount
  useEffect(() => {
    console.log(2)
    return () => console.log(3)
  }, [])

  // 只要有值变动就会触发, mount + update
  useEffect(() => {
    console.log(4)
  })

  // useMemo 有点像 vue 的 computed
  const double = useMemo(() => count * 2, [count])
  // 改变 count 或其他值，会导致 Effect 函数重新执行，此时 subTitleClick 也会重新被赋值，导致传入 SubTitle 的函数不同，导致重复渲染 SubTitle 组件
  // 这里使用 useMemo 让函数唯一初始化
  // 如果返回的是函数，则 useCallback 是 useMemo 的简化
  // 除了使用 useCallback 和 useMemo，还需要配合 memo 包装函数组件才能解决重复渲染的问题
  // react 可以保证 setState 函数的唯一性，并且 setState 函数传递的参数是实时值，因此可以不用在 [] 中添加依赖
  // const subTitleClick = () => console.log('subTitle click') // bad
  // const subTitleClick = useMemo(() => () => console.log('subTitle click'), []) // bad
  const subTitleClick = useCallback(() => { // good
    console.log('subTitle click')
    console.log(ref)
  }, [])

  // 定时器问题：count 变化导致视图变化，导致 timer 重新被初始化和赋值，导致死循环
  // 可以用 useRef 来存放定时器
  // 由于函数不像类那样有实例属性，所以需要用 useRef 替代
  // let timer = null
  // useEffect(() => {
  //   timer = setInterval(() => setCount((count) => count + 1), 1000)
  // })
  // useEffect(() => {
  //   setTimeout(() => clearInterval(timer), 5000)
  // })

  const [size] = useSize()

  console.log('Effect refresh')

  return (
    <>
      {/* 测试 useEffect */}
      <h2>1. Effect</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>计数+1</button>
      <h3>{name}</h3>
      <button onClick={() => setName(name + 'A')}>名字+A</button>

      {/* 测试 useMemo */}
      <h2>2. useMemo/useCallback</h2>
      <h3 ref={ref}>{double}</h3>
      <SubTitle name={name} onClick={subTitleClick}></SubTitle>

      {/* 测试 useContext */}
      <h2>3. useContext</h2>
      <TitleContext.Provider value={{ title: 'title' }}>
        <Title></Title>
      </TitleContext.Provider>

      {/* 自定义 Hook */}
      <h2>4. 自定义Hook</h2>
      <h3>{size.with} x {size.height}</h3>
    </>
  )
}
