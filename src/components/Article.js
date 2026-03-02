import { Button, Card, CardContent, CardActions, Chip } from "@mui/material";

export const Article = ({article}) =>{
    
  return (
    <Card elevation={3} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '300px'}}>
        <CardContent>
            <div style={{display: 'flex'}}><Chip label="ACLU"/></div>
            <h3 style={{display: 'flex', textAlign: 'left'}}>{article.title}</h3>
            <p style={{display: 'flex', textAlign: 'left'}}>{article.text}</p>
        </CardContent>
        <CardActions sx={{display: 'flex', padding: '16px'}}>
            <Button href={article.link} target="_blank" size="medium" variant="outlined">Read more</Button>
        </CardActions>
    </Card>
  );
}