import { 
    CardFlip, Content, Front, Back, 
    Heading, Paragraph 
} from "./Card.style";

function Card() {
  return (
    <CardFlip>
        <Content>
        <Front>
            <Heading>Frente</Heading>
            <Paragraph>
                Descrição do card aqui 
                para você ter um exemplo
            </Paragraph>
        </Front>
        <Back>
            <Heading>Trás</Heading>
            <Paragraph>
                Descrição do card aqui 
                para você ter um exemplo
            </Paragraph>
        </Back>
        </Content>
    </CardFlip>
  )
}

export default Card