
import { BIOMES } from '../../data/BiomesData'
import './Gallery.css'

export default function Gallery(){



  return (
    <>
      <div className='galleryContainer'>
        {BIOMES.map((item, index) => {
          return (
            <figure className='galleryCard' key={index}>
              <img src={item.photo} alt="biomas" />
            </figure>
            
          )
        })}
      </div>
    </>
  )
}