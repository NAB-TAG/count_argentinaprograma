import { Heading, VStack } from '@chakra-ui/react'
import { MinusIcon, AddIcon, CloseIcon } from '@chakra-ui/icons'

import { useState } from 'react';
import ButtonIcon from './Buttons/ButtonIcon';

const ContadorResponsive = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    }
    return(
        <VStack align="center" className='count' spacing={{ base: 4000, md: 3000 }}>
            <Heading size="lg">Contador</Heading>
            <div className='count__buttons'>
                <ButtonIcon onclick={ decrement } classname="count__buttons--btn">
                    <MinusIcon/>
                </ButtonIcon>

                <Heading size="xl" className='count__buttons--counter'>{count}</Heading>

                <ButtonIcon onclick={ increment } classname="count__buttons--btn">
                    <AddIcon/>
                </ButtonIcon>
            </div>

            <ButtonIcon onclick={ reset } classname="count__buttons--btn-reset">
                <CloseIcon />
            </ButtonIcon>
        </VStack>
    );
}

export default ContadorResponsive;