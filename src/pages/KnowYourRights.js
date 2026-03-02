import { Grid } from '@mui/material';
import { Article } from '../components/Article';

export const KnowYourRights = ({}) =>{

    const library = [
        {title: 'Recording and Documenting Police and Federal Agents', text: 'This is some context.', link: 'https://www.aclu.org/know-your-rights/recording-and-documenting-police-and-federal-agents'},
        {title: 'Immigrants\' Rights', text: 'This is some context.', link: 'https://www.aclu.org/know-your-rights/immigrants-rights'},
        {title: 'Protesters\' Rights', text: 'This is some context.', link: 'https://www.aclu.org/know-your-rights/protesters-rights'},
        {title: 'Stopped by Police', text: 'This is some context.', link: 'https://www.aclu.org/know-your-rights/stopped-by-police'},
        {title: 'Encountering Law Enforcement and Military Troops', text: 'This is some context.', link: 'https://www.aclu.org/know-your-rights/encountering-law-enforcement-and-military-troops'},
        {title: 'Enforcement at the Airport', text: 'This is some context.', link: 'https://www.aclu.org/know-your-rights/what-do-when-encountering-law-enforcement-airports-and-other-ports-entry-us'},
        {title: '100 Mile Border Zone', text: 'This is some context.', link: 'https://www.aclu.org/know-your-rights/border-zone'},
        {title: 'Federal Agents at the Polls', text: 'This is some context.', link: 'https://www.aclu.org/know-your-rights/federal-agents-at-the-polls'},
        {title: 'Dreamers (DACA)', text: 'This is some context.', link: 'https://www.aclu.org/know-your-rights/know-your-rights-about-daca'},
    ]
    
  return (
    <div>
        <h1>Know Your Rights</h1>
        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <Grid container spacing={2}>
                {library.map(article => (
                    <Grid size={{lg: 4, md: 6, sm: 12, xs: 12}}><Article article={article}/></Grid>
                ))}
            </Grid>
        </div>
    </div>
  );
}