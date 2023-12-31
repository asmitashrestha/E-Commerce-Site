import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type === 'filled' && 'none'};
  background-color: ${props=>props.type === 'filled' ? 'black' :'transparent'};
  color: ${props=>props.type === 'filled' && 'white'};
`
const TopTexts= styled.div`

`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`


const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span`
  flex: 3;
`
const ProductId= styled.span`
  flex: 3;
`
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};

`
const ProductSize = styled.span`
 
`
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
  font-size:24px;
  margin: 5px;
`
const ProductPrice= styled.div`
  font-size:30px ;
  font-weight: 200;
`
const Hr= styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`


const Summary = styled.div`
  flex:1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`
const SummaryTitle = styled.div`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type==='total' && '500'};
  font-size: ${props=>props.type==='total' && '24px'};
`
const SummaryItemText = styled.div`
  flex: 1;
`
const SummaryItemPrice = styled.div`
  flex: 1;
`
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`


const Cart = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
          <Title>Your Choice</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type ='filled'>CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4KTp6C_d5BEwgbbXifvqSn5rKKaaLx2zIw&usqp=CAU'/>
                  <Details>
                    <ProductName><b>Product: </b>  Kurtha's</ProductName>
                    <ProductId><b>Product ID: </b>  5367</ProductId>
                    <ProductColor color='blue'/>
                    <ProductSize><b>Product ID: </b>  5367</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetails>
                  <ProductAmountContainer>
                    <AddIcon/>
                    <ProductAmount>2</ProductAmount>
                    <RemoveIcon/>
                  </ProductAmountContainer>
                  <ProductPrice>$ 27</ProductPrice>
                </PriceDetails>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                 <Image src = 'data:image/jpeg;base64,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'/> 
                  <Details>
                    <ProductName><b>Product: </b>  Shoes</ProductName>
                    <ProductId><b>Product ID: </b>  5367</ProductId>
                    <ProductColor color='blue'/>
                    <ProductSize><b>Product ID: </b>  5367</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetails>
                  <ProductAmountContainer>
                    <AddIcon/>
                    <ProductAmount>2</ProductAmount>
                    <RemoveIcon/>
                  </ProductAmountContainer>
                  <ProductPrice>$ 27</ProductPrice>
                </PriceDetails>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 79</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 7</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ 3</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type='total'>
                <SummaryItemText >Total</SummaryItemText>
                <SummaryItemPrice>$ 79</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
