import styled from 'styled-components'



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ),
     url('data:image/jpeg;base64,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');
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content:center ;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #2f9494;
    color:white;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder='name'/>
                <Input placeholder='last name'/>
                <Input placeholder='username'/>
                <Input placeholder='email'/>
                <Input placeholder='password'/>
                <Input placeholder='confirm password'/>
                <Agreement>
                    By creating an account , I consent to the processing of my personal
                    data in accordance with th  <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
