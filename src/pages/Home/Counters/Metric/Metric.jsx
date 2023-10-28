import { Stat, StatLabel, StatNumber } from '@chakra-ui/react'

const Metric = ({ label, value }) => (
  <Stat
    padding='5px'
    margin='25px'
    border='2px solid #112B5C'
    borderRadius='25px'
    backgroundColor='rgba(255, 255, 255, .6)'
  >
    <StatNumber>{value}</StatNumber>
    <StatLabel fontSize='18px'>{label}</StatLabel>
  </Stat>
)

export default Metric
