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
    Center
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
                        <VStack spacing={6} p={[10, 4]} pt={[4, 8]} pl={[10, 50]}>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👋🏼</Center>
                                    <Text>
                                         Hi, I'm <b>Bakr</b> a Software Engineer passionate about building scalable systems, whether it's backend development, infrastructure automation, or DevOps engineering in the cloud.

                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🎓</Center>
                                    <Text>
                                        I recently graduated from{' '}
                                        <b>Bahçeşehir University</b> with a degree in{' '}
                                        <b>Software Engineering</b>, ranking in the <b>top 5%</b> of my class and making the High Honor List.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>👨🏻‍💻</Center>
                                    <Text>
                                        I’ve completed DevOps internships at <b>PwC Middle East</b> and <b>EarTech</b>, where I worked with <b>Azure, Terraform, Kubernetes</b>, and automated cloud operations using <b>Python</b>.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🚀</Center>
                                    <Text>
                                        I'm skilled in <b>Azure, AWS, Python</b>, and <b>Terraform</b> is my go-to for Infrastructure as Code. I’ve built scalable backend systems using <b>Java</b> and <b>Python</b>, with CI/CD pipelines and containerized services.
                                    </Text>
                                </Flex>
                            </Fade>
                            <Fade bottom cascade duration={500}>
                                <Flex>
                                    <Center p={4}>🧠</Center>
                                    <Text>
                                        I'm also deeply interested in <b>AI and LLMs</b> especially how they can enhance developer workflows and infrastructure automation.
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
