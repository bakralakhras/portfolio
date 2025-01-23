import { Container, Heading, VStack } from '@chakra-ui/react'
import Fade from 'react-reveal/Fade'
import { Element } from 'react-scroll'
import CertifcateCard from './CerticateCard'
import { certificateData } from '../../data/certificateData'

const Experience = () => {
    return (
        <Element name='certificates'>
            <Container maxW={'5xl'} p={6.75} mt={[20, 10]}>
                <VStack spacing={8} px={[4, 24]}>
                    <Fade>
                        <Heading as='h2'>Certifcates</Heading>
                    </Fade>
                    {certificateData.map((experience, i) => {
                        return (
                            <Fade bottom cascade duration={500} key={i}>
                                <CertifcateCard
                                    title={experience.title}
                                    company={experience.company}
                                    location={experience.location}
                                    dates={experience.dates}
                                    description={experience.description}
                                    logoSrc={experience.logoSrc}
                                />
                               
                            </Fade>
                          
                            
                        )
                    })}
                </VStack>
            </Container>
        </Element>
    )
}

export default Experience
