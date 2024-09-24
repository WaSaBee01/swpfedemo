import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import Inputcomponent from '../InputComponent/Inputcomponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInput = (props) => {
  const { size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = '#fff',
    backgroundColorButton = '#dc3545',
    colorButton = '#fff'
  } = props
  return (
    <div style={{ display: 'flex' }}>
      <Inputcomponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput }}
      />
      <ButtonComponent
        size={size}
        styleButton={{ backgroundColor: backgroundColorButton, border: !bordered && 'none' }}
        icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
        textButton={textButton}
        styleTextButton ={ { color: colorButton } }
      /> 
    </div>
  )
}

export default ButtonInput