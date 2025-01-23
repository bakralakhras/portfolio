import { FC } from 'react'
import {
    Container,
    VStack,
    Stack,
    Heading,
    StackDivider,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    SiFlask,
    SiHtml5,
    SiPython,
    SiReact,
    SiBootstrap,
    SiMysql,
    SiMongodb,
    SiVisualstudiocode,
    SiGit,
    SiLatex,
    SiDocker,
    SiGo,
    SiPostgresql,
    SiAmazonaws,
    SiTailwindcss,
    SiPostman,
    SiTerraform,
    SiFlutter,
    SiKubernetes,
    SiGithubactions,
    SiMicrosoftazure,
} from 'react-icons/si'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import SkillSection from './SkillSection'
import SkillItem from './SkillItem'
import Card from '../generics/Card'
import { FaJava } from 'react-icons/fa';  // FontAwesome Java Icon



const Skills: FC = () => {
    return (
        <Element name='skills'>
            <Container maxW={'5xl'} p={6.5} mt={20}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Skills</Heading>
                    </Fade>
                    <Stack direction={'row'}>
                        <Card>
                            <Stack
                                direction={['column', 'row']}
                                divider={
                                    <StackDivider
                                        borderColor={useColorModeValue(
                                            'gray.300',
                                            'gray.600'
                                        )}
                                    />
                                }
                                spacing={8}
                                align={'flex-start'}
                            >
                                <SkillSection title={'Languages'}>
                                    <SkillItem icon={SiPython} name='Python' />
                                    <SkillItem icon={FaJava} name='Java' />
                                    <SkillItem icon={SiFlutter} name='Flutter' />
                                    <SkillItem icon={SiHtml5} name='HTML/CSS' />
                                    <SkillItem icon={SiGo} name='Golang' />
                                    <SkillItem icon={SiTerraform} name='Terraform' />
                                    
                                </SkillSection>
                                <SkillSection title={'Frameworks'}>
                           
                                    <SkillItem icon={SiReact} name='ReactJS' />
                                
                                    <SkillItem icon={SiFlask} name='Flask' />
                                
                
                                    <SkillItem
                                        icon={SiBootstrap}
                                        name='Bootstrap'
                                    />
                                    <SkillItem
                                        icon={SiTailwindcss}
                                        name='Tailwind CSS'
                                    />
                                </SkillSection>
                            </Stack>
                        </Card>
                        <Card>
                            <Stack
                                direction={['column', 'row']}
                                divider={
                                    <StackDivider
                                        borderColor={useColorModeValue(
                                            'gray.300',
                                            'gray.600'
                                        )}
                                    />
                                }
                                spacing={8}
                                align={'flex-start'}
                            >
                                <SkillSection title={'Databases'}>
                                    <SkillItem icon={SiMysql} name='MySQL' />
                                    <SkillItem
                                        icon={SiPostgresql}
                                        name='PostgreSQL'
                                    />
                                    <SkillItem
                                        icon={SiMongodb}
                                        name='MongoDB'
                                    />
            
                                </SkillSection>
                                <SkillSection title={'Other tools'}>
                                <SkillItem icon={SiAmazonaws} name='AWS' />
                                <SkillItem icon={SiMicrosoftazure} name='Azure' />
                                <SkillItem icon={SiDocker} name='Docker' />
                                <SkillItem icon={SiKubernetes} name='Kubernetes' />
                                <SkillItem icon={SiGithubactions} name='Git Actions' />
                                    <SkillItem icon={SiGit} name='Git' />
                                    <SkillItem icon={SiLatex} name='LaTeX' />
                                  
                                    
                                   
                                    <SkillItem
                                        icon={SiVisualstudiocode}
                                        name='VS Code'
                                    />
                                  
                                    <SkillItem
                                        icon={SiPostman}
                                        name='Postman'
                                    />
                                </SkillSection>
                            </Stack>
                        </Card>
                    </Stack>
                </VStack>
            </Container>
        </Element>
    )
}

export default Skills
