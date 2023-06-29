import styled from "styled-components"

const Container = styled.div`
    height: 40px;
    background-color: teal;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;

`

const Announcement = () => {
  return (
    <Container>
        Get upto 50% discount in new items. Hurry Up!!
    </Container>
  )
}

export default Announcement
