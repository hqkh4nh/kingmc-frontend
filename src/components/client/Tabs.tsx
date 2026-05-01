'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from 'react'

interface TabsProps {
  defaultValue: string
  value?: string
  onChange?: (value: string) => void
  children: ReactNode
  className?: string
}

interface TabsListProps {
  children: ReactNode
  className?: string
  'aria-label'?: string
}

interface TabsTriggerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  value: string
}

interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string
}

interface TabsContextValue {
  baseId: string
  selectedValue: string
  selectValue: (value: string) => void
  registerTrigger: (value: string, trigger: HTMLButtonElement | null, disabled?: boolean) => void
  focusTrigger: (value: string) => void
  getEnabledTriggerValues: () => string[]
}

interface TriggerRegistration {
  trigger: HTMLButtonElement
  disabled: boolean
}

type TabsComponent = ((props: TabsProps) => ReactNode) & {
  List: (props: TabsListProps) => ReactNode
  Trigger: (props: TabsTriggerProps) => ReactNode
  Content: (props: TabsContentProps) => ReactNode
}

const TabsContext = createContext<TabsContextValue | null>(null)

const triggerBase =
  'inline-flex items-center justify-center gap-2 rounded-pill px-5 py-2.5 ' +
  'text-[14px] font-medium tracking-tight transition-all duration-300 ease-out ' +
  'active:scale-[0.97] ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-bright/55 focus-visible:ring-offset-2 focus-visible:ring-offset-ink'

// Active pill: lifted paper card on dark segmented track
const triggerActive =
  'bg-paper text-ink shadow-[0_1px_0_rgba(255,255,255,0.5)_inset,0_4px_12px_-4px_rgba(0,0,0,0.5),0_2px_4px_-1px_rgba(0,0,0,0.3)]'

const triggerInactive = 'text-on-surface-muted hover:text-paper'

function useTabsContext(component: string) {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error(`${component} must be used within <Tabs>`)
  }

  return context
}

function getTriggerId(baseId: string, value: string) {
  return `${baseId}-trigger-${encodeURIComponent(value)}`
}

function getPanelId(baseId: string, value: string) {
  return `${baseId}-panel-${encodeURIComponent(value)}`
}

function TabsRoot({ defaultValue, value, onChange, children, className = '' }: TabsProps) {
  const baseId = useId()
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const triggersRef = useRef(new Map<string, TriggerRegistration>())
  const isControlled = value !== undefined
  const selectedValue = isControlled ? value : uncontrolledValue

  const selectValue = useCallback(
    (nextValue: string) => {
      if (!isControlled) {
        setUncontrolledValue(nextValue)
      }

      onChange?.(nextValue)
    },
    [isControlled, onChange],
  )

  const registerTrigger = useCallback(
    (triggerValue: string, trigger: HTMLButtonElement | null, disabled = false) => {
      if (trigger) {
        triggersRef.current.set(triggerValue, { trigger, disabled })
        return
      }

      triggersRef.current.delete(triggerValue)
    },
    [],
  )

  const focusTrigger = useCallback((triggerValue: string) => {
    const registration = triggersRef.current.get(triggerValue)

    if (!registration?.disabled) {
      registration?.trigger.focus()
    }
  }, [])

  const getEnabledTriggerValues = useCallback(
    () =>
      Array.from(triggersRef.current.entries()).flatMap(([triggerValue, registration]) =>
        registration.disabled ? [] : [triggerValue],
      ),
    [],
  )

  const contextValue = useMemo(
    () => ({
      baseId,
      selectedValue,
      selectValue,
      registerTrigger,
      focusTrigger,
      getEnabledTriggerValues,
    }),
    [baseId, selectedValue, selectValue, registerTrigger, focusTrigger, getEnabledTriggerValues],
  )

  return (
    <TabsContext value={contextValue}>
      <div className={className}>{children}</div>
    </TabsContext>
  )
}

function TabsList({ children, className = '', 'aria-label': ariaLabel }: TabsListProps) {
  useTabsContext('Tabs.List')

  return (
    <div role="tablist" aria-label={ariaLabel} className={className}>
      {children}
    </div>
  )
}

function TabsTrigger({
  value,
  className = '',
  children,
  onClick,
  onKeyDown,
  disabled = false,
  type,
  ...rest
}: TabsTriggerProps) {
  const {
    baseId,
    selectedValue,
    selectValue,
    registerTrigger,
    focusTrigger,
    getEnabledTriggerValues,
  } = useTabsContext('Tabs.Trigger')
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const selected = selectedValue === value

  useEffect(() => {
    const trigger = triggerRef.current
    registerTrigger(value, trigger, disabled)

    return () => registerTrigger(value, null)
  }, [disabled, registerTrigger, value])

  const selectAndFocus = useCallback(
    (nextValue: string) => {
      selectValue(nextValue)
      focusTrigger(nextValue)
    },
    [focusTrigger, selectValue],
  )

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event)

      if (!event.defaultPrevented) {
        selectValue(value)
      }
    },
    [onClick, selectValue, value],
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(event)

      if (event.defaultPrevented) {
        return
      }

      const triggerValues = getEnabledTriggerValues()
      const currentIndex = triggerValues.indexOf(value)
      const lastIndex = triggerValues.length - 1
      let nextValue: string | undefined

      switch (event.key) {
        case 'ArrowRight':
          nextValue = triggerValues[currentIndex === lastIndex ? 0 : currentIndex + 1]
          break
        case 'ArrowLeft':
          nextValue = triggerValues[currentIndex <= 0 ? lastIndex : currentIndex - 1]
          break
        case 'Home':
          nextValue = triggerValues[0]
          break
        case 'End':
          nextValue = triggerValues[lastIndex]
          break
        default:
          return
      }

      event.preventDefault()

      if (nextValue) {
        selectAndFocus(nextValue)
      }
    },
    [getEnabledTriggerValues, onKeyDown, selectAndFocus, value],
  )

  return (
    <button
      ref={triggerRef}
      {...rest}
      disabled={disabled}
      type={type ?? 'button'}
      role="tab"
      id={getTriggerId(baseId, value)}
      aria-selected={selected}
      aria-controls={getPanelId(baseId, value)}
      tabIndex={selected ? 0 : -1}
      className={`${triggerBase} ${selected ? triggerActive : triggerInactive} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </button>
  )
}

function TabsContent({ value, className = '', children, ...rest }: TabsContentProps) {
  const { baseId, selectedValue } = useTabsContext('Tabs.Content')

  if (selectedValue !== value) {
    return null
  }

  return (
    <div
      {...rest}
      role="tabpanel"
      id={getPanelId(baseId, value)}
      aria-labelledby={getTriggerId(baseId, value)}
      className={className}
    >
      {children}
    </div>
  )
}

const Tabs = TabsRoot as TabsComponent

Tabs.List = TabsList
Tabs.Trigger = TabsTrigger
Tabs.Content = TabsContent

export default Tabs
