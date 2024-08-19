import { GifItem } from './gifItem.jsx';
import { useFetchGifs } from '../Hooks/useFetchGifs.js';

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs (category);

  return (
    <>
        <h3>{category}</h3>
        {
            // isLoading?(<h2>Cargando...</h2>): null
            isLoading && (<h2>Cargando...</h2>)
        }

        <div className='card-grid'>
            {images.map((image) =>(
                <GifItem key={image.id} 
                //title={image.title} url={image.url}
                {...image}
                />
            ))}
        </div>
    </>
  )
}
