import * as S from './styles'
import Rating from 'react-rating'
import TagGroup from '../TagGroup'

interface AnswersRaterProps {
  name: string
  setValue?: any
  error?: Error
}

type Error = {
  type: string
  message: string
}

const AnswerRate: React.FC<AnswersRaterProps> = ({
  setValue,
  error,
  ...rest
}) => {
  return (
    <S.Wrapper>
      <Rating
        stop={4}
        step={1}
        {...rest}
        emptySymbol={[
          <TagGroup key={1} tag="+3" color="gray" colorTag="gray" />,
          <TagGroup key={2} tag="+10" color="gray" colorTag="gray" />,
          <TagGroup key={3} tag="+20" color="gray" colorTag="gray" />,
          <TagGroup key={4} tag="+50" color="gray" colorTag="gray" />
        ]}
        fullSymbol={[
          <TagGroup key={1} tag="+3" color="black" colorTag="green" />,
          <TagGroup key={2} tag="+10" color="black" colorTag="blue" />,
          <TagGroup key={3} tag="+20" color="black" colorTag="orange" />,
          <TagGroup key={4} tag="+50" color="black" colorTag="red" />
        ]}
      />
    </S.Wrapper>
  )
}

export default AnswerRate
