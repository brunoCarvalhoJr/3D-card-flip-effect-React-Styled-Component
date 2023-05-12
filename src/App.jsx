import styled from "styled-components";
import { motion } from "framer-motion";
import { Container } from "./App.style";

const Box = styled(motion.div).attrs({
    animate: { rotate: 360 },
    transition: { duration: 2 }
  })`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15rem;
    width: 15rem;
    color: black;
    margin-bottom: 1rem;
    background-color: #fff;
    border-radius: 30px;
    cursor: pointer;
`;

function App() {
  return (
    <Container>
      <Align>
        <Box
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }}
        >
          <h3>
            Esqueça o mouse aqui em cima, 
            depois clique e segure
          </h3>
        </Box>
      </Align>
    </Container>
  )
}

export default App




const Align = styled.div`
    padding-top: 20rem;
    padding-left: 45%;
    text-align: center;
`;
