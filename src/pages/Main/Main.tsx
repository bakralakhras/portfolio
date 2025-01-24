import { useEffect, useState } from 'react';
import Intro from '../../components/Intro';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
import Nav from '../../components/Nav';
import Experience from '../../components/Experience';
import Certificates from '../../components/Certificate';
import Background from '../../components/Background';

const Main = () => {
    const [viewCount, setViewCount] = useState('Loading...');

    useEffect(() => {
        async function updateCounter() {
            try {
                const response = await fetch("https://osf7u5wfymuwfq73vrxi2pqzyq0tqmzh.lambda-url.us-east-1.on.aws/");
                const data = await response.json();
                setViewCount(`Views: ${data.views}`);
            } catch (error) {
                console.error("Error fetching view count:", error);
                setViewCount('Error fetching views');
            }
        }
        updateCounter();
    }, []);

    return (
        <>
            <Nav />
            <Intro />
            <About />
            <Skills />
            <Experience />
            <Certificates />
            <Projects />
            <Contact />
            <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.5rem' }}>{viewCount}</p>
            <Background />
        </>
    );
};

export default Main;
