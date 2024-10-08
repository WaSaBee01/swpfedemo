import styled from 'styled-components'
import  ButtonComponent  from '../../component/ButtonComponent/ButtonComponent'

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
`

export const WrapperButton = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background-color: red;
        span{
            color: #fff;
        }
    }
    width: 100%;
    text-align: center;
`

export const WrapperProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    margin-top: 20px;
`