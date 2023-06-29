import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ME from '../assets/pay.jpg'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0px;

`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;

`
const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`
const ListItem = styled.li`
    width:50% ;
    margin-bottom: 10px;

`
const Right = styled.div`
    flex: 1;
    padding: 20px;

`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 55%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ASRA'S</Logo>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Sapiente maiores ipsa repellendus laboriosam dolor beatae ratione at voluptas.
            </Desc>
            <SocialContainer>
                <SocialIcon color='#3B5999'>
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color='#E4405f'>
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color='#55ACEE'>
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <PlaceIcon style={{marginRight:'10px'}}/>
                Gujudhara, Kathmandu
            </ContactItem>
            <ContactItem>
                <CallIcon style={{marginRight:'10px'}}/>
                +1 0734784
            </ContactItem>
            <ContactItem>
                <EmailIcon style={{marginRight:'10px'}}/>
                asras@gmail.com
            </ContactItem>
            <Payment src={ME}/>
        </Right>

    </Container>
  )
}

export default Footer
