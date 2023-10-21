import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

function Hero() {
    function handleClick(){
        alert("you wan't to cantact me")
    }
    return(
        <Section row nopadding>
          <LeftSection>
            <SectionTitle main center>
                Asahel Laija
            </SectionTitle>
            <SectionText>
                Software engineer with experience in React js, Vue js, and Laravel frameworks, and freelancer programmer looking for a place where I can make the difference helping other people
            </SectionText>
            <Button onClick={handleClick}>Contact me</Button>
          </LeftSection>
        </Section>
    )
}
export default Hero;
