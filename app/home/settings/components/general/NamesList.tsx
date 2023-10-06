import Image from 'next/image'
import { ActionIcon, List } from "@mantine/core"
import { IconTrash } from "@tabler/icons-react"
import trashIcon from '../../../../../public/trash.svg'
interface Props {
  list: string[]
  removeItem: (id: string) => void
}


const NamesList = ({ list, removeItem }: Props) => {


  return (
    <List style={{ width: '360px' }}>
      {list.map((item, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", marginTop: '8px' }}>

          {item}
          <ActionIcon variant="filled" color="red" size="md" radius="xs" aria-label="Trashcan" onClick={() => removeItem(String(i))}>
            <Image src={trashIcon} alt='' />
          </ActionIcon>


        </div>
      ))
      }
    </List >
  )
}


export default NamesList