import { FC } from 'react'
import {
    Container,
    Heading,
    Stack,
    Image,
    VStack,
    Text,
    useColorModeValue,
    Flex,
    Center,
    Link,
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import headshot from '../../media/bakr_pfp-modified.png'

const About: FC = () => {
    return (
        <Element name='aboutme'>
            <Container maxW={'5xl'} p={6.75} mt={[20, 10]}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>About me</Heading>
                    </Fade>
                    <Stack
                        position='relative'
                        alignItems='center'
                        direction={['column', 'row']}
                        textAlign={{ base: 'left', sm: 'justify', lg: 'left' }}
                    >
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            src={headshot}
                            border={`3px solid ${useColorModeValue('#1E2428', '#ECEFF4')}`}
                        />
                        <VStack spacing={4} p={[10, 4]} pl={[10, 50]}>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👋🏼</Center>
                                    <Text>
                                        Hi, I'm Bakr and I'm a fourth year
                                        student at{' '}
                                        <b>Bahcesehir University</b> with a
                                        passion for <b>Software Engineering</b>
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🎓</Center>
                                    <Text>
                                        I'm pursuing a Bachelor Degree in {' '}
                                        <b>
                                            Software Engineering
                                        </b>{' '}
                                        and <b>I'm a High-Honor Student</b>,
                                        graduating class of 2025.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👨🏻‍💻</Center>
                                    <Text>
                                        I am currently an <b>Aspiring Software and Cloud Engineer</b> and I have previously held a position as a{' '}
                                        <b>
                                            Cloud Engineering Intern at
                                            PwC
                                        </b>{' '}
                                        working in Cloud development.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🚀</Center>
                                    <Text>
                                        I'm experienced in DevOps - particularly with{' '}
                                        <b>Azure, Aws</b> and <b>Python</b>.{' '}
                                        <b>Terraform</b> is my Infrastructure as Code
                                        of choice and I've worked in backend
                                        with{' '}
                                        <b>Java,</b> and <b>Python</b>.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🧠</Center>
                                    <Text>
                                        In addition to Software Engineering, I
                                        am also interested in the confluence of
                                        artificial intelligence!, Espically LLMS and leverging AI to be more optimal.
                        
                                    </Text>
                                </Flex>
                            </Fade>
                        </VStack>
                    </Stack>
                </VStack>
            </Container>
        </Element>
    )
}

export default About
