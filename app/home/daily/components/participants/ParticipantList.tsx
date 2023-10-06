"use client"
import { Flex, Title, List } from "@mantine/core"
import Participant from "./Participant"
import ParticipantEntity from "./schema/participant.entity"
import { useEffect, useState } from "react"
import styles from './participants.module.css'

interface Props {
}

const ParticipantList = ({ }: Props) => {

  const [participants, setParticipants] = useState<ParticipantEntity[]>([])

  const toggleParticipation = (id: string) => {
    setParticipants((prev) => prev.map((p) => p.id === id ? p.toggleParticipation() : p))
  }

  useEffect(() => {
    const key = localStorage.getItem("participants")
    if (!key) {
      return
    }
    const value = JSON.parse(key)
    if (Array.isArray(value)) {
      const participants = value.map((name, i) => new ParticipantEntity({ name, id: String(i), hasParticipated: false }))
      setParticipants(participants)
    }

  }, [])

  return (
    <>
      <Flex
        mih={50}
        gap="sm"
        direction="column"
        wrap="wrap"
        style={{ width: '75%', margin: 'auto' }}
      >
        <Title order={1}>Participants</Title>



        <Title className={styles.alignLeft} order={3}>Pending</Title>

        <List className={styles.list} >

          {participants.filter((p) => !p.hasParticipated).map((p) => {
            return (<Participant key={p.id} participant={p} toggleParticipation={toggleParticipation} />)
          })}
        </List>

        <Title order={3}>Already participated</Title>
        <List className={styles.list} >
          {participants.filter((p) => p.hasParticipated).map((p) => {

            return (<Participant key={p.id} participant={p} toggleParticipation={toggleParticipation} />)
          })}
        </List>
      </Flex>
    </>
  )
}


export default ParticipantList
