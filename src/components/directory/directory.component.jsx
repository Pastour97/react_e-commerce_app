import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor () {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens',
                  },
                  {
                    title: 'mens',
                    //imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    imageUrl: 'https://i.pinimg.com/originals/03/b1/06/03b106452b10a7be52fc4e71cbe3a7a0.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens',
                }
            ]
        }
    }


    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map( ({ id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                        )
                    )
                }
            </div>
        )
    }
    
}



export default Directory;