import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../component/InputForm/InputForm'
import ButtonComponent from '../../component/ButtonComponent/ButtonComponent'
import logo from '../../assets/images/logologin.png'
import { Image } from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import * as UserService from '../../services/UserService'
import { useMutationHook } from '../../hooks/useMutationHook'
import Loading from '../../component/LoadingComponent/Loading'
import * as message from '../../component/Message/Message'


const SignUpPage = () => {
  const navigate = useNavigate()
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const mutation = useMutationHook(
    data => UserService.signupUser(data)
  )

  const { data,isLoading, isSuccess, isError } = mutation

  useEffect(() => {
    if(isSuccess) {
      message.success()
      handelNavigateSignIn()
    }else if(isError) {
      message.error()
    }
  }, [isSuccess, isError])

  const handleOnChangeEmail = (value) => {
    setEmail(value)
  }

  const handleOnChangePassword = (value) => {
    setPassword(value)
  }

  const handleOnChangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }

  const handelNavigateSignIn = () => {
    navigate('/sign-in')
  }

  const handleSigup = () => {
    mutation.mutate({ email, password, confirmPassword })
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height: '100vh' }}>
      <div style={{ width: '800px, height: 445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chao</h1>
          <p>Đăng nhập hoặc Tạo tài khoản</p>

          <InputForm style={{ marginBottom: '10px' }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleOnChangeEmail}
          />


          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
                isShowPassword ? (
                  < EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>

            <InputForm style={{ marginBottom: '10px' }}
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnChangePassword}
            />
          </div>



          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
                isShowConfirmPassword ? (
                  < EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm placeholder="confirm password"
              type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleOnChangeConfirmPassword}
            />
          </div>
          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message} </span>}


          <Loading isLoading={isLoading}>
            <ButtonComponent
              disabled={email === '' || password === '' || confirmPassword === '' || password !== confirmPassword}
              onClick={handleSigup}
              size={20}
              styleButton={{
                background: 'rgb(255, 57, 69)',
                height: '48px',
                width: '100%',
                border: 'none',
                borderRadius: '4px',
                margin: '26px 0 10px',
              }}
              textButton={'Đăng ký'}
              styleTextButton={{ color: '#fff', fontSize: '16px', fontWeight: 500 }}
            ></ButtonComponent>
          </Loading>


          <p>Đã có tài khoản? <WrapperTextLight onClick={handelNavigateSignIn}>Đăng nhập</WrapperTextLight></p>

        </WrapperContainerLeft>

        <WrapperContainerRight>
          <Image src={logo} preview={false} alt="image-logo" height="203px" width="203px" />
          <h4>Mua sắm tại TechShop</h4>
          <span>muamuamuamuamuamua</span>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage