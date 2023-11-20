import { Button } from '@chakra-ui/react'

const ButtonIcon = ({children, onclick, classname}) => {
    return(
        <Button onClick={ onclick } className={ classname }>
            { children }
        </Button>
    );
}
export default ButtonIcon;