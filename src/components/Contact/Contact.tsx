import { FC } from 'react'
import {
    Container,
    VStack,
    Heading,
    Link,
    Flex,
    Badge,
    Text,
    Spacer,
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import Card from '../generics/Card'

const Contact: FC = () => {
    return (
        <Element name='contact'>
            <Container maxW={'8xl'} p={6.75} mt={10}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Contact me</Heading>
                    </Fade>
                    <Card maxW={'85vw'} w={'xl'} pb={8} overflow={'hidden'}>
                        <Flex textAlign={'center'}>
                            <Container w='50%'>
                                <Link href='mailto:bakrfalakhras@gmail.com'>
                                    <Badge colorScheme='green'>Personal</Badge>
                                    <Text textDecoration={'underline'}>
                                    bakrfalakhras@gmail.com
                                    </Text>
                                </Link>
                            </Container>
                            <Spacer />
                            <Container w='50%'>
                                <Link href='mailto:baker.alakhras@bahcesehir.edu.tr'>
                                    <Badge colorScheme='orange'>Academic</Badge>
                                    <Text textDecoration={'underline'}>
                                    baker.alakhras@bahcesehir.edu.tr
                                    </Text>
                                </Link>
                            </Container>
                        </Flex>
                    </Card>
                </VStack>
            </Container>
        </Element>
    )
}

export default Contact
