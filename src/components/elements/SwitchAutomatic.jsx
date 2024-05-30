import { useContext, useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useNavigation, useSubmit } from 'react-router-dom'
import UserProgressContext from '@/store/UserProgresContext'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SwitchAutomatic = () => {
  const [enabled, setEnabled] = useState(false)
  const {activeFeed} = useContext(UserProgressContext)

  const navigaition = useNavigation()

  const submitting = navigaition.state === 'submitting'

  const submit = useSubmit()
  
  const handleSwitch = () => {
    const formData = new FormData()
    formData.append("automatic", !enabled)
    formData.append("id", activeFeed._id)
    formData.append("intent", "switchAutomatic")
    submit(formData, {method: 'PUT', action: '/home'})
  }

  useEffect(() => {
    setEnabled(activeFeed?.automatic || false)
  }, [activeFeed])

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        id='automatic-posting'
        disabled={submitting}
        checked={enabled}
        onChange={handleSwitch}
        className={classNames(
          enabled ? 'bg-zinc-50' : 'bg-zinc-700',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-zinc-950 shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-2 text-sm">
        <span className="font-medium text-zinc-50">Automatic Posting</span>{' '}
      </Switch.Label>
      
    </Switch.Group>
  )
}

export default SwitchAutomatic;