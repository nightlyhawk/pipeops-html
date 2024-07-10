import React from 'react'
import { Heading, TableWrapper } from './style'
import Table from '../../table'
import { total_tasks } from '../../../data/schedule-data'

const StatusTable = () => {
  return (
    <>
      <TableWrapper className='statustables'>
      <Heading>All tasks</Heading>
        <Table 
            data={total_tasks}
            stat={true}
        />
      </TableWrapper>
    </>
  )
}

export default StatusTable