import React from 'react';
import { IconType } from 'react-icons'; // Importa el tipo IconType desde tu biblioteca de iconos

interface Props {
    active: boolean;
    href: string;
    icon: IconType; // Usa el tipo IconType para los iconos
    title: string;
}

const IconLink: React.FC<Props> = ({ active, href, icon: Icon, title }) => {
    return (
        <a href={href} title={title} className={`transition-transform duration-300 ease-in-out hover:scale-125 icon-link text-textColor ${active ? 'active' : ''}`} style={{ display: 'inline-block', lineHeight: 0 }}>
            {Icon && <Icon size={32} />} {/* Ajusta el tamaño del icono a 32 píxeles */}
        </a>
    );
}

//className=""

export default IconLink;