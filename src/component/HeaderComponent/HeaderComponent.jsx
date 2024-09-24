import React from 'react'
import { Col } from 'antd'
import { WraperHeader, WraperTextHeader, WraperHeaderAccount, WraperTextHeaderSmall } from './style'
import  ButtonInput  from '../Button/ButtonInput'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';

const HeaderComponent = () => {
    return (
        <div>
            <WraperHeader gutter={20}>
                <Col span={6}>
                    <WraperTextHeader> TechShop </WraperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInput 
                    size="large"
                    bordered={false}
                    textButton="Tìm kiếm"
                    placeholder="input search text" style={{ width: 200 }} 
                    
                    />
                </Col>
                <Col span={6} style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <WraperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        <div>
                            <WraperTextHeaderSmall>Đăng nhập/Đăng kí</WraperTextHeaderSmall>
                            <div>
                                <WraperTextHeaderSmall>Tài Khoản</WraperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>

                        </div>
                    </WraperHeaderAccount>
                    
                        <div>
                            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                            <WraperTextHeaderSmall>Giỏ hàng</WraperTextHeaderSmall>
                        </div>

                    
                </Col>
            </WraperHeader>
        </div>
    )
}

export default HeaderComponent