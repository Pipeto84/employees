import { Date } from '../interfaces'

interface Props {
  date: Date
}

export const ContainerCards = ({date}: Props) => {
  return(
    <div className='layout-cards'>
      <p>{date}</p>
    </div>
  )
}