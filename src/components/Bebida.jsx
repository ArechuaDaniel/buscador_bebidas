import { Col, Card, Button} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const Bebida = ({bebida}) => {
    const {handelModalClick, handleBebidaIdClick} = useBebidas()
    
  return (
    <Col md={6} lg={3}>
        <Card className='mb-4'>
            <Card.Img 
                variant= 'top'
                src={bebida.strDrinkThumb}
                alt='Imagen de ${bebida.srtDrink}'
            />
            <Card.Body>
                <Card.Title>{bebida.strDrink}</Card.Title>
                <Button 
                    variant={'warning'}
                    className='w-100 text-uppercase mt-2'
                    onClick={() => {
                        handelModalClick()
                        handleBebidaIdClick(bebida.idDrink)
                    }}
                >
                    Ver Receta
                </Button>
            </Card.Body>
        </Card>

    </Col>
  )
}

export default Bebida