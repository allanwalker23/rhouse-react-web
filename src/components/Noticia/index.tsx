import React from 'react'

interface NoticiaProps{
    titulo:string;
    subtitulo:string;
    
    url_foto:string;
}

const Noticia: React.FC<NoticiaProps> = ({titulo,subtitulo,url_foto}) =>{

    return (
        <div className="col-lg-4 col-md-6">
        <div className="blog-wrap-grid">
            
            <div className="blog-thumb">
                <a href="#"><img src={url_foto} className="img-fluid" alt="" /></a>
            </div>
            
            <div className="blog-info">
                <span className="post-date"><i className="ti-calendar"></i>Criado em 20/04/2021</span>
            </div>
            
            <div className="blog-body">
                <h4 className="bl-title"><a href="#">{titulo}</a></h4>
                <p>{subtitulo}</p>
                <a href="#" className="bl-continue" style={{fontFamily:'Montserrat'}}>Continuar</a>
            </div>
            
        </div>
    </div>

    )
}

export default Noticia;