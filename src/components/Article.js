import './Article.css';
import { Button, Card, CardContent, CardActions, Chip } from "@mui/material";

export const Article = ({article, language}) =>{
    
  return (
    <Card elevation={3} className="card">
        <CardContent>
            <div style={{display: 'flex'}}><Chip label="ACLU" sx={{color: 'white', backgroundColor: 'red'}}/></div>
            <h3 style={{display: 'flex', textAlign: 'left'}}>{language === 'EN' ? article.titleEN : article.titleES}</h3>
            <p style={{display: 'flex', textAlign: 'left'}}>{language === 'EN' ? article.textEN : article.textES}</p>
        </CardContent>
        <CardActions sx={{display: 'flex', padding: '0 16px 16px 16px'}}>
            <Button href={article.link} target="_blank" size="medium" variant="outlined">{language === 'EN' ? 'Read more' : 'Leer más'}</Button>
        </CardActions>
    </Card>
  );
}