import React from "react";

const SEO = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "André Moura Passos",
        "url": "https://andremourapassos.com",
        "sameAs": [
            "https://twitter.com/andremourapassos",
            "https://www.linkedin.com/in/andremourapassos",
            "https://www.instagram.com/andremourapassos",
            "https://www.facebook.com/people/Andre-Moura-Passos/100090936608265/",
            "https://www.instagram.com/samebloodscocktail/"
        ],

        "jobTitle": "Compositor e Desenvolvedor",
        "worksFor": {
            "@type": "Organization",
            "name": "Projeto de Música Independente"
        }
    };

    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    );
};

export default SEO;
