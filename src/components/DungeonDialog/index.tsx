import clsx from 'clsx'

import './styles.css'

interface IProps {
  title?: string
  message?: string
  color?: 'blue' | 'red' | 'green'
}

export const DungeonDialog = ({ title, message, color = 'blue' }: IProps) => {
  const gradientBlue = [`from-cyan-200`, `to-cyan-600`]
  const gradientRed = [`from-orange-400`, `to-orange-600`]
  const gradientGreen = [`from-teal-200`, `to-teal-600`]

  const gradient = ['bg-gradient-to-b']
  if (color === 'blue') gradient.push(...gradientBlue)
  if (color === 'red') gradient.push(...gradientRed)
  if (color === 'green') gradient.push(...gradientGreen)

  return (
    <div className={clsx('hud-font', 'dialog-wrapper', ...gradient)}>
      <div className="dialog-container w-72">
        {title ? <div className="dialog-title">{title}</div> : null}

        {message ? (
          <div className="dialog-content">
            <div className="dialog-text text-center">{message}</div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
