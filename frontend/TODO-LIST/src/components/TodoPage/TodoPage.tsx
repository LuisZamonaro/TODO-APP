import * as S from './styles'
import darkBackgHeader from '../../images/bg-desktop-dark.jpg'
import lightBackgHeader from '../../images/bg-desktop-light.jpg'
import darkBackgHeaderM from '../../images/bg-mobile-dark.jpg'
import lightBackgHeaderM from '../../images/bg-mobile-light.jpg'
import TodoList from '../TodoList/TodoList'
import { useMode } from '../../context/ModeStyleContext'
import { GlobalStyles } from '../../styles/GlobalStyles'

const TodoPage = () => {
    const {mode} = useMode()


  return (
    <S.Container>
        <GlobalStyles mode={mode}/>
        <S.Header
        mode={mode}>
            <img className='backgDarkD' src={darkBackgHeader} />
            <img className='backgLightD' src={lightBackgHeader} />
            <img className='backgDarkM' src={darkBackgHeaderM} />
            <img className='backgLightM' src={lightBackgHeaderM} />
        </S.Header>
        <S.Body>
            <TodoList/>
        </S.Body>
    </S.Container>
  )
}

export default TodoPage