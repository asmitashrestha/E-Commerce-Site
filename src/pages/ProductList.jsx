import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div``

const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`
const Option = styled.option`
  
`


const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <option>White</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Black</option>
            <option>Green</option>
            <option>Purple</option>
            <option>Red</option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXl</option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList
